/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import { getAllTeas } from '../api/teaData';
import { getRegions } from '../api/regionData';
import TeaCard from '../components/TeaCard';
import RegionCard from '../components/RegionCard';

function Home() {
  const [teas, setTeas] = useState([]);
  const [regions, setRegions] = useState([]);

  const getAllTheTeas = () => {
    getAllTeas().then(setTeas);
  };

  const getAllTheRegions = () => {
    getRegions().then(setRegions);
  };

  useEffect(() => {
    getAllTheTeas();
    getAllTheRegions();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="tea-cards d-flex flex-wrap">
        {teas.map((tea) => (
          <TeaCard key={tea.firebaseKey} teaObj={tea} onUpdate={getAllTheTeas} />
        ))}
      </div>
      <div className="region-cards d-flex flex-wrap">
        {regions.map((region) => (
          <RegionCard key={region.firebaseKey} regionObj={region} onUpdate={getAllTheRegions} />
        ))}
      </div>
    </div>
  );
}

export default Home;
