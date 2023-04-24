import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MdOutlineArrowForward,
  MdOutlineMyLocation,
  MdSportsKabaddi,
  MdNature,
  MdReorder,
  MdVerified,
  MdOutlineBuild,
} from "react-icons/md";
import Afaq from "./Faq/Afaq";
import Aregion from "./Region/Aregion";
import Ateam from "./Team/Ateam";
import Aother from "./Other/Aother";
import Asubregion from "./subRegion/Asubregion";

const { Sider, Content } = Layout;
const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    // {
    //   key: "/api/dashboard/region",
    //   icon: <MdOutlineMyLocation />,
    //   label: "Trekking",
    // },
    // {
    //   key: "/api/dashboard/subRegion",
    //   icon: <MdNature />,
    //   label: "SubRegion",
    // },
    {
      key: "/api/dashboard/faq",
      icon: <MdOutlineArrowForward />,
      label: "Faq",
    },
    // {
    //   key: "/api/dashboard/team",
    //   icon: <MdSportsKabaddi />,
    //   label: "Team",
    // },
    // {
    //   key: "/api/dashboard/others",
    //   icon: <MdOutlineBuild />,
    //   label: "Other Services",
    // },
  ];

  return (
    <Layout>
      <Sider
        collapsedWidth={80}
        trigger={null}
        collapsed={collapsed}
        collapsible
        width={220}
        className="sidebar"
      >
        <div>
          <div className="hammenu">
            <MdReorder size={25} onClick={toggleCollapsed} />
          </div>
          {!collapsed && (
            <>
              <div className="name-icon">
                <h1>
                  Admin
                  <MdVerified
                    style={{
                      color: "#1DA1F2",
                      marginLeft: "5px",
                    }}
                  />
                </h1>
              </div>
            </>
          )}
          <Menu
            className="side-nav"
            onClick={(e) => {
              navigate(e.key);
            }}
            items={items}
          />
        </div>
      </Sider>
      <Content className="main-content">
        <Routes>
          <Route path="/api/dashboard" element={<Afaq />} />
          <Route path="/api/dashboard/faq" element={<Afaq />} />
          <Route path="/api/dashboard/region" element={<Aregion />} />
          <Route path="/api/dashboard/team" element={<Ateam />} />
          <Route path="/api/dashboard/others" element={<Aother />} />
          <Route path="/api/dashboard/subRegion" element={<Asubregion />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default Dashboard;
