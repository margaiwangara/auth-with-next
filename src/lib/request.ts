type RequestMethods = 'POST' | 'GET' | 'PUT' | 'DELETE';

export function apiRequest(method: RequestMethods, url: string, data?: any) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method,
    credentials: 'include', // send jwt in cookies from client to server with every request
    headers: {
      'Content-Type': 'application/json',
    },
    body: method !== 'GET' ? JSON.stringify(data || {}) : undefined,
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(res.json());
      return res.json();
    })
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error));
}
