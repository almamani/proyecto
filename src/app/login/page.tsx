import { Suspense } from "react";
import LoginComponent from "../../components/LoginComponent";

const Login = () => {
  return (
    <main>
      <h1>Login</h1>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
      </Suspense>
    </main>
  );
};

export default Login;
