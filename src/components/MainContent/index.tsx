import "./style.scss";
import heartIconWhite from "../../assets/HeartIconWhite.svg";

export function MainContent() {
  return (
    <main>
      <div className="main-card">
        <div className="main-header">
          <span>02 de jul, 2021</span>
          <span>
            <img src={heartIconWhite} alt="heartIconWhite" />
          </span>
        </div>
        <div className="main-text">
          <h1>Agora é oficial: o Windows 11 está vindo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
        </div>
      </div>
      <div className="main-card">
        <div className="main-header">
          <span>02 de jul, 2021</span>
          <span>
            <img src={heartIconWhite} alt="heartIconWhite" />
          </span>
        </div>
        <div className="main-text">
          <h1>Agora é oficial: o Windows 11 está vindo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
        </div>
      </div>
    </main>
  );
}
