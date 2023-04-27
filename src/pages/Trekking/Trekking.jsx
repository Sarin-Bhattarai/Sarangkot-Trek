import "./trekking.css";
import React from "react";
import Annapurna from "../../resources/images/annapurna.jpg";
import Manaslu from "../../resources/images/manasluu.jpeg";
import Dhaulagiri from "../../resources/images/dhaulagiri.jpg";
import One from "../../resources/images/one.jpg";
import Everest from "../../resources/images/everest.jpg";
import Other from "../../resources/images/other.jpg";
import { useNavigate } from "react-router-dom";

const Trekking = () => {
  const navigate = useNavigate();
  return (
    <section className="trekking">
      <div className="container">
        <div className="heading">
          <h3>Regions</h3>
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            color: "#25B92B",
          }}
        >
          Select a Region
        </h1>
        <div className="trekking-grid">
          <div className="grid-details">
            <img src={Annapurna} alt="annapurna" />
            <h1>Annapurna Region</h1>
            <p>
              The Annapurna region, located in central Nepal, is a stunning and
              diverse area known for its world-class trekking trails and
              breathtaking mountain scenery. Home to the mighty Annapurna
              mountain range.
            </p>
            <button
              onClick={() => {
                navigate("/trekking/subRegions");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
          <div className="grid-details">
            <img src={Manaslu} alt="manaslu" />
            <h1>Manaslu Region</h1>
            <p>
              The Manaslu region trek is a popular trekking route in Nepal that
              offers stunning views of the Himalayas, diverse landscapes, and
              rich cultural experiences. The highest point of the trek at an
              altitude of 5,135 meters.
            </p>
            <button
              onClick={() => {
                navigate("/trekking/manaslu");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
          <div className="grid-details">
            <img src={Dhaulagiri} alt="dhaulagiri" />
            <h1>Dhaulagiri Region</h1>
            <p>
              Located in the western part of Nepal, named after the Dhaulagiri
              mountain range, which is the seventh highest mountain in the
              world. Dhaulagiri region offers a challenging and rewarding
              experience for adventure seekers.
            </p>
            <button
              onClick={() => {
                navigate("/trekking/dhaulagiri");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
        </div>

        <div className="trekking-grid">
          <div className="grid-details">
            <img src={One} alt="one" />
            <h1>One Day Trek</h1>
            <p>
              Exploring pokhara by visiting the most offering highly rated
              destinations including Gupteshwor cave, Mahendra cave ,World peace
              Pagoda, Sarangkot view point, Australian base camp and many more.
            </p>
            <button
              onClick={() => {
                navigate("/trekking/oneday");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
          <div className="grid-details">
            <img src={Everest} alt="everest" />
            <h1>Everest Region</h1>
            <p>
              This region is well-known area located in Nepal's famous region,
              home to Mount Everest, boasts stunning mountain views and a UNESCO
              World Heritage Site that supports rare and endangered species.
            </p>
            <button
              onClick={() => {
                navigate("/trekking/everest");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
          <div className="grid-details">
            <img src={Other} alt="other" />
            <h1>Other Services</h1>
            <p>
              We also offer you more services like Bus ticket all over Nepal,
              Plane ticket, Bungee jumping, rafting, paragliding and many more
              adventerous activies, transportation bookings and accoomodation
              just for you for your ease.
            </p>
            <button
              onClick={() => {
                navigate("/others");
              }}
              className="select-btn"
            >
              SELECT
            </button>
          </div>
        </div>

        <div className="package-list">
          <h1
            style={{
              textAlign: "center",
              fontSize: "32px",
              color: "#25B92B",
            }}
          >
            Trekking Packing list
          </h1>
          <p>
            Following is suggested Packing list for trekking in Nepal. Clothing
            Backpacking Checklist is not intended to be a final and
            authoritative checklist. The following is a list of wear and
            accessories that we advise that you take with you. This is not
            intended to be a comprehensive clothing and gear list, rather it is
            intended to act as a reminder of those items that we feel are
            important for your comfort and convenience. However we recommend
            that you may have your own individual favorite for clothing which
            may be equally as suitable.
          </p>

          <div className="details">
            <span>Foot wear</span>
            <ol>
              <li>
                Walking boots with suitable ankle support that have been worn-in
                prior to the trek, and which are waterproof.
              </li>
              <li>
                Trainer or casual shoes, for trekking and/or for traveling.
              </li>
              <li>Warm socks for colder areas.</li>
              <li>Gaiters, in case of rain or snow.</li>
            </ol>
          </div>
          <div className="details">
            <span>Leg wear</span>
            <ol>
              <li>Loose, casual trousers for trekking.</li>
              <li>Thermal leggings for colder areas. </li>
              <li>Long skirt for women as an alternative to trousers.</li>
              <li>Waterproof trousers.</li>
            </ol>
          </div>
          <div className="details">
            <span>Body</span>
            <ol>
              <li>
                Selection of T-shirts, and long sleeved shirts, preferably not
                cotton.
              </li>
              <li>Thermal shirt for colder areas.</li>
              <li>Warm shirt, possibly fleece, for colder areas.</li>
              <li>Fleece jacket or warm wool jumper.</li>
              <li>
                Windproof, waterproof outer shell garment for higher altitudes.
              </li>
              <li>
                Down jacket (optional for cold nights and mornings; can be hired
                in Kathmandu cheaply).
              </li>
              <li>Head/HandsWool or fleece hat, or balaclava.</li>
              <li>Hat or cap for sun protection while trekking.</li>
              <li>Sunglasses or goggles</li>
              <li>Warm gloves.</li>
            </ol>
          </div>

          <div className="details">
            <span>Other items</span>
            <ol>
              <li>
                Strong rucksack or large hold all to be carried by porters.
              </li>
              <li>
                Day sack to carry valuables such as passport, cash, camera,
                travel documents personally.
              </li>
              <li>Long skirt for women as an alternative to trousers.</li>
              <li>
                Plastic bags or stuff sacks to store/separate trekking gear
                inside your main bag.
              </li>
              <li>
                One liter water bottle, Personal first aid kit to include
                essential items.
              </li>
              <li>4 Season sleeping bag, head lamp/torch.</li>
              <li>Camera and memory cards, charger, tripod if necessary.</li>
              <li>
                Large handkerchief/bandana for neck, towel and toiletries.
              </li>
              <li>Vacuum flask, a cup, portable spoon/fork and opener etc.</li>
              <li>Traveling multi-functional pocket knife.</li>
              <li>
                Optional items:Satellite Phone with GPS if you are trekking very
                high remote area
              </li>
              <li>
                Binocular, Books or an eBook, Altimeter, Compass, Playing cards,
                backgammon and chess set etc.
              </li>
            </ol>
          </div>

          <div className="details">
            <span>Recommended Mountaineering Kit</span>
            <ol>
              <li>
                In addition to the items mentioned above for trekking, the
                following is a list of the additional specialist items which are
                required for the trekking peaks.
              </li>
              <li>
                Plastic or leather mountaineering boots, with gaiters and
                crampons that have been tested for a good fit.
              </li>
              <li>
                And lastly, the most essential things that you must have with
                you are a sense of humor, an open mind, and an understanding
                that a trip to Nepal is an adventure to a land which is very
                different to your own country. Have a happy packing!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trekking;
