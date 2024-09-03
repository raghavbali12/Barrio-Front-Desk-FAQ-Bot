import { useEffect } from "react";
import "./App.css";
import ipify from "ipify";

function App() {
  const secret = document.getElementById("azure-bot-secret")?.textContent;

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const ip = await ipify();
        console.log("IP address:", ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIP();
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
