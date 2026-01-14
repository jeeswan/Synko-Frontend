import React from 'react'
import { Folder, CircleCheck, Clock, CircleAlert } from 'lucide-react'
import StatCard from './StatCard'

const StatSection = () => {
    const stats = [
    {
        label: 'Total Projects',
        value: 4,
        icon: Folder,
        color: 'text-blue-500',
    },
    {
        label: 'Completed Tasks',
        value: 10,
        icon: CircleCheck,
        color: 'text-green-500',
    },
    {
        label: 'In Progress',
        value: 4,
        icon: Clock,
        color: 'text-orange-500',
    },
    {
        label: 'Overdue',
        value: 4,
        icon: CircleAlert,
        color: 'text-red-500',
    },
    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}

export default StatSection
