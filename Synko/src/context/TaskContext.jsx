import { createContext, useContext, useState } from "react";
import api from "../services/api"; 

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (taskData) => {
    const res = await api.post(`/projects/${taskData.project_id}/tasks`, taskData);

    setTasks((prev) => [...prev, res.data.data]);

    return res.data.data;
  };

  const getTasks = async (projectId) => {
    const res = await api.get(`/projects/${projectId}/tasks`);
    setTasks(res.data);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used inside TaskProvider");
  return context;
};