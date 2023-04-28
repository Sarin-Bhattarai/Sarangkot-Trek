import "./other.css";
import React from "react";
import AC from "../../utils/extra/ac.webp";
import KF from "../../utils/extra/kf.webp";
import BJ from "../../utils/extra/bj.jpg";
import HI from "../../utils/extra/hi.jpg";
import JS from "../../utils/extra/js.jpg";
import PR from "../../utils/extra/pr.jpg";
import PT from "../../utils/extra/pt.jpg";
import BT from "../../utils/extra/bt.jpg";

const Other = () => {
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
          <div className="grid-details">
            <img src={AC} alt="pic" />
            <h1>Accomodation</h1>
            <p>
              As Sarangkot Treks manager 'Harry' is also the Owner of Harry
              Guest House. You will also get accomodation facility with special
              breakfast options and other korean food.
            </p>
          </div>
          <div className="grid-details">
            <img src={BJ} alt="pic" />
            <h1>Bungee Jumping</h1>
            <p>
              Action-filled recreational activity that involves head-first
              jumping from a tall structure with an elastic cord attached into
              participants' feet.
            </p>
          </div>
          <div className="grid-details">
            <img src={HI} alt="pic" />
            <h1>Hiking</h1>
            <p>
              You can hike for one day from our area and visit most popular
              destination like World peace pagoda (Shanti Stupa), Sarangkot view
              point, Huge Shiva stupa (Pumdhikot), and many more that you can
              choose.
            </p>
          </div>
        </div>
        <div className="trekking-grid">
          <div className="grid-details">
            <img src={JS} alt="pic" />
            <h1>Jungle Safari</h1>
            <p>
              Want to book Jungle safari tiket to enjoy the wild life of Nepal
              like rarest animal one horned rhino, Bengal tiger, deers and
              several species of birds. You can choose ride between elephant
              ride or Jeep. I recommend you elephant ride during jungle safari
              in Chitwan National park area.
            </p>
          </div>
          <div className="grid-details">
            <img src={KF} alt="pic" />
            <h1>Korean Food Service</h1>
            <p>
              When you visit our office we have all kind of unique services form
              several other menu options for food but Korean Food is what make
              us stand out.
            </p>
          </div>
          <div className="grid-details">
            <img src={PR} alt="pic" />
            <h1>Paragliding</h1>
            <p>
              If you are looking for adventerous activities you can also
              directly book paragliding ticket from our office. It is just a
              service among varity of services provided by us for you.
            </p>
          </div>
        </div>
        <div className="trekking-grid">
          <div className="grid-details">
            <img src={PT} alt="pic" />
            <h1>Plane Ticket</h1>
            <p>
              We also offer plane ticket services all over Nepal. Our service
              aim is to serve you in every possible way for providing easy
              access, with affordable price for you as well.
            </p>
          </div>
          <div className="grid-details">
            <img src={BT} alt="pic" />
            <h1>Bus Ticket</h1>
            <p>
              In Bus ticket service you can choose the type of Bus which may
              include Deluxe bus, Non-Deluxe bus which may vary in providing
              kind of bus service. We have bus ticket available all over Nepal
              just for your ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
