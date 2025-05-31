'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TeaForm from '@/components/forms/TeaForm';
import { getSingleTea } from '@/api/teaData';

export default function EditAuthor({ params }) {
  const [editItem, setEditItem] = useState({});
  // TODO: grab the firebasekey
  const { firebaseKey } = params;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleTea(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return <TeaForm obj={editItem} />;
}

EditAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
