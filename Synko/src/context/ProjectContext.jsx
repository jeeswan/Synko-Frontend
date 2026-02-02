import React, { createContext, useContext, useEffect, useState } from 'react'
import api from "../services/api";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            await api.get('/sanctum/csrf-cookie', { withCredentials: true }); // Ensure CSRF cookie is set
            const res = await api.get('/projects', { withCredentials: true });
            setProjects(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };
        
    const createProject = async (payload) => {
        try {
            await api.get('/sanctum/csrf-cookie', { withCredentials: true }); // Ensure CSRF cookie is set
            const res = await api.post('/projects', payload, { withCredentials: true });
            setProjects(prev => [...prev, res.data.data]);
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };
        
    useEffect(() => {
        fetchProjects();
    }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading, createProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => useContext(ProjectContext);