'use client';

import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleTea } from '../api/teaData';

export default function TeaCard({ teaObj, onUpdate }) {
  const deleteThisTea = () => {
    if (window.confirm(`Delete ${teaObj.name}?`)) {
      deleteSingleTea(teaObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={teaObj.image} alt={teaObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teaObj.name}</Card.Title>

        {/* Link to Tea Details  */}
        <Link href={`/tea/${teaObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>

        {/* Link to Edit Tea  */}
        <Link href={`/tea/edit/${teaObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>

        <Button variant="danger" onClick={deleteThisTea} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TeaCard.propTypes = {
  teaObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
