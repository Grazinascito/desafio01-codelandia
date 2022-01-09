import "./style.scss";
import lupaIcon from "../../assets/lupaIcon.svg";

export function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-content--logo">
          <span>Codelândia</span>
          <span>Blog</span>
        </div>
        <div className="header-content--input">
          <img src={lupaIcon} alt="lupaIcon" />

          <input type="text" placeholder="Pesquisar no Blog" />
        </div>
      </div>
    </header>
  );
}
