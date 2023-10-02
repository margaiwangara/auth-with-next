import { AuthForm } from '@components/ui';

export default function Register() {
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
