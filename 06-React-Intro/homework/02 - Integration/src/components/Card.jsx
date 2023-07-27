export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <div>{props.id}</div>
         <div>{props.name}</div>
         <div>{props.status}</div>
         <div>{props.species}</div>
         <div>{props.gender}</div>
         <div>{props.origin}</div>     
         <img src={props.image} alt={`${props.name} image`} /> 
      </div>
   );
}
