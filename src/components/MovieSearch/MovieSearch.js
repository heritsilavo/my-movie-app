"use client";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./MovieSearch.module.scss";
import { MagnifyingGlass } from "react-loader-spinner";
import SearchResults from "./SearchResults/SearchResults";

export default function MovieSearch() {
  const [listeMovie, setListeMovie] = useState([]);
  const [hasFocus, setHasFucus] = useState(false);
  const [isLoadin, setIsLoadin] = useState(false);

  const onChangeSearchKey = async function (query) {
    if (!!query) {
      setIsLoadin(true);
      setListeMovie([])
      const response = await fetch(`/api/movie/search/?query=${query}`);
      const data = await response.json();

      setListeMovie(data.results.filter(movie => !!movie.backdrop_path));
      setIsLoadin(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        placeholder="Rechercher un titre ..."
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => onChangeSearchKey(e.target.value)}
        onFocus={() => setHasFucus(true)}
        onBlur={() => setHasFucus(false)}
      />

      {hasFocus && listeMovie.length > 0 && <SearchResults searchResults={listeMovie} />}

      {isLoadin && (
        <MagnifyingGlass
          visible={true}
          height="30"
          width="30"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "10px 0",
          }}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="gray"
        />
      )}
    </div>
  );
}
