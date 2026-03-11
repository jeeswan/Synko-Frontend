import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api"; 

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects"); // axios handles Bearer token automatically
      setProjects(res.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Star a project
  const toggleStarProject = async (projectId) => {
    try {
      const res = await api.patch(`/projects/${projectId}/star`);

      const updatedProject = res.data.data;

      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId ? { ...p, is_starred: updatedProject.is_starred } : p
        )
      );
    } catch (error) {
      console.error("Error toggling star:", error);
    }
  };

  // Create a new project
  const createProject = async (payload) => {
    try {
      const res = await api.post("/projects", payload);

      const project = res.data.data;

      setProjects((prev) => [...prev, project]);

      return project; 
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const archiveProject = async (projectId) => {
    try {
      const res = await api.patch(`/projects/${projectId}/archive`);
      const updatedProject = res.data.data; // should contain is_archived: true

      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId ? { ...p, is_archived: updatedProject.is_archived } : p
        )
      );
    } catch (error) {
      console.error("Error archiving project:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await api.delete(`/projects/${projectId}`);
      setProjects((prev) => prev.filter((p) => p.id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Check user (on app load)
  const checkUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/user");
      setUser(res.data);
    } catch (error) {
      setUser(null);
      localStorage.removeItem("token"); // auto logout if token invalid
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (user) fetchProjects();
  }, [user]);

  const starredProjects = projects.filter((p) => p.is_starred);
  return (
    <ProjectContext.Provider
      value={{ user, setUser, projects, loading, createProject, toggleStarProject, starredProjects, deleteProject, archiveProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProject must be used inside ProjectProvider");
  return context;
};