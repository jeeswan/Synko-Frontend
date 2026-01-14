import React from 'react'
import StatSection from './StatSection'

const StatCard = ({ label, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-start hover:shadow-xl transition-shadow">
      <div>
        <p className="text-gray-500">{label}</p>
        <h2 className="text-2xl font-semibold mt-1">{value}</h2>
      </div>

      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={20} />
      </div>
    </div>
  );
};


export default StatCard
