import React, { useContext } from "react";
import { BioContext, useBioContext, useFetch } from ".";

const Home = () => {
  //#region using Custom Hook
  // const { myName, myAge } = useBioContext();

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/5");

  //#region using Context Api's
  const { myName, myAge } = useContext(BioContext);

  return (
    <div>
      <h3>( Custom Hooks , Context APIs , Promise )</h3>
      Hello Context Api = My name is {myName} and My age is {myAge}
      {/* <p> Hello Custom Hooks + Promise = ( {data.title} )</p> */}
    </div>
  );
};

export default Home;
