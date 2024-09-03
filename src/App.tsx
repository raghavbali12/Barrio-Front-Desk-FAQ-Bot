import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [secret, setSecret] = useState<string | null | undefined>(
    document.getElementById("azure-bot-secret")?.textContent
  );

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const reader = await fetch("https://api.ipify.org?format=json");
        const data = await reader.json();
        const ip = data.ip;
        console.log("IP address:", ip);
        if (ip !== "63.162.123.103") {
          console.log("Unauthorized use detected.");
          setSecret(null);
        }
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };
    fetchIP();
    document.getElementById("azure-bot-secret")?.remove();
  }, []);

  return (
    <div>
      <h1>Barrio Front Desk FAQ Bot</h1>
      <iframe
        src={
          "https://webchat.botframework.com/embed/RB-Language-Service-bot?s=" +
          secret
        }
        style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
      ></iframe>
    </div>
  );
}

export default App;
