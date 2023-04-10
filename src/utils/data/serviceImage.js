import React from "react";
const URL = "https://sarangkot-treks.onrender.com/";

const ServiceImage = ({ region, url }) => {
  // console.log(region);
  return (
    <div className="serviceImage">
      <img src={`${URL}${region}`} alt={region?.title} />
    </div>
  );
};

export default ServiceImage;
