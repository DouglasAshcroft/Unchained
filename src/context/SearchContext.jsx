// src/context/SearchContext.jsx
import { createContext, useState, useMemo, useContext } from "react";
import Fuse from "fuse.js";
import { APIContext } from "../components/ApiFetch";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const { events } = useContext(APIContext);

  // Later: merge with venues & artists arrays
  const searchableData = useMemo(() => {
    return events.map((event) => ({
      type: "event",
      title: event.title,
      venue: event.venue?.name,
      date: event.date?.when,
      slug: event.venue ? event.venue.name : event.title,
    }));
  }, [events]);

  const fuse = useMemo(() => {
    return new Fuse(searchableData, {
      keys: ["title", "venue", "date"],
      threshold: 0.3, // lower = stricter match
    });
  }, [searchableData]);

  const [results, setResults] = useState([]);

  const search = (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const matches = fuse.search(query).map((res) => res.item);
    setResults(matches);
  };

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
}
