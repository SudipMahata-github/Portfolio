// src/components/Preloader.js
import React from 'react';

const Preloader = () => {
    return (
        <div className="flex justify-center items-center h-[90vh] ">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-gray-900 animate-spin absolute flex items-center justify-center text-2xl font-bold">S</div>
        </div>
    );
};

export default Preloader;
