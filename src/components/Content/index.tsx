
import styles from "./Content.module.css";

export default function Content({ wordData }: { wordData: any }) {
  return (
    <div className={styles.contentCard}>
      <h1 className={styles.wordText}>{wordData.word || <span>Amor</span>}</h1>

      <div className={styles.meanCard}>
        <h2 className={styles.subTitleWord}>DEFINIÇÃO EM</h2>

        <div className={styles.meanLinks}>
            <a href={`https://www.google.com/search?q=${wordData.word || "amor"}`} target="_blank" rel="noopener noreferrer"> Google</a>
            <a href={`https://pt.wikipedia.org/wiki/${wordData.word || "amor"}`} target="_blank" rel="noopener noreferrer"> Wikipédia </a>
        </div>
      </div>
    </div>
  );
}
