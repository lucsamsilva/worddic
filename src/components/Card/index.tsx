
import { useEffect, useState } from "react";
import Button from "../Button";
import Content from "../Content";
import styles from "./Card.module.css";

export default function Card() {
  const [wordData, setWordData] = useState({});
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.dicionario-aberto.net/${url}`);
        const data = await response.json();
        setWordData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [number, url]);

  const getNewWord = () => {
    setNumber((oldNumber) => oldNumber + 1);
    setUrl("random");
  };

  return (
    <div className={styles.cardContainer}>
      <Content wordData={wordData} />
      <Button getNewWord={getNewWord} />
    </div>
  );
}
