import React, { useEffect, useRef } from "react";
import { AgenciesList } from "../../components";

const AgentPage = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef}>
      <AgenciesList />
    </div>
  );
};

export default AgentPage;
