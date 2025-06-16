'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTea, updateTea } from '../../api/teaData';
import { getRegions } from '../../api/regionData';

const initialState = {
  name: '',
  image: '',
  region: '',
  type: '',
};

function TeaForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  const [regions, setRegions] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
    getRegions().then(setRegions);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateTea(formInput).then(() => router.push('/'));
    } else {
      console.log(formInput);
      const payload = { ...formInput, uid: user.uid };
      createTea(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTea(patchPayload).then(() => {
          router.push('/teas');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Tea</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter tea's name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Tea Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      {/* Type Select  */}
      <Form.Select aria-label="Type" name="type" onChange={handleChange} required>
        <option value="">Select a type</option>
        <option value="white">White Tea</option>
        <option value="green">Green Tea</option>
        <option value="brown">Oolong Tea</option>
        <option value="black">Black Tea</option>
        <option value="grey">Puer Tea</option>
      </Form.Select>

      {/* Region Select  */}
      <Form.Select aria-label="Region" name="region" onChange={handleChange} required>
        <option value="">Select a region</option>
        {regions.map((region) => (
          <option value={region.firebaseKey} key={region.firebaseKey}>
            {region.name}
          </option>
        ))}
      </Form.Select>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Tea</Button>
    </Form>
  );
}

TeaForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    region: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

export default TeaForm;
