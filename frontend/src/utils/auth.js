const BASE_URL = 'https://api.mesto.dashalalala24.nomoredomains.work';

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка в auth: ${res.status} ${res.statusText}`);
  }
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkRes);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
};
