import { Link } from 'react-router-dom';
import './style.css';

export default function Dashboard() {
    return (
        <>
            <h1>Painel de Controle</h1>
            <Link to="/">Sair</Link>
        </>

    )
}

