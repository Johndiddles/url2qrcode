import History from "./components/History";
import CurrentBarcode from "./components/CurrentBarcode";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="appWrapper">
        <CurrentBarcode />
        <History />
      </div>
    </AppProvider>
  );
}

export default App;
