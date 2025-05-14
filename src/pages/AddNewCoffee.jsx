import React from "react";

const AddNewCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const from = e.target;
    const formData = new FormData(from);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // send coffee data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("after adding coffee to db", data);
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto flex items-center justify-center my-5">
      <div className="bg-secondary p-10">
        <h2 className="text-4xl font-semibold text-center">Add New Coffee</h2>
        <p className="text-xs text-center w-2/3 mx-auto my-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Coffee Name"
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Chef Name"
                name="cher"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Price"
                name="price"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Taste"
                name="taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Category Name"
                name="category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Details Name"
                name="details"
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

export default AddNewCoffee;
