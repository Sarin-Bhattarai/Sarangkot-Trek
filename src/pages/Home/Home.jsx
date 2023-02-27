import "./home.css";
import React from "react";
import { Rate } from "antd";
import { TiTick } from "react-icons/ti";
import { RiDoubleQuotesL } from "react-icons/ri";
import Test from "../../resources/images/test.jpg";
import Region from "../../resources/images/region.jpg";
import Person from "../../resources/images/person.jpg";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-grid">
          <div className="home-image">
            <div className="container">
              <h1>Sarangkot-Trek</h1>
              <p>"Settle with best and more precious way"</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="second-section">
            <div>
              <h1>
                WELCOME TO
                <br /> MOUNTAIN EXPERIENCE
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore voluptas deserunt nulla est impedit nemo enim eveniet
                nesciunt veritatis dolores, adipisci recusandae aliquid ab ex
                reiciendis illo sed provident nostrum necessitatibus
                perspiciatis beatae. Accusantium quaerat, doloremque cumque odio
                quidem amet ducimus maiores ab deserunt non voluptatibus nobis.
                Numquam, iste expedita!
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore voluptas deserunt nulla est impedit nemo enim eveniet
                  nesciunt veritatis dolores, adipisci recusandae aliquid ab ex
                  reiciendis illo sed provident nostrum necessitatibus
                  perspiciatis beatae. Accusantium quaerat, doloremque cumque
                  odio quidem amet ducimus maiores ab deserunt non voluptatibus
                  nobis. Numquam, iste expedita!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  vitae praesentium adipisci consectetur, odit minus recusandae
                  unde deserunt voluptas maiores!
                </p>
                <button className="fourth-btn">GET INTO IT</button>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore voluptas deserunt nulla est impedit nemo enim eveniet
                  nesciunt veritatis dolores, adipisci recusandae aliquid ab ex
                  reiciendis illo sed provident nostrum necessitatibus
                  perspiciatis beatae. Accusantium quaerat, doloremque cumque
                  odio quidem amet ducimus maiores ab deserunt non voluptatibus
                  nobis. Numquam, iste expedita!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  vitae praesentium adipisci consectetur, odit minus recusandae
                  unde deserunt voluptas maiores!
                </p>
                <button className="fourth-btn">GET INTO IT</button>
              </div>
            </div>
            <div className="second-section">
              <div>
                <h4>Manaslu Base Camp</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore voluptas deserunt nulla est impedit nemo enim eveniet
                  nesciunt veritatis dolores, adipisci recusandae aliquid ab ex
                  reiciendis illo sed provident nostrum necessitatibus
                  perspiciatis beatae. Accusantium quaerat, doloremque cumque
                  odio quidem amet ducimus maiores ab deserunt non voluptatibus
                  nobis. Numquam, iste expedita!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  vitae praesentium adipisci consectetur, odit minus recusandae
                  unde deserunt voluptas maiores!
                </p>
                <button className="fourth-btn">GET INTO IT</button>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat tenetur ratione eum inventore! Quasi ipsa ipsum, facere
                  adipisci commodi mollitia nostrum reprehenderit modi nesciunt
                  accusamus et impedit nemo quo! Molestias.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person} alt="person" />
                  <div className="role-div">
                    <h1>Erika Doe</h1>
                    <p>Traveller</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat tenetur ratione eum inventore! Quasi ipsa ipsum, facere
                  adipisci commodi mollitia nostrum reprehenderit modi nesciunt
                  accusamus et impedit nemo quo! Molestias.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person} alt="person" />
                  <div className="role-div">
                    <h1>Erika Doe</h1>
                    <p>Traveller</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat tenetur ratione eum inventore! Quasi ipsa ipsum, facere
                  adipisci commodi mollitia nostrum reprehenderit modi nesciunt
                  accusamus et impedit nemo quo! Molestias.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person} alt="person" />
                  <div className="role-div">
                    <h1>Erika Doe</h1>
                    <p>Traveller</p>
                    <Rate
                      style={{
                        lineHeight: "0",
                      }}
                      defaultValue={4}
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
