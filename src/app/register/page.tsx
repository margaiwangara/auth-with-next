import { redirect } from 'next/navigation';

import { AuthForm } from '@components/ui';
import { getCurrentUser } from '@services/auth';

export default async function Register() {
  const user = await getCurrentUser();

  if (user) redirect('/');
  return (
    <section className="container">
      <div className="row mt-md-5">
        <div className="col-md-4 offset-md-4">
          <AuthForm page="register" />
        </div>
      </div>
    </section>
  );
}
