import { getMovieByPath } from "@/utils/movieCilent";
import styles from "./Genres.module.scss";
import Link from "next/link";

export default async function Genres() {
  const { genres } = await getMovieByPath("/genre/movie/list");

  return (
    <div>
      <h2 className={styles.genreTitle}>Rechercher par genre</h2>
      <div className={styles.listContainer}>
        {genres.map((genre) => (
          <Link href={`movies/genres/${genre.id}`} key={genre.id}>
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
