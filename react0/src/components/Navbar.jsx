export default function Navbar() {
  return (
    <header className="flex text-accent header">
      <div>
        <img src=". src/assets/react.svg" className="logo" alt="logo"></img>
      </div>
      <nav className="navbar">
        <ul className="uppercase ff-sans-cond flex fs-500">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
