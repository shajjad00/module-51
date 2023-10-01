import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center gap-7 bg-green-500 py-5 text-white text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      {user && (
        <>
          <NavLink to="/orders">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
      <div className="ml-auto">
        {user && (
          <div>
            <span className="mr-5">{user.email}</span>
            <button onClick={handleLogOut}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
