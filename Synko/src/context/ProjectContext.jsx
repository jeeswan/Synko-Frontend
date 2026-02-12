import React, { createContext, use, useContext, useEffect, useState } from 'react'
import api from "../services/api";
import apiAuth from '../services/apiAuth';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            await api.get('/sanctum/csrf-cookie', { withCredentials: true }); // Ensure CSRF cookie is set
            const res = await api.get('/projects', { 
                withCredentials: true,
            });
            setProjects(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };
        
    const createProject = async (payload) => {
        try {
            await apiAuth.get('/sanctum/csrf-cookie', { withCredentials: true }); // Ensure CSRF cookie is set
            const res = await api.post('projects', payload, { withCredentials: true });
            setProjects(prev => [...prev, res.data.data]);
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    const checkUser = async () => {
        try {
            await apiAuth.get('/sanctum/csrf-cookie', { withCredentials: true }); // Ensure CSRF cookie is set
            // const res = await api.get('/user', { withCredentials: true }); // API returns current user
            // setUser(res.data);
            // if (res.data) await fetchProjects();
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
        
    useEffect(() => {
        if (user) {
        fetchProjects(); // fetch projects only if user is set
        }
    }, [user]);

  return (
    <ProjectContext.Provider value={{ user, setUser, projects, loading, createProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => useContext(ProjectContext);