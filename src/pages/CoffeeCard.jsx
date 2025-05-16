import React from "react";
import { FaPenSquare } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, price, chef } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // backEnd server data db
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>price: {price} Taka</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <Link to={`/coffee/${_id}`} className="p-1 bg-secondary">
                <IoIosEye size={30} />
              </Link>

              <Link to={`/updateCoffee/${_id}`} className="p-1 bg-secondary">
                <FaPenSquare size={30} />
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="p-1 bg-secondary"
              >
                <MdDelete size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
