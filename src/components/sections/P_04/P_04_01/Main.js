import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <div>

            <div>
               <h1>
                4-1 페이지
               </h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/"></GreyBtn>
                <BlueBtn to="/p0402">다음 페이지</BlueBtn>
            </div>
        </div>
    );
}