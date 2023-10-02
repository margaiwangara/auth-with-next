'use client';
import Link from 'next/link';

type PageProps = 'login' | 'register';

type AuthFormProps = {
  page?: PageProps;
};

export default function AuthForm({ page = 'login' }: AuthFormProps) {
  return (
    <div className="card">
      <div className="card-header text-capitalize">{page}</div>
      <div className="card-body">
        <form action="#" method="POST">
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
              required
            />
          </div>
          <button className="btn btn-primary w-100">Login</button>
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
