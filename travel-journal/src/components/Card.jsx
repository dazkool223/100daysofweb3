import { MdLocationPin } from "react-icons/md";
export default function Card(props) {
  return (
    <div className="flex card ff-regular">
      <img src={props.imageUrl} className="location-image" />
      <div className="content">
        <MdLocationPin className="pointer" />
        <h2 className="flex h2-card ff-regular uppercase">
          {props.location}
          <a href={props.googleMapsUrl}>View of google maps</a>
        </h2>
        <h1 className="ff-regular card-title">{props.title}</h1>
        <p className="date">{`${props.startDate} - ${props.endDate}`}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
