import React from "react";
import E from "../../../resources/assets/e-1.jpg";
import E2 from "../../../resources/assets/e-2.jpg";
import E3 from "../../../resources/assets/e-3.jpg";

const Everest = () => {
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
              Everest Base Camp
            </h1>
            <p>
              The Everest Base Camp is a well-known trekking destination in the
              Everest Region of Nepal. This starting point for climbers seeking
              to summit Mount Everest is located at an altitude of 5,364 meters
              (17,598 feet). The trek to the base camp typically takes around
              12-14 days, during which trekkers pass through stunning Himalayan
              landscapes, including forests, rivers, and glaciers. They also
              have the opportunity to experience the local Sherpa culture by
              visiting villages and monasteries. At the base camp, trekkers can
              witness the impressive Mount Everest up close and witness other
              majestic peaks in the Himalayan range. The base camp also serves
              as a temporary home for mountaineering expeditions, providing a
              place for climbers to adjust to the altitude and prepare for their
              ascent. While the trek can be challenging due to the high
              altitude, it offers an unforgettable experience for those who
              embark on it.
            </p>
            <div className="subregion-grid-img">
              <img src={E} alt="a1" />
              <img src={E2} alt="a2" />
              <img src={E3} alt="a3" />
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

export default Everest;
