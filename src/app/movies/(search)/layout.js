import SearchSidebar from "@/components/search-sitebar/SearchSidebar";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieCilent";

export default async function MovieSearchLayout({ children }) {
    const { genres } = await getMovieByPath("/genre/movie/list");

    return (
    <div className={styles.searchConntainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
}
