// src/utils/slugify.js

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // split accented characters
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .trim()
    .replace(/\s+/g, "-") // collapse whitespace to dash
    .replace(/-+/g, "-"); // collapse multiple dashes
};

export const deslugify = (slug) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
