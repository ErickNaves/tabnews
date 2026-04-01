import { useState, useEffect } from "react";
import styles from "../styles/styles.module.css";

function getNextVolleyDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  if (dayOfWeek === 3 || dayOfWeek === 5) {
    return today;
  }
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

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className={styles.taskbarClock}>{time}</div>;
}

// Simple SVG icons mimicking Win2K icons
function QuestionIcon() {
  return (
    <svg
      className={styles.msgIconImage}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#0000ff" stroke="#000080" strokeWidth="1" />
      <circle cx="16" cy="16" r="12" fill="#0000cc" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="18"
        fontWeight="bold"
        fontFamily="Times New Roman, serif"
      >
        ?
      </text>
    </svg>
  );
}

function VolleyIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
    >
      <circle cx="8" cy="8" r="7" fill="#ffff00" stroke="#808000" strokeWidth="1" />
      <path d="M4 8 Q8 4 12 8" stroke="#808000" strokeWidth="1" fill="none" />
      <path d="M4 8 Q8 12 12 8" stroke="#808000" strokeWidth="1" fill="none" />
      <line x1="8" y1="1" x2="8" y2="15" stroke="#808000" strokeWidth="1" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <rect x="2" y="10" width="28" height="20" rx="1" fill="#ffcc00" stroke="#806600" strokeWidth="1" />
      <path d="M2 10 L2 8 Q2 6 4 6 L12 6 L14 10 Z" fill="#ffdd44" stroke="#806600" strokeWidth="1" />
      <rect x="3" y="11" width="26" height="18" fill="#ffdd44" />
    </svg>
  );
}

function RecycleBinIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <rect x="8" y="12" width="16" height="18" rx="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="6" y="10" width="20" height="3" rx="1" fill="#d4d0c8" stroke="#808080" strokeWidth="1" />
      <rect x="12" y="7" width="8" height="4" rx="1" fill="#d4d0c8" stroke="#808080" strokeWidth="1" />
      <line x1="12" y1="15" x2="12" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="16" y1="15" x2="16" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="20" y1="15" x2="20" y2="27" stroke="#808080" strokeWidth="1" />
    </svg>
  );
}

function MyComputerIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <rect x="4" y="4" width="24" height="18" rx="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="6" y="6" width="20" height="14" fill="#000080" />
      <rect x="10" y="23" width="12" height="3" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="8" y="26" width="16" height="2" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
    </svg>
  );
}

function WindowsFlag() {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <rect x="1" y="1" width="6" height="6" fill="#ff0000" />
      <rect x="9" y="1" width="6" height="6" fill="#00aa00" />
      <rect x="1" y="9" width="6" height="6" fill="#0000ff" />
      <rect x="9" y="9" width="6" height="6" fill="#ffcc00" />
    </svg>
  );
}

function Home() {
  const nextVolleyDay = getNextVolleyDay();
  const [choice, setChoice] = useState("");
  const [status, setStatus] = useState("Pronto");

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
    "https://www.youtube.com/watch?v=HJsaUUFqbdk",
    "https://www.instagram.com/reel/DLOCaT4y8AB/",
  ];
  const NAO_LINK = "https://www.youtube.com/watch?v=Mfwaw4O8afQ";

  function openInNewTab(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  function handleSubmit() {
    if (choice === "yes") {
      setStatus("Abrindo link...");
      if (Array.isArray(SIM_LINKS) && SIM_LINKS.length > 0) {
        const idx = Math.floor(Math.random() * SIM_LINKS.length);
        openInNewTab(SIM_LINKS[idx]);
      } else {
        alert("Nenhum link disponível para 'Sim'.");
      }
      setTimeout(() => setStatus("Pronto"), 1500);
    } else if (choice === "no") {
      setStatus("Abrindo link...");
      if (NAO_LINK) {
        openInNewTab(NAO_LINK);
      } else {
        alert("Nenhum link disponível para 'Não'.");
      }
      setTimeout(() => setStatus("Pronto"), 1500);
    } else {
      alert("Por favor selecione 'Sim' ou 'Não' antes de enviar.");
    }
  }

  function handleClose() {
    setStatus("Fechando...");
    setTimeout(() => setStatus("Pronto"), 800);
  }

  return (
    <div className={styles.desktop}>
      {/* Desktop Icons */}
      <div className={styles.desktopIcons}>
        <div className={styles.desktopIcon}>
          <MyComputerIcon />
          <span className={styles.desktopIconLabel}>Meu Computador</span>
        </div>
        <div className={styles.desktopIcon}>
          <FolderIcon />
          <span className={styles.desktopIconLabel}>Meus Documentos</span>
        </div>
        <div className={styles.desktopIcon}>
          <RecycleBinIcon />
          <span className={styles.desktopIconLabel}>Lixeira</span>
        </div>
      </div>

      {/* Main Window */}
      <div className={styles.window}>
        {/* Title Bar */}
        <div className={styles.titleBar}>
          <div className={styles.titleBarLeft}>
            <div className={styles.titleBarIcon}>
              <VolleyIcon />
            </div>
            <span className={styles.titleBarText}>Confirmação de Presença</span>
          </div>
          <div className={styles.titleBarButtons}>
            <button
              className={styles.titleBarBtn}
              onClick={() => {}}
              aria-label="Minimizar"
            >
              _
            </button>
            <button
              className={styles.titleBarBtn}
              onClick={() => {}}
              aria-label="Maximizar"
            >
              ▢
            </button>
            <button
              className={styles.titleBarBtn}
              onClick={handleClose}
              aria-label="Fechar"
              style={{ fontWeight: "bold" }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className={styles.windowContent}>
          <div className={styles.msgBox}>
            {/* Question area */}
            <div className={styles.msgIcon}>
              <QuestionIcon />
              <div className={styles.msgText}>
                <span className={styles.msgTextBold}>
                  Tu vai no vôlei{" "}
                  <span style={{ color: "#000080" }}>
                    {formatDate(nextVolleyDay)}
                  </span>
                  ??
                </span>
                <br />
                <br />
                Selecione uma opção abaixo e clique em{" "}
                <strong>Enviar resposta</strong>.
              </div>
            </div>

            <div className={styles.divider} />

            {/* Radio group */}
            <div className={styles.groupBox}>
              <span className={styles.groupBoxLegend}>Resposta</span>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="volley"
                    value="yes"
                    checked={choice === "yes"}
                    onChange={() => setChoice("yes")}
                  />
                  Sim
                </label>
                <label className={styles.radioLabel}>
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
            </div>

            <div className={styles.divider} />

            {/* Buttons */}
            <div className={styles.buttonRow}>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!choice}
                className={`${styles.btn} ${choice ? styles.btnFocused : ""}`}
              >
                Enviar resposta
              </button>
              <button
                type="button"
                onClick={() => setChoice("")}
                className={styles.btn}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className={styles.statusBar}>
          <div className={styles.statusBarPanel}>{status}</div>
        </div>
      </div>

      {/* Taskbar */}
      <div className={styles.taskbar}>
        <button className={styles.startButton}>
          <WindowsFlag />
          <span>Iniciar</span>
        </button>
        <div className={styles.taskbarTask}>
          <VolleyIcon />
          <span>Confirmação de Presença</span>
        </div>
        <Clock />
      </div>
    </div>
  );
}

export default Home;
