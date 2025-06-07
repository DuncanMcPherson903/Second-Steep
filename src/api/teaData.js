import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTeas = (uid) =>
  new Promise((resolve, reject) => {
    console.log(uid);
    fetch(`${endpoint}/teas.json?orderBy="uid"&equalTo="${uid}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const createTea = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teas.json`, {
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

const getSingleTea = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teas/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteSingleTea = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teas/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateTea = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teas/${payload.firebaseKey}.json`, {
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

export { getTeas, createTea, getSingleTea, deleteSingleTea, updateTea };
