import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import AdminSidebar from "../Shared/AdminSidebar/AdminSidebar";

const AddDoctor = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const Doctors = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      designation: data.designation,
      image: imageURL,
    };
    const url = `https://rocky-savannah-25374.herokuapp.com/addADoctor`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Doctors),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Add Doctor successfully.");
        }
      });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "70f03499b47cc0c6361945e260f26a2e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="containerStyle">
      <div className="container-fluid row">
        <div className="col-md-3">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-5 p-4 pr-5 justify-content-center booking-card p-3 table-style">
          <h5 className="text-brand">Add a Doctor</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputPhone">Phone</label>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputEmail">Email</label>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputDesignation">Designation</label>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                name="designation"
                placeholder="Enter Designation"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputPassword1">Upload a image</label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Picture"
              />
            </div>
            <button type="submit" className="btn btn-brand">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
