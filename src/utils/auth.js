export const BASE_URL = 'https://se-register-api.en.tripleten-services.com/v1';

export const register = async ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Error - REGISTER: ${res.status}`);
  });
};

export const authorize = async ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error - LOGIN: ${res.status}`);
  });
};

export const check = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: '   GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error - CHECK: ${res.status}`);
  });
};
