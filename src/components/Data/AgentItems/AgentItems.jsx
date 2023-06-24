import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { HiIdentification, HiOutlineLocationMarker } from "react-icons/hi";
import "./agentItemsStyles.scss";

const AgentItems = ({ id, address, logo, name, contact, stats }) => {
  return (
    <li className="card card__wrapp agency-card" key={id}>
      <div className="agency-card__logo flex jc-c ai-c">
        <img src={logo} alt="real estate" />
      </div>
      <div className="agency-card__data">
        <div className="flex ai-c gap_6 mb12">
          <HiOutlineLocationMarker className="icon" />
          <h2>{address || "Location unavailable"}</h2>
        </div>
        <div className="flex ai-c gap_6 mb12">
          <HiIdentification className="icon" />
          <p>{name}</p>
        </div>
        <div className="mb12">{contact?.phone || contact?.mobile || ""}</div>
        <div className="agency-count mb24"> 
          Count properties: <CountUp className="count" end={`${stats?.adsCount}`} duration={5} />
        </div>
        <Link to={`*`} className="btn card__btn">
          Go to Ads
        </Link>
      </div>
    </li>
  );
};

export default AgentItems;
