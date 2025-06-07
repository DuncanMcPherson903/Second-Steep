'use client';

import PropTypes from 'prop-types';

export default function RegionCard({ regionObj }) {
  return (
    <div style={{ width: '18rem', margin: '10px', backgroundColor: 'green' }}>
      <a href={`/regions/${regionObj.firebaseKey}`} style={{ color: 'white', textDecoration: 'none' }}>
        <h5 style={{ padding: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{regionObj.name}</h5>
      </a>
    </div>
  );
}

RegionCard.propTypes = {
  regionObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
