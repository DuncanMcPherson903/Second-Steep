'use client';

import PropTypes from 'prop-types';

export default function TeaCard({ teaObj }) {
  return (
    <div style={{ width: '18rem', margin: '10px', backgroundColor: teaObj.type }}>
      <a href={`/teas/${teaObj.firebaseKey}`} style={{ color: 'white', textDecoration: 'none' }}>
        <img style={{ width: '100%', height: '267px', objectFit: 'cover', padding: '10px' }} src={teaObj.image} alt={teaObj.name} />
        <h5 style={{ padding: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{teaObj.name}</h5>
      </a>
    </div>
  );
}

TeaCard.propTypes = {
  teaObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
