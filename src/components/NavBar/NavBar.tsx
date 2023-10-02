'use client';
import Link from 'next/link';

import { useUserContext } from '@store/ctx';

export default function NavBar() {
  const { user } = useUserContext();

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          AuthWithNext
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              {user?.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
