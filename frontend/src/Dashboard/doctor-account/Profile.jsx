import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {};

  return (
    <div className="">
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form action="">
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name=""
            id=""
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name=""
            id=""
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
