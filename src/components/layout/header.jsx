import { Link, NavLink } from "react-router-dom";
// NavLink moi lan lick trang , NavLink se tu dong them class : active vao tung the li => tu css
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink class="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/users">User</NavLink>
      </li>
      <li>
        <NavLink to="/project">Product</NavLink>
      </li>
    </ul>
  );
};
export default Header;
