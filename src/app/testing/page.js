'use client';

import PropTypes from 'prop-types';

export default function TestCard() {
  return (
    <div>
      <div style={{ width: '18rem', margin: '10px', backgroundColor: 'green' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
          <img style={{ width: '100%', objectFit: 'cover', padding: '10px' }} src="https://yunnansourcing.com/cdn/shop/products/1_4e159044-9e47-49e9-90e7-80eb6c5137a0_625x625.jpg?v=1599407447" alt="Tea" />
          <h5 style={{ padding: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>2020 Yunnan Sourcing SanHeShe Yi Wu Raw Pu-erh Tea Cake</h5>
        </a>
      </div>
    </div>
  );
}

TestCard.propTypes = {
  teaObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
