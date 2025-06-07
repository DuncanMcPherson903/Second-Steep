'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { getSingleRegion } from '../../../api/regionData';

export default function ViewRegion({ params }) {
  const [regionDetails, setRegionDetails] = useState({});

  const { firebaseKey } = params;

  const getDetails = () => {
    getSingleRegion(firebaseKey).then(setRegionDetails);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className="org-container">
        {/* Region Image */}
        <div>{regionDetails.image && <Image src={regionDetails.image} alt={regionDetails.name || 'Region'} wfirebaseKeyth={400} height={300} style={{ objectFit: 'cover' }} />}</div>

        {/* Region Details */}
        <div>
          <h1>{regionDetails.name}</h1>
          <p>{regionDetails.location}</p>
        </div>
      </div>
    </div>
  );
}

ViewRegion.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
