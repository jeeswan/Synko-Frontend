import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import { DashboardProvider } from './context/DashboardController.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProjectProvider>
      <TaskProvider>
        <DashboardProvider>
          <App />
        </DashboardProvider>
      </TaskProvider>
    </ProjectProvider>
  </BrowserRouter>,
);