import React from 'react';
import assets from '../../assets/assets.js';

const SidebarHeader = () => {
  return (
    <div className="flex items-center">
      <img src={assets.Logo} alt="Synko Logo" className='w-[171px] h-[141px]'/>
      <span className="text-2xl font-semibold">Synko</span>
    </div>
  );
};

export default SidebarHeader;
