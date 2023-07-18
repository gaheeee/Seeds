import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <div>

            <div>
               <h1>
                2-2 페이지
               </h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/0201"></GreyBtn>
                <BlueBtn to="/">홈으로</BlueBtn>
            </div>
        </div>
    );
}