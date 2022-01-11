import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import "./style/global.scss";

function App() {
  const data = [
    {
      id: 1,
      date: "02 de jul, 2021",
      heart: false,
      title: "Agora é oficial: o Windows 11 está vindo",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    },
    {
      id: 2,
      date: "02 de jul, 2021",
      heart: false,
      title: "Tim Berners-Lee vai leiloar código-fonte da web",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
    },
    {
      id: 3,
      date: "02 de jul, 2021",
      heart: false,
      title: "Tem Firefox novo no pedaço e você vai querer migrar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
    },
    {
      id: 4,
      date: "02 de jul, 2021",
      heart: false,
      title: "John McAfee, criador do antivírus McAfee, morre",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
    },
  ];

  interface DataProps {
    id: number;
    date: string;
    heart: boolean;
    title: string;
    text: string;
    
  }

  const [initData, setInitData] = useState<DataProps[]>([]);


  useEffect(() => {
    setInitData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <MainContent
          initData={initData}
        
          setInitData={setInitData}
        />
      </div>
    </div>
  );
}

export default App;
