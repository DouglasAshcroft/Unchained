// src/hooks/useFuseSearch.js
import { useMemo } from "react";
import Fuse from "fuse.js";

export default function useFuseSearch(data, query, options) {
  const fuse = useMemo(() => new Fuse(data, options), [data, options]);
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((r) => r.item);
  }, [fuse, query]);
  return results;
}
