import { createContext, useContext, useState } from "react";
import api from "../services/api"; 

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (taskData) => {
  // Laravel expects label_ids and user_ids as arrays of integers
    const payload = {
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority,
      status: taskData.status,
      due_date: taskData.dueDate,
      project_id: taskData.project_id,
      label_ids: taskData.labelIds || [], // array of numbers
      user_ids: taskData.assignees?.map(u => u.id) || [], // array of numbers
    };

    const res = await api.post(`/projects/${taskData.project_id}/tasks`, payload);
    setTasks((prev) => [...prev, res.data.data]);

    return res.data.data;
  };

  const getTasks = async (projectId) => {
    const res = await api.get(`/projects/${projectId}/tasks`);
    setTasks(res.data);
  };

  const updateTask = async (taskId, payload) => {
  try {
    const res = await api.patch(`/tasks/${taskId}`, payload);
    const updatedTask = res.data.data;

    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? updatedTask : t))
    );

    return updatedTask;
  } catch (err) {
    console.error("Failed to update task:", err);
    throw err;
  }
};

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used inside TaskProvider");
  return context;
};