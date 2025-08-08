// src/components/SearchResultsOverlay.jsx

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function SearchResultsOverlay() {
  const { results, open, setOpen, setQuery } = useSearch();
  const navigate = useNavigate();
  const panelRef = useRef(null);

  if (!open) return null;

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("mousedown", onClick);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("mousedown", onClick);
      document.body.style.overflow = prevOverflow;
    };
  }, [setOpen]);

  const handleSelect = (item) => {
    setOpen(false);
    setQuery("");
    // Your app doesn’t have /artists or /venues slugs yet; event route is /Home/
    if (item.type === "event") navigate(`/Home/#${item.anchorId || ""}`);
    // (When venue/artist routes exist, wire here)
  };

  return (
    <div className="search-overlay-backdrop is-open">
      <div
        className="search-overlay-panel is-open"
        ref={panelRef}
        id="search-results"
        role="listbox"
        aria-label="Search results"
      >
        <div className="search-list">
          {results.length === 0 ? (
            <div className="search-row">No matches.</div>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.type}-${r.title}-${i}`}
                className="search-row"
                role="option"
                onClick={() => handleSelect(r)}
              >
                <span className="pill">{r.type}</span>
                <span className="title">{r.title}</span>
                {r.when && <span className="meta"> · {r.when}</span>}
                {r.venueName && <span className="meta"> · {r.venueName}</span>}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// restore here bug fix
// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSearch } from "../context/SearchContext";

// export default function SearchResultsOverlay() {
//   const { results, open, setOpen, setQuery } = useSearch();
//   const navigate = useNavigate();
//   const panelRef = useRef(null);

//   if (!open) return null;

//   // Close on ESC / click outside
//   useEffect(() => {
//     if (!open) return;
//     const onEsc = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     const onClickOutside = (e) => {
//       if (panelRef.current && !panelRef.current.contains(e.target))
//         setOpen(false);
//     };
//     document.addEventListener("keydown", onEsc);
//     document.addEventListener("mousedown", onClickOutside);
//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", onEsc);
//       document.removeEventListener("mousedown", onClickOutside);
//       document.body.style.overflow = prevOverflow;
//     };
//   }, [open, setOpen]);

//   const handleSelect = (item) => {
//     setOpen(false);
//     setQuery("");
//     if (item.type === "venue") navigate(`/venues/${item.slug}`);
//     else if (item.type === "artist") navigate(`/artists/${item.slug}`);
//     else if (item.type === "event") navigate(`/events#${item.anchorId || ""}`);
//   };

//   return (
//     <div className={`search-overlay-backdrop is-open`}>
//       <div
//         className={`search-overlay-panel is-open`}
//         ref={panelRef}
//         id="search-results"
//         role="listbox"
//         aria-label="Search results"
//       >
//         <div className="search-list">
//           {results.length === 0 ? (
//             <div className="search-row">No matches.</div>
//           ) : (
//             results.map((r, i) => (
//               <button
//                 key={`${r.type}-${r.title}-${i}`}
//                 className="search-row"
//                 role="option"
//                 onClick={() => handleSelect(r)}
//               >
//                 <span className="pill">{r.type}</span>
//                 <span className="title">{r.title}</span>
//                 {r.when && <span className="meta"> · {r.when}</span>}
//                 {r.venueName && <span className="meta"> · {r.venueName}</span>}
//               </button>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
