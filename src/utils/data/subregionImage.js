import React from "react";
import { Image } from "antd";
const URL = "https://sarangkot-treks.onrender.com/";

const SubRegionImage = ({ region, url }) => {
  return (
    <div>
      <Image
        className="d-service"
        src={`${URL}${region}`}
        alt={region?.title}
      />
    </div>
  );
};

export default SubRegionImage;
