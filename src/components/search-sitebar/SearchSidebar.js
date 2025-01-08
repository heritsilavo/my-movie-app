"use client";
import { useParams, useSelectedLayoutSegment, notFound } from "next/navigation";
import styles from "./SearchSidebar.module.scss";
import Form from "./Form/Form";

export default function SearchSidebar({ genres }) {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getTitle = function () {
    if (!segment) return "Films";
    
    const genre = genres.find((g)=>g.id == Number(id));
    
    if (!genre) return notFound();
    
    return genre.name
    
  };

  const title = getTitle();

  return (
    <div className={styles.sideBar}>
      <h1>Tous les "{title}"</h1>
      <Form/>
    </div>
  );
}
