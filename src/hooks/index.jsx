import { createContext, useContext, useEffect, useState } from "react";

//#region Context API's

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Mukesh";
  const myAge = 21;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

//#region Custom Hook

export const useBioContext = () => {
  const context = useContext(BioContext);
  return context;
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
