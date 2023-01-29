import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex navbar ff-regular uppercase">
      <FaGlobe className="main-logo" />
      <h1 className="main-title">The Explorer</h1>
    </div>
  );
}
