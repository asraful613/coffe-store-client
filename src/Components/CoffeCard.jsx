import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({coffee,handleDelete}) => {
    const{ _id,name,quantity,supplier,test,category,details,photo}=coffee;
   
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-4">
   <div> <h2 className="card-title">{name}!</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{test}</p>
</div>
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-4">
  <button className="btn join-item">view</button>
  <Link to={`/updateCoffe/${_id}`}><button className="btn join-item">edit</button></Link>
  <button 
  onClick={()=>handleDelete(_id)}
  className="btn join-item bg-orange-500">x</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeCard;