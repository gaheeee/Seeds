import { Link } from 'react-router-dom';

export default function WineBtn({ to, children}) {
    return (
        <Link className="winebtn" to={to}>
            {children}
        </Link>
    );
}