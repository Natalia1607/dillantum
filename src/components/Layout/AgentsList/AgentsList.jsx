import React, { useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { useGetAgencyListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";
import AgentItems from "../../Data/AgentItems/AgentItems";

import './agentsListStyles.scss';

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
        contact={agent?.phoneNumber}
        name={agent?.name}
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
    <>
      <section className="container mb24 mt24">
        <h1>List of verified <span>Agencies</span></h1>
        <div className=" flex ai-c jc-c">
          <form onSubmit={handleSubmit} className="flex ai-c">
            <label htmlFor="text"></label>
            <input
              placeholder="Enter keyword, e.g rental"
              type="text"
              ref={phraseInputRef}
            />
            <button className="btn">
              <BiSearchAlt className="icon" />
            </button>
          </form>
        </div>

        <div>
          <ul className="acency-card__wrap flex jc-sb">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && <Error />}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AgentsList;
