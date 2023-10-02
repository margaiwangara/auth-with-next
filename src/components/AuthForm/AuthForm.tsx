'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { getCurrentUser, loginUser, registerUser } from '@services/auth';
import { useUserContext } from '@store/ctx';

type PageProps = 'login' | 'register';

type AuthFormProps = {
  page?: PageProps;
};

export default function AuthForm({ page = 'login' }: AuthFormProps) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useUserContext();

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data =
        page === 'login'
          ? await loginUser({ email: values.email, password: values.password })
          : await registerUser(values);

      // check if error exists
      if (data?.detail) {
        setError(
          page === 'login'
            ? 'Invalid credentials'
            : 'Oops! Something went wrong',
        );
        setLoading(false);
        return;
      }

      // get current user and add to context
      const currentUser = await getCurrentUser();

      if (!currentUser) {
        setError('Invalid credentials');
        return;
      }

      setUser(currentUser);
      setLoading(false);
      router.replace('/');
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header text-capitalize">{page}</div>
      <div className="card-body">
        <form action="#" method="POST" onSubmit={onSubmit}>
          {error && (
            <div className="alert alert-dismissible alert-danger">{error}</div>
          )}
          {page === 'register' && (
            <div className="form-group">
              <label className="form-label" htmlFor="name-field">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name-field"
                className="form-control"
                onChange={onChange}
                value={values.name}
                required
              />
            </div>
          )}
          <div className="form-group my-3">
            <label className="form-label" htmlFor="email-field">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email-field"
              className="form-control"
              onChange={onChange}
              value={values.email}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="password-field">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password-field"
              className="form-control"
              onChange={onChange}
              value={values.password}
              minLength={8}
              required
            />
          </div>
          <button
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
            disabled={loading}
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                style={{ marginRight: 5 }}
              >
                <span className="visually-hidden">Loading...</span>
              </span>
            )}
            <span className="text-capitalize">{page}</span>
          </button>
          <div className="d-flex mt-3 align-items-center">
            <p className="text-muted mb-0">
              {page === 'login' ? 'Not a member?' : 'Already a member?'}
            </p>
            <Link
              href={page === 'login' ? 'register' : 'login'}
              className="mx-1"
            >
              {page === 'login' ? 'Register' : 'Login'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
