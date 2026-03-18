import React from 'react'
import { Folder, CircleCheck, Clock, CircleAlert } from 'lucide-react'
import StatCard from './StatCard'
import { useDashboard } from '../../context/DashboardController'

const StatSection = () => {
  const { stats, statsLoading } = useDashboard();
    const statsItems = [
    {
        label: 'Total Projects',
        value: stats.total_projects,
        icon: Folder,
        color: 'text-blue-500',
    },
    {
        label: 'Completed Tasks',
        value: stats.completed_tasks,
        icon: CircleCheck,
        color: 'text-green-500',
    },
    {
        label: 'In Progress',
        value: stats.in_progress,
        icon: Clock,
        color: 'text-orange-500',
    },
    {
        label: 'Overdue',
        value: stats.overdue,
        icon: CircleAlert,
        color: 'text-red-500',
    },
    ];

    if (statsLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md animate-pulse h-28"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
      {statsItems.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}

export default StatSection
