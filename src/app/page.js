/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getTeas } from '../api/teaData';
import TeaCard from '../components/TeaCard';

function Home() {
  const [teas, setTeas] = useState([]);

  const getAllTheTeas = () => {
    getTeas().then(setTeas);
  };

  useEffect(() => {
    getAllTheTeas();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/tea/new" passHref>
        <Button>Add A Tea</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {teas.map((tea) => (
          <TeaCard key={tea.firebaseKey} teaObj={tea} onUpdate={getAllTheTeas} />
        ))}
      </div>
    </div>
  );
}

export default Home;
