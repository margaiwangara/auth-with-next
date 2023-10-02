import { AuthForm } from '@components/ui';

export default function Login() {
  return (
    <section className="container">
      <div className="row mt-md-5 mt-sm-3">
        <div className="col-md-4 offset-md-4">
          <AuthForm />
        </div>
      </div>
    </section>
  );
}
