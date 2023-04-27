import React from "react";
import D1 from "../../../resources/assets/d-1.jpg";
import D2 from "../../../resources/assets/d-2.jpg";
import D3 from "../../../resources/assets/d-3.jpg";
import DC1 from "../../../resources/assets/dc-1.jpg";
import DC2 from "../../../resources/assets/dc-2.jpg";
import DC3 from "../../../resources/assets/dc-3.jpg";

const Dhaulagiri = () => {
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
              Dhaulagiri Base Camp
            </h1>
            <p>
              The Dhaulagiri Base Camp trek is an exciting and challenging
              adventure that leads trekkers to the base camp of Mount
              Dhaulagiri, the seventh-highest mountain in the world. This trek
              is located in the western region of Nepal. Starting from Beni
              town, the trek follows a path through the remote and isolated
              valleys of the Myagdi district. Although the trail is demanding
              and steep, it provides breathtaking views of the Himalayan
              Mountains, including Dhaulagiri, Annapurna, and Machhapuchhre. The
              trek takes around two to three weeks to complete, depending on the
              itinerary and acclimatization needs. During this time, trekkers
              will pass through many small villages, such as Darbang, Muri, and
              Italian Base Camp. They will also cross several high mountain
              passes, such as the French Pass (5,360 meters) and the Dhampus
              Pass (5,182 meters).
            </p>
            <div className="subregion-grid-img">
              <img src={D1} alt="a1" />
              <img src={D2} alt="a2" />
              <img src={D3} alt="a3" />
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
          <div className="subregion-grid">
            <h1
              style={{
                textAlign: "center",
                fontSize: "42px",
              }}
            >
              Dhaulagiri Circuit trek
            </h1>
            <p>
              The Dhaulagiri Circuit trek is a challenging and thrilling
              adventure in the western part of Nepal that provides a
              one-of-a-kind and exciting experience for trekkers. It takes them
              through the remote valleys of the Dhaulagiri range, including the
              Kali Gandaki River valley and the Hidden Valley. Starting from
              Beni, the trek follows the Myagdi Khola River's path, passing
              through small villages and terraced fields. The trail is steep,
              rocky, and rugged, but the views of the Dhaulagiri range,
              including Mount Dhaulagiri (8,167 meters), are magnificent. The
              Dhaulagiri Circuit trek takes approximately two to three weeks,
              depending on the itinerary and acclimatization needs. Trekkers
              will encounter several high mountain passes, such as the French
              Pass (5,360 meters) and the Dhampus Pass (5,182 meters), providing
              stunning panoramic views of the Himalayan Mountains.
            </p>
            <div className="subregion-grid-img">
              <img src={DC1} alt="a1" />
              <img src={DC2} alt="a2" />
              <img src={DC3} alt="a3" />
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

export default Dhaulagiri;
