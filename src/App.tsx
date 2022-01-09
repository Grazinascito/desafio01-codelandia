import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import "./style/global.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
