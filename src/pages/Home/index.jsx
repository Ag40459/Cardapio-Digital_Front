import Cards from '../../components/Cards';
import CardsCollum from '../../components/CardsCollum';
import NavHeader from '../../components/Header/index.jsx';
import ModalCard from '../../components/ModalCardOrigin';
import UseUser from '../../hooks/useUser';
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const { openModal } = UseUser()

  return (
    <div className="container_home">
      {openModal &&
        <ModalCard />
      }
      <div className='container_cards'>

        <div className='container_cards_destaques'>
          <strong className='container_cards_destaques_strong'>Destaques</strong>
          <CardsCollum />
        </div>

        <Cards />
      </div>
      <div>
        <Link to="/signUp">CADASTRE-SE</Link>
        <Link to="/signIn">Login</Link>
      </div>
    </div>
  )
}