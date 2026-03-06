import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api"; // your axios instance with token interceptor

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

  return (
    <ProjectContext.Provider
      value={{ user, setUser, projects, loading, createProject }}
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