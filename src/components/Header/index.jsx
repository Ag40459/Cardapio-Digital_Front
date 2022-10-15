import { Outlet } from 'react-router-dom';
import './style.css';
import CustonMenu from '../../components/CustonMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
    return (
        <>
            <div className='container_header'>

                <div className='container_header_menu'>
                    <MoreVertIcon />
                </div>

                <div className='container_header_title'>Título</div>

                <div className='container_header_avatar'>
                    <CustonMenu />
                    <strong>Nome</strong>
                </div>
            </div>
            <div className='contente-page'>
                <Outlet />
            </div>
        </>
    )
}