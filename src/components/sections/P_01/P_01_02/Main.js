import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <div>

            <div>
               <h1>
                1-2 페이지
               </h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0101"></GreyBtn>
                <BlueBtn to="/">홈으로</BlueBtn>
            </div>
        </div>
    );
}