import { useRouter } from 'next/navigation';
import LiTag from './liTagComponent';

function Tabs(props) {
    const router = useRouter();

    return (
        <>
            <ul className="nav nav-underline">
                <LiTag link='/' isActive={router.pathname === '/'}>Form</LiTag>
                <LiTag link='/user' isActive={router.pathname === '/user'}>User</LiTag>
            </ul>
        </>
    );
}

export default Tabs;
