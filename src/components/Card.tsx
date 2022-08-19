import "../styles/Card.css";
export type Cardsprops = {
  name: string;
  time: string;
};
// interface Cards {
//     name:string
//     time:string
// }
export default function Card(props: Cardsprops) {
  return (
    <>
      <div className="card">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
      </div>
    </>
  );
}
