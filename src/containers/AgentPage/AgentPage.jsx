import React, { useEffect, useRef } from "react";
import { AgentsList } from "../../components";

const AgentPage = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef}>
      <AgentsList />
    </div>
  );
};

export default AgentPage;
