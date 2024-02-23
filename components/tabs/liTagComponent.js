import Link from 'next/link';
import { useRouter } from 'next/router';

function LiTag(props) {
    const router = useRouter();
    const isActive = router.pathname === props.link;

    return (
        <li className="nav-item">
            <Link href={props.link} className='text-decoration-none'>
                <span className={`nav-link ${isActive ? 'active' : ''}`}>{props.children}</span>
            </Link>
        </li>
    );
}

export default LiTag;
