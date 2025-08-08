import { createContext, useState, useEffect } from "react";

export const APIContext = createContext();

function APIProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [inputVal, setInputVal] = useState();
  const [searchVal, setSearchVal] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/googleEvents")
      .then((res) => res.json())
      .then((data) => {
        if (data.events_results) {
          setEvents(data.events_results.slice(0, 10));
          // setEvents(events.slice(0, 10)); // limit to 10
        } else {
          setEvents([]);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <APIContext.Provider
      value={{ events, inputVal, setInputVal, searchVal, setSearchVal }}
    >
      {children}
    </APIContext.Provider>
  );
}

export default APIProvider;
