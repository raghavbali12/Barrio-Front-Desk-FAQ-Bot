import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/Barrio BD logo.png";

function App() {
  const [secret, setSecret] = useState<string | null | undefined>(
    document.getElementById("azure-bot-secret")?.textContent
  );
  const allowedIps = document
    .getElementById("allowed-ips")
    ?.textContent?.split(",");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const reader = await fetch("https://api.ipify.org?format=json");
        const data = await reader.json();
        const ip = data.ip;
        if (!allowedIps?.includes(ip)) {
          console.log("Unauthorized use detected.");
          setSecret(null);
        }
      } catch (error) {
        console.error("Error fetching IP address:", error);
        console.log("Unauthorized use detected.");
        setSecret(null);
      }
    };
    fetchIP();
    document.getElementById("azure-bot-secret")?.remove();
    document.getElementById("allowed-ip")?.remove();
  }, [allowedIps]);

  return (
    <div>
      <img src={Logo} alt="Barrio Logo" height={80} width={80} />
      <h1 style={{ color: "white-smoke" }}>Barrio Front Desk FAQ Bot</h1>
      <iframe
        src={
          "https://webchat.botframework.com/embed/RB-Language-Service-bot?s=" +
          secret
        }
        style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
      ></iframe>
      <p>
        Disclaimer: The bot can make mistakes, please review the answers
        provided and use your best judgement.
      </p>
    </div>
  );
}

export default App;
