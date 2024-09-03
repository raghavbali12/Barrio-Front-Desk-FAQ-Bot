import "./App.css";

function App() {
  const secret = import.meta.env.VITE_APP_SECRET;

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
