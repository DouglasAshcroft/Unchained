// src/context/SearchContext.jsx

// src/context/SearchContext.jsx
import { createContext, useState, useMemo, useContext, useEffect } from "react";
import Fuse from "fuse.js";
import { APIContext } from "../components/ApiFetch";
import { normalizeEvents } from "../utils/normalizeEvents";

export const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  // UI state for the search bar + overlay
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Source data (raw from provider)
  const { events: eventsRaw = [] } = useContext(APIContext) || { events: [] };

  // Normalize once per payload change (bigger limit for search indexing)
  const normalizedEvents = useMemo(
    () => normalizeEvents(eventsRaw, { limit: 250 }),
    [eventsRaw]
  );

  // Build a single index for Fuse (add type so overlay can route later)
  const indexData = useMemo(
    () =>
      normalizedEvents.map((e) => ({
        type: "event",
        // normalizeEvents already gave us these stable fields
        id: e.id, // anchor id for deep-links
        title: e.title,
        venueName: e.venueName,
        when: e.when,
        startDate: e.startDate,
      })),
    [normalizedEvents]
  );

  // Configure Fuse on the normalized index
  const fuse = useMemo(
    () =>
      new Fuse(indexData, {
        keys: [
          { name: "title", weight: 0.7 },
          { name: "venueName", weight: 0.3 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [indexData]
  );

  // Compute results based on the current query
  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return fuse
      .search(q)
      .map((r) => r.item)
      .slice(0, 12);
  }, [fuse, query]);

  // Auto-toggle overlay based on query emptiness
  useEffect(() => {
    setOpen(Boolean(query.trim()));
  }, [query]);

  const value = { query, setQuery, open, setOpen, results };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
// add this at the end of SearchContext.jsx
export const useSearch = () => useContext(SearchContext);

// import { createContext, useState, useMemo, useContext, useEffect } from "react";
// import Fuse from "fuse.js";
// import { APIContext } from "../components/ApiFetch"; // assumes you provide events here
// import { slugify } from "../utils/slugify";

// export const SearchContext = createContext(null);

// export function SearchProvider({ children }) {
//   // UI state
//   const [query, setQuery] = useState("");
//   const [open, setOpen] = useState(false);

//   // Source data
//   const { events = [] } = useContext(APIContext) || { events: [] };

//   // Build index for Fuse
//   const indexData = useMemo(() => {
//     return (events || []).map((e, i) => ({
//       type: "event",
//       title: e?.title || "",
//       venueName: e?.venue?.name || "",
//       when: e?.date?.when || "",
//       anchorId: `event-${slugify(e?.title || "event")}-${i}`, // used to scroll on /Home/ if needed
//     }));
//   }, [events]);

//   // Init Fuse
//   const fuse = useMemo(() => {
//     return new Fuse(indexData, {
//       keys: [
//         { name: "title", weight: 0.7 },
//         { name: "venueName", weight: 0.3 },
//       ],
//       threshold: 0.35,
//       ignoreLocation: true,
//       minMatchCharLength: 2,
//     });
//   }, [indexData]);

//   // Compute results
//   const results = useMemo(() => {
//     const q = query.trim();
//     if (!q) return [];
//     return fuse
//       .search(q)
//       .map((r) => r.item)
//       .slice(0, 12);
//   }, [fuse, query]);

//   // Auto-open overlay when query has text
//   useEffect(() => {
//     setOpen(Boolean(query.trim()));
//   }, [query]);

//   const value = { query, setQuery, open, setOpen, results };
//   return (
//     <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
//   );
// }

// // convenient hook
// export const useSearch = () => useContext(SearchContext);

// // src/context/SearchContext.jsx
// // import { createContext, useState, useMemo, useContext, useEffect } from "react";
// // import Fuse from "fuse.js";
// // import { APIContext } from "../components/ApiFetch";
// // import { slugify } from "../utils/slugify"; // make sure this exists

// // export const SearchContext = createContext(null);

// // export function SearchProvider({ children }) {
// //   // UI state needed by SearchBar + Overlay
// //   const [query, setQuery] = useState("");
// //   const [open, setOpen] = useState(false);

// //   // Source data (events now; venues/artists can be added later)
// //   const { events = [] } = useContext(APIContext);

// //   // Build a unified index for Fuse (events + derived venue slugs + anchorId)
// //   const indexData = useMemo(() => {
// //     return (events || []).map((e, i) => ({
// //       type: "event",
// //       title: e?.title || "",
// //       venueName: e?.venue?.name || "",
// //       when: e?.date?.when || "",
// //       // used for deep-scrolling on /events:
// //       anchorId: `event-${slugify(e?.title || "event")}-${i}`,
// //       // optional slugs if you later navigate to venue pages:
// //       venueSlug: e?.venue?.name ? slugify(e.venue.name) : "",
// //     }));
// //   }, [events]);

// //   // Init Fuse
// //   const fuse = useMemo(() => {
// //     return new Fuse(indexData, {
// //       keys: [
// //         { name: "title", weight: 0.7 },
// //         { name: "venueName", weight: 0.3 },
// //       ],
// //       threshold: 0.35,
// //       ignoreLocation: true,
// //       minMatchCharLength: 2,
// //     });
// //   }, [indexData]);

// //   // Compute results from query
// //   const results = useMemo(() => {
// //     const q = query.trim();
// //     if (!q) return [];
// //     return fuse
// //       .search(q)
// //       .map((r) => r.item)
// //       .slice(0, 12);
// //   }, [fuse, query]);

// //   // Auto-open overlay whenever there’s a non-empty query
// //   useEffect(() => {
// //     setOpen(Boolean(query.trim()));
// //   }, [query]);

// //   // Expose the exact contract your components expect
// //   const value = {
// //     query,
// //     setQuery,
// //     open,
// //     setOpen,
// //     results,
// //   };

// //   return (
// //     <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
// //   );
// // }

// // export const useSearch = () => useContext(SearchContext);

// //restore this if broken
// // import { createContext, useState, useMemo, useContext } from "react";
// // import Fuse from "fuse.js";
// // import { APIContext } from "../components/ApiFetch";

// // export const SearchContext = createContext();

// // export function SearchProvider({ children }) {
// //   const { events } = useContext(APIContext);

// //   // Later: merge with venues & artists arrays
// //   const searchableData = useMemo(() => {
// //     return events.map((event) => ({
// //       type: "event",
// //       title: event.title,
// //       venue: event.venue?.name,
// //       date: event.date?.when,
// //       slug: event.venue ? event.venue.name : event.title,
// //     }));
// //   }, [events]);

// //   const fuse = useMemo(() => {
// //     return new Fuse(searchableData, {
// //       keys: ["title", "venue", "date"],
// //       threshold: 0.3, // lower = stricter match
// //     });
// //   }, [searchableData]);

// //   const [results, setResults] = useState([]);

// //   const search = (query) => {
// //     if (!query.trim()) {
// //       setResults([]);
// //       return;
// //     }
// //     const matches = fuse.search(query).map((res) => res.item);
// //     setResults(matches);
// //   };

// //   return (
// //     <SearchContext.Provider value={{ results, search }}>
// //       {children}
// //     </SearchContext.Provider>
// //   );
// // }
