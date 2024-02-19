import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/user/details',{withCredentials:true}); // Adjust the API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <div className="flex items-center mb-4">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            {/* Placeholder profile picture */}
            <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            {userData && (
              <>
                <h2 className="text-xl font-semibold">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Codeforces Details</h3>
          {userData && (
            <div className="text-gray-700">
              <p><span className="font-semibold">Username:</span> {userData.codeforces}</p>
              <p><span className="font-semibold">Rating:</span> {userData.forcesRating}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
