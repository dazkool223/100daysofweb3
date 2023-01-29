export default function Card({ firstName, designation }) {
  return (
    <div className="outer-card">
      <div className="inner-card">
        <h1 className="ff-sans-cond uppercase ">{firstName}</h1>
        <h2 className="ff-sans-cond uppercase">{designation}</h2>
      </div>
    </div>
  );
}
