import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getRegions = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/regions.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const deleteRegion = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/regions/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleRegion = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/regions/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createRegion = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/regions.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateRegion = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/regions/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getRegions, createRegion, deleteRegion, getSingleRegion, updateRegion };
