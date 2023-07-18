import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <menu className="header-menu">
      
      <Link className="hover-effect" to="/">
        <h2>Home</h2>
      </Link>
      <Link className="hover-effect" to="/">
        <h2>About</h2>
      </Link>

    </menu>
  );
}