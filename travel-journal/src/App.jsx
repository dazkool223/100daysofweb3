import Navbar from "./components/Navbar";
import "./App.css";
import data from "./data";
import Card from "./components/Card";
export default function App() {
  const card = data.map((item) => {
    return (
      <div className="card-list">
        <Card key={item.id} {...item} />
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      {card}
    </div>
  );
}
