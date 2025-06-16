import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users.json`, {
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

const getSingleUser = (uid) =>
  new Promise((resolve, reject) => {
    console.log(uid);
    fetch(`${endpoint}/users/${uid}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getAllUsers = () =>
  new Promise((resolve, reject) => {
    console.log('API call for getAllUsers');
    fetch(`${endpoint}/users.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteSingleUser = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${payload.firebaseKey}.json`, {
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

export { createUser, getSingleUser, deleteSingleUser, updateUser, getAllUsers };
