'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMount } from 'react-use';

import { useUserContext } from '@store/ctx';
import { getCurrentUser, logoutUser } from '@services/auth';

export default function NavBar() {
  const { user, setUser } = useUserContext();

  const router = useRouter();

  const logout = async () => {
    try {
      await logoutUser();
      router.replace('/login');
    } catch (error) {
      console.log('error', error);
    }
  };

  // get current user
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
        return;
      }

      router.replace('/login');
    } catch (error) {
      setUser(null);
      router.replace('/login');
    }
  };

  useMount(() => user || fetchCurrentUser());

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
