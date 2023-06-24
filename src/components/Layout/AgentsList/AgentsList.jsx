import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useGetAgencyListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";
import AgentItems from "../../Data/AgentItems/AgentItems";

import "./agentsListStyles.scss";

const AgentsList = () => {
  const phraseInputRef = useRef();
  const [enteredPhrase, setEnteredPhrase] = useState("estate");
  const { data, isFetching, error } = useGetAgencyListQuery(enteredPhrase);

  const agencyData = data?.hits;
  const mappedList = agencyData?.map((agent) => {
    return (
      <AgentItems
        key={agent?.externalID}
        id={agent?.externalID}
        address={agent?.location}
        logo={agent?.logo?.url}
        name={agent?.name}
        contact={agent?.phoneNumber}
        stats={agent?.stats}
      />
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredText = phraseInputRef.current.value;
    if (enteredText.trim().length <= 0) {
      return;
    }
    setEnteredPhrase(enteredText);
  };
 
  return (
    <section className="container mb24 mt24">
      <h1>
        List of verified <span>Agencies</span>
      </h1>
      <div className=" flex ai-c jc-c">
        <form onSubmit={handleSubmit} className="flex ai-c mb24 form-search">
          <input
            className="select-wrap"
            placeholder="Enter keyword, e.g rental"
            type="text"
            ref={phraseInputRef}
          />
          <button className="btn flex ai-c">
            <BiSearch className="icon" />
          </button>
        </form>
      </div>

      <ul className="acency-card__wrap flex gap">
        {isFetching && <Loader title={"Fetching agencies..."}/>}
        {!isFetching && !error && mappedList}
        {!isFetching && mappedList?.length === 0 && <Error />}
      </ul>
    </section>
  );
};

export default AgentsList; 
