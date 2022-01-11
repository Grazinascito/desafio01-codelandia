import "./style.scss";
import heartIconWhite from "../../assets/HeartIconWhite.svg";
import heartIcon from "../../assets/heartIcon.svg";

type InitDataProps = {
  id: number;
  date: string;
  heart: boolean;
  title: string;
  text: string;
};

type MainContentProps = {
  initData: InitDataProps[];
  setInitData: (val: InitDataProps[]) => void | boolean;
};

export function MainContent({
  initData,

  setInitData,
}: MainContentProps) {
  function handleChangeHeart(id: number) {
    
    const findData = initData.map((data) => {
      if (data.id === id) {
        data.heart = !data.heart;
      }
      return data
    });

    setInitData(findData)
  }

  return (
    <main>
      {initData.length > 0 &&
        initData.map((data) => {
          return (
            <div className="main-card" key={data.id}>
              <div className="main-header">
                <span>{data.date}</span>
                <span>
                  <img
                    src={data.heart ? heartIcon : heartIconWhite}
                    alt="heartIconWhite"
                    onClick={() => handleChangeHeart(data.id)}
                  />
                </span>
              </div>
              <div className="main-text">
                <h1>{data.title}</h1>
                <p>{data.text}</p>
              </div>
            </div>
          );
        })}
    </main>
  );
}
