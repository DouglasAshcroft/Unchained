import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar(/*function*/) {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const [inputVal, setInputVal] = useState();
  const [searchVal, setSearchVal] = useState();

  let navigate = useNavigate();

  const handleClick = () => {
    setSearchVal(inputVal);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
    if (inputVal.trim().length < 3) {
      setSearchVal([]);
      return;
    }
  };

  return (
    <div>
      <label htmlFor="site-search">Search: </label>
      <input
        onChange={handleChange}
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Search events"
      />
      <button
        onClick={() => {
          handleClick();
          navigate("/home");
        }}
      >
        Go!
      </button>
    </div>
  );
}

export default SearchBar;

// const handleSearchChange = async (e) => {
//   const query = e.target.value;
//   setSearchQuery(query);
//   if (query.trim().length < 3) {
//     setSearchResults([]);
//     return;
//   }
//     try {
//       const resp = await fetch(
//         // `YOUR API HERE`
//       );
//       if (!resp.ok) {
//         throw new Error(`Search request failed ${resp.status}`);
//       }
//       const body = await resp.json();
//       setSearchResults(body.coins || []);
//     } catch (err) {
//       console.error(err);
//       setSearchResults([]);
//     }
//   };
//   const handleAdd = (coin) => {
//     onAddToWatchlist(coin);
//     setSearchQuery('');
//     setSearchResults([]);
//   };
//   return (
//     <div style={{ marginTop: '2rem' }}>
//       {/* <h2>Add a cryptocurrency to your watchlist</h2> */}
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search by name or symbol (min 3 characters)"
//         style={{ padding: '0.5rem', width: '100%', maxWidth: '400px' }}
//       />
//       {searchResults.length > 0 && (
//         <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', maxHeight: '200px', overflowY: 'auto' }}>
//           {searchResults.map((result) => (
//             <li
//               key={result.id}
//               style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.25rem 0', borderBottom: '1px solid #eee' }}
//             >
//               <span>
//                 <img
//                   src={result.thumb}
//                   alt={result.name}
//                   width="16"
//                   height="16"
//                   style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
//                 />
//                 {result.name} ({result.symbol.toUpperCase()})
//               </span>
//               <button
//                 onClick={() => handleAdd(result)}

//               >
//                 'YOUR VALUE HERE'
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBox;

// const handleSearchChange = async (e) => {
//   const query = e.target.value;
//   setSearchQuery(query);
//   if (query.trim().length < 3) {
//     setSearchResults([]);
//     return;
//   }
//   try {
//     const resp = await fetch(
//       `YOUR API HERE`,
//     );
//     const body = await resp.json();
//     setSearchResults(body.coins || []);
//   } catch (err) {
//     console.error(err);
//     setSearchResults([]);
//   }
// // };
