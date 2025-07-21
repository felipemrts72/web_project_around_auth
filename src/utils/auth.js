export const BASE_URL = 'https://se-register-api.en.tripleten-services.com/v1';

export const register = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    // Se o backend manda mensagem de erro, use ela. Caso contrário, usa o status.
    const errorMessage = data?.message || `Erro no registro (${res.status})`;
    throw new Error(errorMessage);
  }

  return data;
};

export const authorize = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  });

  const data = await res.json();

  if (!res.ok) {
    const errorMessage = data?.message || `Erro no login (${res.status})`;
    throw new Error(errorMessage);
  }

  return data;
};

export const check = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error - CHECK: ${res.status}`);
  });
};
