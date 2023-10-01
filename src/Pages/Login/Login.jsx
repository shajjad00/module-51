import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSign = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-2xl text-center mt-3 text-green-500">Login Now</h2>
      <form
        onSubmit={handleLogin}
        className="p-1 space-y-5 max-w-screen-sm mx-auto mt-4"
      >
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="input input-bordered input-accent w-full"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Your Password"
          name="password"
          className="input input-bordered input-accent w-full "
          required
        />
        <br />
        <input
          type="submit"
          name="LOGIN"
          className="input input-bordered input-accent w-full "
        />
      </form>
      <p className="text-center mt-5 text-2xl text-green-500">
        New Here? please
        <button className="btn btn-success ml-2 text-white">
          <Link to="/register">Register</Link>
        </button>
      </p>
      <p>
        <button
          onClick={handleGoogleSign}
          className="btn btn-success ml-2 text-white"
        >
          Google Login
        </button>
      </p>
    </div>
  );
};

export default Login;
