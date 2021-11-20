import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminSidebar from "../../Shared/AdminSidebar/AdminSidebar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const Emails = {
      email: data.email,
    };
    const url = `https://rocky-savannah-25374.herokuapp.com/makeAdmin`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Emails),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Add Email successfully.");
        }
      });
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add a Admin</h1>
            <div className="form-group mb-1">
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                ref={register}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
