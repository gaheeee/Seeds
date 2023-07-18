import BlueBtn from "../buttons/BlueBtn"

export default function Main() {
    return (
        <div>
            <h1>메인 홈화면</h1>

            <p>header랑 footer는 기본적으로 계속 나타남</p>
            <p>메인 화면 내용이 차지하는 만큼 </p>
            <p>메인 화면 크기 늘어나서</p>
            <p>footer는 밑으로 내려감 </p>
            <p>그레이 버튼은 "이전 페이지" 글씨 고정</p>
            <p>블루버튼은 props값으로 글씨를 전달해서 원하는 글자로 변경 가능</p>
            <p>버튼에 페이지 주소를 props 값으로 전달해서 원하는 페이지로 이동 가능</p>
            <p>라우팅 페이지에서 링크 지정해서 사용하기</p>
            <p>등등등... 궁금한건 물어보시요</p>

            <div className="main-btn">
            <BlueBtn to="/p0101">1번 페이지</BlueBtn>
            <BlueBtn to="/p0201">2번 페이지</BlueBtn>
            </div>
            
        </div>

    )

}