import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, price, taste, category, details, photo } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    // console.log(updateCoffee);

    // update data server
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("updated data", data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full mx-auto flex items-center justify-center my-5">
      <div className="bg-secondary p-10 w-10/12">
        <h2 className="text-4xl font-semibold text-center my-5">
          Update Coffee
        </h2>

        <form onSubmit={handleUpdateCoffee} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Coffee Name"
                name="name"
                defaultValue={name}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Chef Name"
                name="chef"
                defaultValue={chef}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Price"
                name="price"
                defaultValue={price}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Taste"
                name="taste"
                defaultValue={taste}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Category Name"
                name="category"
                defaultValue={category}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Details Name"
                name="details"
                defaultValue={details}
                required
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input border w-full"
              placeholder="Photo"
              name="photo"
              defaultValue={photo}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <button type="submit" className="btn bg-primary text-white">
              Add Coffee
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
