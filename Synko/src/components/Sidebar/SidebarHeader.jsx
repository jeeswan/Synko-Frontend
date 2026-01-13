import React from 'react';
import assets from '../../assets/assets.js';

const SidebarHeader = () => {
  return (
    <div className="flex items-center p-5 gap-1">
      <img src={assets.logo_synko} alt="Synko Logo" className='w-15 h-10'/>
      <span className="text-3xl font-semibold">Synko</span>
    </div>
  );
};

export default SidebarHeader;
