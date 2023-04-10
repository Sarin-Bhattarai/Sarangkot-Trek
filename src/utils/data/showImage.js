import React from "react";
const URL = "https://sarangkot-treks.onrender.com/";

const ShowImage = ({ region, url }) => {
  // console.log(region);
  return (
    <div className="showImage">
      <img src={`${URL}${region}`} alt={region?.title} />
    </div>
  );
};

export default ShowImage;
