'use client';

import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { getTeasByUid } from '@/api/teaData';
// import { getAllUsers } from '@/api/userData';
import TeaCard from '@/components/TeaCard';
import { getSingleUser } from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewProfile() {
  const [teas, setTeas] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const { user } = useAuth();

  const getDetails = () => {
    getSingleUser(user.uid).then(setUserDetails);
    getTeasByUid(user.uid).then(setTeas);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className="tea-container">
        {/* User Image */}
        <div className="d-flex align-items-center">
          {userDetails.image && <Image src={userDetails.image} alt={userDetails.first_name || 'User'} width={400} height={300} style={{ objectFit: 'cover' }} />}
          <h1>
            {userDetails.first_name} {userDetails.last_name}
          </h1>
        </div>

        {/* Tea Details */}
        <div className="region-cards">
          <div className="d-flex align-items-center">
            <h2>My Teas</h2>
            <a href={`/teas/new`}>Add New Tea</a>
          </div>
          <div className="d-flex flex-wrap">
            {teas.map((tea) => (
              <TeaCard key={tea.firebaseKey} teaObj={tea} onUpdate={getDetails} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
