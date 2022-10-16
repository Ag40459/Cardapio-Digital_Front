import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import CardsCollum from '../../components/CardsCollum';
import ModalCard from '../../components/ModalCardOrigin';
import UseUser from '../../hooks/useUser';
import './style.css';

export default function Home() {


  const { openModal } = UseUser()

  return (
    <div className="container_home">
      {openModal &&
        <ModalCard />
      }
      <div className='container_cards'>

        <div className='container_cards_promotion'>
          <strong className='container_cards_promotion_strong'>Destaques</strong>
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