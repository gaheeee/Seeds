import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <div>

            <div>
               <h1>
                3-2 페이지
               </h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0301"></GreyBtn>
                <BlueBtn to="/">홈으로</BlueBtn>
            </div>
        </div>
    );
}