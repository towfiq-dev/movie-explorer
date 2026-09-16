// Centralized TVMaze API helper.
// Docs: https://www.tvmaze.com/api
// No API key required.

const BASE_URL = "https://api.tvmaze.com";

/**
 * Fetch a list of shows (paginated ~250 per page). Used for the
 * default / browse grid on the Movie Listing page.
 * @param {number} page
 */
export async function getShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch shows");
  return res.json();
}

/**
 * Search shows by title/keyword.
 * @param {string} query
 */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search shows");
  const data = await res.json();
  // TVMaze wraps each result as { score, show } — flatten to just the show.
  return data.map((item) => item.show);
}

/**
 * Get full details for a single show by id (used by the details modal).
 * @param {number|string} id
 */
export async function getShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) throw new Error("Failed to fetch show details");
  return res.json();
}
