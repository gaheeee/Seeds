import WineBtn from "../buttons/WineBtn";

export default function Main() {
  return (
    <div className="home-main">
      <div>
        <span className="material-symbols-outlined">pest_control</span>
        <h1>De Bug</h1>
      </div>

      <div className="home-main-btn">
        <WineBtn to="/p0101">1번 페이지</WineBtn>
        <WineBtn to="/p0201">2번 페이지</WineBtn>
        <WineBtn to="/p0301">3번 페이지</WineBtn>
        <WineBtn to="/p0401">4번 페이지</WineBtn>
      </div>
    </div>
  );
}
