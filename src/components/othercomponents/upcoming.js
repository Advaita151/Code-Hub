// Upcoming contests 
import React from 'react';

const Upcoming = ({ imageUrl, title, description }) => {
    const getStartedButtonStylesnew = 'rounded-full bg-black py-2 px-4 text-white hover:bg-green-200 focus:bg-green-200 mt-1 '; 

  return (
    <>
    
    <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col gap-1 h-50 w-40">
      <img src={imageUrl} alt={title} className="w-full h-20 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className={getStartedButtonStylesnew}>Register</button>
    </div></>
  );
};

export default Upcoming;
