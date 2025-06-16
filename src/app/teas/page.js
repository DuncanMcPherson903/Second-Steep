/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import TeaCard from '@/components/TeaCard';
import { getAllTeas } from '../../api/teaData';

function Home() {
  const [teas, setTeas] = useState([]);

  const getAllTheTeas = () => {
    getAllTeas().then(setTeas);
  };

  useEffect(() => {
    getAllTheTeas();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {teas.map((tea) => (
          <TeaCard key={tea.firebaseKey} teaObj={tea} onUpdate={getAllTheTeas} />
        ))}
      </div>
    </div>
  );
}

export default Home;
