import React from 'react'

const Loader = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
            <div className="border-2 border-t-primary border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
        </div>
    )
};

export default Loader