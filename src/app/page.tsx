import { redirect } from 'next/navigation';

import { getCurrentUser } from '@services/auth';
import { NavBar as NavigationBar } from '@components/ui';

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect('/login');

  return <NavigationBar />;
}
