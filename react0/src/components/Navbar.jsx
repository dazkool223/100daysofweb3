import Globe from "../assets/globe.jsx";
export default function Navbar() {
  return (
    <nav className="flex navbar">
      {/* <div>
        <Globe className="logo" />
      </div> */}
      <ul className="navbar-content ff-sans-normal fs-500 letter-spacing-3">
        <li>home</li>
        <li>about</li>
        <li>team</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}
