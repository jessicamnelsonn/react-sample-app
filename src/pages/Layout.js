import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-purple-500 p-4">
        <ul className="flex space-x-5 text-xl">
          <li>
            <Link to="/" className="text-white hover:text-pink-200">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-pink-200">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;