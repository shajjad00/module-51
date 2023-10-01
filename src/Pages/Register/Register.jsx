import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-2xl text-center mt-3 text-green-500">
        Registration Form
      </h2>
      <form
        onSubmit={handleRegister}
        className="p-1 space-y-5 max-w-screen-sm mx-auto mt-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="input input-bordered input-accent w-full"
          required
        />
        <br />
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
          name="Register"
          className="input input-bordered input-accent w-full cursor-pointer"
        />
      </form>
      <p className="text-center mt-5 text-2xl text-green-500">
        Already Have an account?
        <button className="btn bg-green-500  ml-2 text-white">
          <Link to="/login">Login</Link>
        </button>
      </p>
    </div>
  );
};

export default Register;
