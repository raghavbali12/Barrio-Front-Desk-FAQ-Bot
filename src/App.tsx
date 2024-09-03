import "./App.css";

function App() {
  const secret = import.meta.env.VITE_AZURE_BOT_SECRET;

  console.log(secret);

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
