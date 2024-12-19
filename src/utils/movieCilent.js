import "server-only";
/**
 * Un fichier qui est appelable seulement coté serveur
 * Qui est verifiée par le package server-only
 * @param {string} path
 * @param {string} language
 * @returns
 */
export const getMovieByPath = (path, language = "fr-FR") => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append("language", language);

  return fetch(url).then((res) => res.json());
};

/**
 * Un fichier qui est appelable seulement côté serveur,
 * vérifié par le package server-only.
 * @param {string} path
 * @param {string} language
 * @returns {Promise<Object>}
 */
export const getByPath = (path, language = "fr-FR", page = 1) => {
  console.log("URL: ", process.env.NEXT_PUBLIC_TMDB_API_URL);
  console.log("TOKEN: ", process.env.TMDB_API_TOKEN);

  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}${path}`);
  url.searchParams.append("language", language);
  url.searchParams.append("page", page);

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Erreur: ${res.statusText}`);
    }
    return res.json();
  });
};
