import { useState } from "react";
import styles from "../styles/styles.module.css";

function getNextVolleyDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilWednesday = (3 - dayOfWeek + 7) % 7 || 7;
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + daysUntilWednesday);
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + daysUntilFriday);
  return nextWednesday < nextFriday ? nextWednesday : nextFriday;
}

function formatDate(date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}

function Home() {
  const nextVolleyDay = getNextVolleyDay();
  const [choice, setChoice] = useState("");
  const SIM_LINKS = [
    "https://www.apple.com/br/",
    "https://www.formula1.com/",
    "https://atlasescolar.ibge.gov.br/",
    "https://www.saosebastiao.sp.gov.br/noticia.asp?id=N252201917112",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.wikipedia.org/",
    "https://www.nationalgeographic.com/",
    "https://www.bbc.com/",
    "https://www.cnn.com/",
    "https://www.theguardian.com/international",
    "https://www.rottentomatoes.com/",
  ];
  const NAO_LINK = "https://www.youtube.com/watch?v=HJsaUUFqbdk";

  function openInNewTab(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  function handleSubmit() {
    if (choice === "yes") {
      if (Array.isArray(SIM_LINKS) && SIM_LINKS.length > 0) {
        const idx = Math.floor(Math.random() * SIM_LINKS.length);
        openInNewTab(SIM_LINKS[idx]);
      } else if (typeof SIM_LINKS === "string" && SIM_LINKS) {
        openInNewTab(SIM_LINKS);
      } else {
        alert("Nenhum link disponível para 'Sim'.");
      }
    } else if (choice === "no") {
      if (NAO_LINK) {
        openInNewTab(NAO_LINK);
      } else {
        alert("Nenhum link disponível para 'Não'.");
      }
    } else {
      alert("Por favor selecione 'Sim' ou 'Não' antes de enviar.");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>
        Tu vai no vôlei <strong>{formatDate(nextVolleyDay)}</strong> ?
      </h1>

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="volley"
            value="yes"
            checked={choice === "yes"}
            onChange={() => setChoice("yes")}
          />
          Sim
        </label>

        <label style={{ marginLeft: 16 }}>
          <input
            type="radio"
            name="volley"
            value="no"
            checked={choice === "no"}
            onChange={() => setChoice("no")}
          />
          Não
        </label>
      </div>

      <button type="button" onClick={handleSubmit} disabled={!choice}>
        Enviar resposta
      </button>
    </div>
  );
}

export default Home;
