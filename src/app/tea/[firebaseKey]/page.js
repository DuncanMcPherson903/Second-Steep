'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { getSingleTea } from '../../../api/teaData';
import { getSingleRegion } from '../../../api/regionData';

export default function ViewTea({ params }) {
  const [teaDetails, setTeaDetails] = useState({});
  const [regionDetails, setRegionDetails] = useState({});

  const { firebaseKey } = params;

  const getDetails = () => {
    getSingleTea(firebaseKey).then((teaObj) => {
      setTeaDetails(teaObj);
      getSingleRegion(teaObj.region).then(setRegionDetails);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className="org-container">
        {/* Tea Image */}
        <div>{teaDetails.image && <Image src={teaDetails.image} alt={teaDetails.name || 'Tea'} wfirebaseKeyth={400} height={300} style={{ objectFit: 'cover' }} />}</div>

        {/* Tea Details */}
        <div>
          <h1>{teaDetails.name}</h1>
          <p>{regionDetails.name}</p>
        </div>
      </div>
    </div>
  );
}

ViewTea.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
