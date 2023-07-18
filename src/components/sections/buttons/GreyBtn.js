import { Link } from 'react-router-dom';

export default function GreyBtn({ to }) {
    return (
        <Link className="greybtn" to={to}>
            이전 페이지
        </Link>
    );
}