import { getByPath, getMovieByPath } from "@/utils/movieCilent";
import MediaCard from "../media-card/MediaCard";
import styles from "./Popular.module.scss"


export default async function Popular() {
    const {results} = await getMovieByPath("/movie/popular");
    const popularMovies = results.slice(0, 6)
    return (
        <div>
            <h2>Le plus populaires</h2>
            <div className={styles.container}>
                {
                    popularMovies.map(media => <MediaCard key={media.id} media={media}/>)
                }
            </div>
        </div>
    );
}