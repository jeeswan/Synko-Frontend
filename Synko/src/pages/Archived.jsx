import { Archive } from 'lucide-react'
import React from 'react'

const Archived = () => {
  return (
    <div className='space-y-1'>
      <div className='pb-4'>
        <h1 className='text-2xl font-semibold'>Archived Projects</h1>
        <p className='text-sm text-gray-500 font-light'>Manage your archived projects. Restore or permanently delete them.</p>
      </div>
      <div className='border border-gray-100 bg-gray-50 rounded-md shadow-md'>
        <Archive size={48} className='text-gray-500 mx-auto mt-10' />
        <h2 className='text-center text-lg font-medium mt-4'>No archived projects yet</h2>
        <p className='text-center text-sm text-gray-500 mt-2 mb-10'>Projects that are archived will appear here.</p>
      </div>
    </div>
  )
}

export default Archived
