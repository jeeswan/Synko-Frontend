import { createContext, useContext, useState, useCallback, useRef } from "react";
import api from "../services/api";
import { useProject } from "./ProjectContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useProject();

  // Track in-flight requests
  const fetchingProjectsRef = useRef(new Set());

  // Track loaded projects
  const loadedProjectsRef = useRef(new Set());

  const createTask = useCallback(async (taskData) => {
    const payload = {
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority,
      status: taskData.status,
      due_date: taskData.due_date,
      project_id: taskData.project_id,
      label_ids: taskData.label_ids || [],
      user_ids: taskData.user_ids || [],
    };

    const res = await api.post(`/projects/${taskData.project_id}/tasks`, payload);

    const createdTask = res.data.data || res.data;

    setTasks((prev) => [...prev, createdTask]);
    loadedProjectsRef.current.add(Number(taskData.project_id));

    return res.data.data;
  }, []);

  const getTasks = useCallback(async (projectId, force = false) => {
    if (!projectId) return;

    const normalizedProjectId = Number(projectId);

    if (fetchingProjectsRef.current.has(normalizedProjectId)) {
      return;
    }

    if (loadedProjectsRef.current.has(normalizedProjectId) && !force) {
      return;
    }

    fetchingProjectsRef.current.add(normalizedProjectId);

    try {
      const res = await api.get(`/projects/${normalizedProjectId}/tasks`);
      const fetchedTasks = Array.isArray(res.data) ? res.data : res.data?.data || [];

      setTasks((prev) => [
        ...prev.filter((t) => Number(t.project_id) !== normalizedProjectId),
        ...fetchedTasks,
      ]);

      loadedProjectsRef.current.add(normalizedProjectId);
    } catch (err) {
      if (err.response?.status === 429) {
        console.warn(`Too many requests for project ${normalizedProjectId}`);
      } else {
        console.error("Failed to fetch tasks:", err);
      }
      throw err;
    } finally {
      fetchingProjectsRef.current.delete(normalizedProjectId);
    }
  }, []);

  const canEditTask = useCallback((task, user) => {
    if (!user) return false;

    const isAssigned = task.users?.some((u) => u.id === user.id);
    const isTaskCreator = task.created_by === user.id;
    const isProjectOwner = task.project?.user_id === user.id;

    return isAssigned || isTaskCreator || isProjectOwner;
  }, []);

  const updateTask = useCallback(async (taskId, payload) => {
    const task = tasks.find((t) => t.id === taskId);

    if (!task || !canEditTask(task, user)) {
      throw new Error("You do not have permission to edit this task.");
    }

    try {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, ...payload } : t))
      );

      const res = await api.put(`/tasks/${taskId}`, payload);
      const updatedTask = res.data.data;

      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? updatedTask : t))
      );

      return updatedTask;
    } catch (err) {
      setTasks((prev) => prev.map((t) => (t.id === taskId ? task : t)));
      console.error("Failed to update task:", err);
      throw err;
    }
  }, [tasks, canEditTask, user]);

  const archiveTask = useCallback(async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);

    if (!task || !canEditTask(task, user)) {
      throw new Error("You do not have permission to archive this task.");
    }

    try {
      const res = await api.patch(`/tasks/${taskId}/archive`);
      const archivedTask = res.data.data;

      setTasks((prev) => prev.filter((t) => t.id !== taskId));

      return archivedTask;
    } catch (err) {
      console.error("Failed to archive task:", err);
      throw err;
    }
  }, [tasks, canEditTask, user]);

  const deleteTask = useCallback(async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);

    if (!task || !canEditTask(task, user)) {
      throw new Error("You do not have permission to delete this task.");
    }

    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    } catch (err) {
      console.error("Failed to delete task:", err);
      throw err;
    }
  }, [tasks, canEditTask, user]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        updateTask,
        deleteTask,
        archiveTask,
        canEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used inside TaskProvider");
  return context;
};