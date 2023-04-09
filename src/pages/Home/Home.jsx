import "./home.css";
import React from "react";
import { Rate } from "antd";
import { TiTick } from "react-icons/ti";
import { RiDoubleQuotesL } from "react-icons/ri";
import Test from "../../resources/images/test.jpg";
import Region from "../../resources/images/region.jpg";
import Korean from "../../resources/images/Korean.png";
import Laura from "../../resources/images/Laura.png";
import Jack from "../../resources/images/Jack.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="home">
        <div className="home-grid">
          <div className="home-image">
            <div className="container">
              <h1>Sarangkot Treks and Expedition</h1>
              <p>"Explore the secret of ethernal Mountains and Nature"</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="second-section">
            <div className="pp-pp">
              <h1>WELCOME TO ADVENTURE</h1>
              <p>
                If you have some trekking experience from the past, you can
                visit the moderate trekking regions. We recommend you 'Annapurna
                Base Camp' trekking. Since it is suited for both beginners and
                mederate trekkers. And there are even more options which you can
                find in{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                  onClick={() => navigate("/trekking")}
                >
                  'Trekking'
                </span>{" "}
                section of this website.
              </p>
              <p>
                But if you are looking for extreme trekking which might require
                experienced trekkers who is good in terms of trekking then you
                can visit{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                  onClick={() => navigate("/contact")}
                >
                  'Contact'
                </span>{" "}
                section to inform us about the region that you want to trek. But
                first get good idea about the trekking regions in 'trekking'
                section. You can also visit our organization and book directly
                we warmly welcome you and happy to help you.
              </p>
              <p>
                Sarangkot trekking & Expedition is situated in Lakeside-
                Pokhara, Nepal. Find the out location in 'Contact' Section. Call
                us directly <b>+977-9846056804</b>.
              </p>
            </div>
            <div>
              <img src={Test} alt="mountain" />
            </div>
          </div>

          <div className="third-section">
            <div className="card-comp">
              <h1>Welcome to Nepal</h1>
              <hr />
              <p>
                Beautiful country rich in culture, history and natural beauty.
                Haven't known well about abundance mystry of the country! We
                welcome you to explore with us through everending adventure. The
                Himalayas: Nepal is home to some of the tallest mountains in the
                world, including Mount Everest, which attracts thousands of
                trekkers and climbers each year.
              </p>
              <p>
                The Annapurna and Langtang regions also offer stunning mountain
                views and trekking opportunities.
              </p>
            </div>
            <div className="card-comp">
              <h1>Why travel with Trekking Team Group</h1>
              <hr />
              <div className="tick-flex">
                <TiTick className="icon-tick" size={28} />
                <p>Experience of guide insures your safety.</p>
              </div>
              <div className="tick-flex">
                <TiTick className="icon-tick" size={38} />
                <p>
                  Guide can provide wealthy information of culture, customs,
                  history, landmarks, flora and fauna.
                </p>
              </div>
              <div className="tick-flex">
                <TiTick className="icon-tick" size={48} />
                <p>
                  Trekking in unknown region is challenging, guide can navigate
                  the way ensuring you not getting lost in dangerous areas.
                </p>
              </div>{" "}
              <div className="tick-flex">
                <TiTick className="icon-tick" size={48} />
                <p>
                  Equipment and supplies including renting gear, booking
                  accomodation, arranging transportation.
                </p>
              </div>
            </div>
          </div>
          <div className="fourth-section">
            <h2>Our Popular Treks</h2>
            <div className="second-section">
              <div>
                <h4>Everest Base Camp</h4>
                <p>
                  Everest region is considered one of the best trekking region
                  throughout the globe, no region can get the experience like
                  the everest region. Beside mighty Mt. Everest there are also
                  other unexplored beauty around the Everest region that is so
                  underrated destination places We have made an effort to
                  include some of the most well-traveled trekking routes in the
                  globe for those looking for the ideal treks
                </p>
                <p>
                  The area is home to Mount Everest, the tallest mountain in the
                  world, as its name suggests. The area is well-known for its
                  trekking and climbing, which are popular for Himalayan
                  experiences.
                </p>
                <button
                  onClick={() => navigate("/trekking")}
                  className="fourth-btn"
                >
                  GET INTO IT
                </button>
              </div>
              <div>
                <img src={Region} alt="mountain" />
              </div>
            </div>
            <div className="second-section">
              <div>
                <img src={Region} alt="mountain" />
              </div>
              <div>
                <h4>Annapurna Base Camp</h4>
                <p>
                  The Annapurna Region Trekking is the moderate trekking which
                  requires no age limit but good health of the trekkers to
                  complete the trek. The Annapurna region, which spans 80 km
                  between the Kali Gandaki River in the west and the Marsayangdi
                  River in the east, is located in the middle of the Nepalese
                  Himalaya. To the north is the enigmatic and shrouded region of
                  Mustang, which was closed until recently.
                </p>
                <p>
                  The region is typically understood to comprise places near the
                  Dhaulagiri Range, the Annapurna Range, and the Kaligandaki
                  River basin.
                </p>
                <button
                  onClick={() => navigate("/trekking")}
                  className="fourth-btn"
                >
                  GET INTO IT
                </button>
              </div>
            </div>
            <div className="second-section">
              <div>
                <h4>Manaslu Base Camp</h4>
                <p>
                  The Manaslu Circuit is unquestionably unique. The Budhi
                  Gandaki river's steep bank serves as the trek's route, which
                  was once used for salt trade. While traveling through the
                  Manaslu region, ten peaks that are taller than 6,500 meters
                  (21,300 feet) are visible, including summits that are higher
                  than 7,000 meters (23,000 feet).
                </p>
                <p>
                  At 8,163 meters (26,781 feet) above sea level, Manaslu
                  (Nepali: ; also known as Kutang) is the eighth-highest
                  mountain in the world. It is located in Nepal's west central
                  region, in the Mansiri Himal, a section of the Nepalese
                  Himalayas.
                </p>
                <button
                  onClick={() => navigate("/trekking")}
                  className="fourth-btn"
                >
                  GET INTO IT
                </button>
              </div>
              <div>
                <img src={Region} alt="mountain" />
              </div>
            </div>
          </div>

          <div className="fifth-section">
            <h2>Our Customers Says</h2>
            <p>
              Polishing services from years of experienced guides, manager and
              our other teams
            </p>

            <div className="fifth-grid">
              <div className="fifth-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  I've tried to have trekking with Khem for Phun Hill and Mardi
                  Himal for about a week. Even I was a female solo trekker, also
                  super beginner to do a long journey, I got so much help from
                  him and made it ! Of course it was hard for me, but worth it
                  to explore Himalaya ever in my life.
                  <br />
                  Thank you Harry and Khem😃
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Jack} alt="person" />
                  <div className="role-div">
                    <h1>Jack</h1>
                    <p>Customer</p>
                    <Rate
                      style={{
                        lineHeight: "0",
                      }}
                      defaultValue={5}
                    />
                  </div>
                </div>
              </div>
              <div className="fifth-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Ganesh was a licensed guide, very attentive when we had
                  trouble moving forward, always listening and he taught us a
                  lot of things! Harry gave us good advice for the choice of
                  trek, and the price was correct for everything that was
                  included (hotel, trips, 4 meals, and the guide had a lot of
                  fruit for us 😉 everything was arranged so that we had more
                  nothing to pay on the spot). Great experience! 💯
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Laura} alt="person" />
                  <div className="role-div">
                    <h1>Laura</h1>
                    <p>Customer</p>
                    <Rate
                      style={{
                        lineHeight: "0",
                      }}
                      defaultValue={4}
                    />
                  </div>
                </div>
              </div>
              <div className="fifth-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  I did the ABC trek with Deepak, and I was able to finish it
                  safely because he took care of me so well!!! Before climbing,
                  thank you for taking care of Mr. Harry and saying not to
                  worry. If you don't go up here in your life, you can see a
                  view you'll never see again, and if you're worried about your
                  physical strength, you can go up unconditionally if you're
                  with these friends!! I've never climbed a mountain in Korea,
                  but I succeeded!!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Korean} alt="person" />
                  <div className="role-div">
                    <h1>신인철</h1>
                    <p>Customer</p>
                    <Rate
                      style={{
                        lineHeight: "0",
                      }}
                      defaultValue={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
