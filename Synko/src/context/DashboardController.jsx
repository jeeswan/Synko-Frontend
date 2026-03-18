import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [stats, setStats] = useState({
    total_projects: 0,
    completed_tasks: 0,
    in_progress: 0,
    overdue: 0,
  });

  const [statsLoading, setStatsLoading] = useState(false);

  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      const res = await api.get("/dashboard/stats");

      if (res.data.status) {
        setStats(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        stats,
        statsLoading,
        fetchStats,
        setStats,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);