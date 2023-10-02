type RequestMethods = 'POST' | 'GET' | 'PUT' | 'DELETE';

let API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiRequest(
  method: RequestMethods,
  url: string,
  data?: any,
) {
  const headers = {
    'Content-Type': 'application/json',
  } as Record<string, string>;

  // add cookies to authorization header for server
  if (typeof window === 'undefined') {
    API_BASE_URL = process.env.API_BASE_URL;

    const { cookies } = await import('next/headers');
    const token = cookies().get('access_token')?.value;
    headers['Authorization'] = token ?? `Bearer ${token}`;
  }

  return fetch(`${API_BASE_URL}${url}`, {
    method,
    credentials: 'include', // send jwt in cookies from client to server with every request
    headers,
    body: method !== 'GET' ? JSON.stringify(data || {}) : undefined,
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(res.json());
      return res.json();
    })
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error));
}
