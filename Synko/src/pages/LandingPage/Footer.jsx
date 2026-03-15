import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white py-7 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Synko. All rights reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer
