export default function Card(props) {
  return (
    <div className="outer-card">
      <div className="inner-card">
        <h1 className="ff-sans-cond uppercase ">{props.firstName}</h1>
        <h2 className="ff-sans-cond uppercase">{props.designation}</h2>
      </div>
    </div>
  );
}
