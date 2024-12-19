import Link from "next/link";
import styles from "./SearchResults.module.scss";
import Image from "next/image";


export default function SearchResults({ searchResults }) {
  return <div className={styles.resultsContainer}>
    {
        searchResults.map(movie => <Link href={`/movies/${movie.id}`} key={movie.id}>
            <Image 
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
                alt={movie.title}
                height={50}
                width={100}
            />
            <p>
                {movie.title}
            </p>
        </Link>)
    }
  </div>;
}
