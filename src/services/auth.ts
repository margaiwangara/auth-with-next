import { apiRequest } from '@lib/request';

type RegisterRequestInputProps = {
  name: string;
  email: string;
  password: string;
};

type LoginRequestInputProps = Omit<RegisterRequestInputProps, 'name'>;

export async function loginUser(userInput: LoginRequestInputProps) {
  try {
    const res = await apiRequest('POST', '/api/auth/login', userInput);
    return res;
  } catch (error) {
    return error;
  }
}

export async function registerUser(userInput: RegisterRequestInputProps) {
  try {
    const res = await apiRequest('POST', '/api/auth/register', userInput);
    return res;
  } catch (error) {
    return error;
  }
}

export async function getCurrentUser() {
  try {
    const user = await apiRequest('GET', '/api/auth/current-user');
    return Object.keys(user || {}).length ? user : null;
  } catch (error) {
    return null;
  }
}

export async function logoutUser() {
  try {
    await apiRequest('POST', '/api/auth/logout');
    return null;
  } catch (error) {
    return error;
  }
}
