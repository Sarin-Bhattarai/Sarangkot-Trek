import React, { useState, useEffect } from "react";
import "./other.css";
import ShowImage from "../../utils/data/showImage";
import { getOther } from "../../utils/api/otherApi";

const Other = () => {
  const [state, setState] = useState({
    others: [],
    error: null,
  });

  const fetchOthers = () => {
    setState({ ...state, error: null });
    getOther()
      .then(({ data }) => setState({ ...state, others: data, error: null }))
      .catch({ ...state, error: null });
  };

  useEffect(() => {
    fetchOthers();
  }, []);
  return (
    <section className="other">
      <div className="container">
        <div className="heading">
          <h3>Other</h3>
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            color: "#25B92B",
          }}
        >
          Other services from us
        </h1>
        <div className="trekking-grid">
          {state?.others?.map((o) => {
            return (
              <>
                <div className="grid-details">
                  <ShowImage region={o?.image} url="uploads" />
                  <h1>{o?.title}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Other;
