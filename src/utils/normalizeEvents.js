// src/utils/normalizeEvents.js
import { slugify } from "./slugify";

/**
 * Normalizes Google/SerpAPI events into a consistent shape for UI.
 * Accepts: [] OR { events_results: [] } OR { results: [] }
 */
export function normalizeEvents(raw, { limit = 10 } = {}) {
  const list = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.events_results)
    ? raw.events_results
    : Array.isArray(raw?.results)
    ? raw.results
    : [];

  const normalized = list.map((e, idx) => {
    const title = e?.title ?? "";
    const venueName = e?.venue?.name ?? "";
    const when = e?.date?.when ?? "";
    const startDate = e?.date?.start_date ?? "";
    const image = e?.thumbnail || e?.image || "";
    const link = e?.link || "";
    const mapsLink = e?.event_location_map?.link || "";
    const id = `event-${slugify(title || "event")}-${idx}`;

    return {
      id, // stable anchor for deep links
      title,
      venueName,
      when,
      startDate,
      image,
      link,
      mapsLink,
      raw: e, // keep original for advanced needs/debug
    };
  });

  return normalized.slice(0, limit);
}
