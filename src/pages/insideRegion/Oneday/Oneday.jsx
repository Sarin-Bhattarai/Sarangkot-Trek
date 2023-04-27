import React from "react";
import SV from "../../../resources/assets/sv.jpg";

const Oneday = () => {
  return (
    <section className="subregion">
      <div className="container">
        <div className="s-region">
          <div className="subregion-grid">
            <h1
              style={{
                textAlign: "center",
                fontSize: "42px",
              }}
            >
              Sarangkot View Point
            </h1>
            <p>
              Sarangkot View Point is a well-liked tourist attraction situated
              in Pokhara, Nepal, that provides visitors with amazing panoramic
              views of the Annapurna range and the Himalayas from an altitude of
              1,592 meters (5,223 feet). The viewpoint is particularly known for
              its spectacular sunrise and sunset views, which draw photographers
              and nature lovers. Visitors can also engage in activities such as
              paragliding and hiking in addition to enjoying the stunning
              scenery.
            </p>
            <div className="subregion-grid-img">
              <img src={SV} alt="a1" />
            </div>

            <div className="region-row">
              <div>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "400",
                    textDecoration: "underline",
                  }}
                >
                  Package Booking
                </h3>
                <h5>1. It includes all the necessary permits.</h5>
                <h5>2. Expert guide during the trip.</h5>
                <h5>
                  3. Three meals( breakfast, Lunch & dinner) during the trek.
                </h5>
                <h5>
                  4. Accomodation with free Wifi and Hot Shower during the trek.
                </h5>
                <h5>5. Transportation Service fees.</h5>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "400",
                    textDecoration: "underline",
                  }}
                >
                  Non Package Booking
                </h3>

                <h5>
                  It includes only Expert guide from our side. Other all costs
                  should be bared from your side.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oneday;
