// src/utils/openGoogleMaps.js

export const openGoogleMaps = (mapsUrl) => {
  if (!mapsUrl) return;

  const confirmed = window.confirm(
    "You’re about to open Google Maps in a new tab.\n\nThis will leave the app — continue?"
  );

  if (confirmed) {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  }
};
