'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useUserContext } from '@store/ctx';
import { logoutUser } from '@services/auth';

export default function NavBar() {
  const { user } = useUserContext();

  const router = useRouter();

  const logout = async () => {
    try {
      await logoutUser();
      router.replace('/login');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          AuthWithNext
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="nav-link">{user?.name}</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
