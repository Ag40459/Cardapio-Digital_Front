import BotaoComplex from '../../components/BotaoComplexo';
import Cards from '../../components/Cards';
import NavHeader from '../../components/Header/index.jsx';
import ModalCard from '../../components/ModalCardOrigin';
import UseUser from '../../hooks/useUser';
import './style.css';

export default function Home() {
  const { openModal } = UseUser()

  return (
    <div className="container_home">
      <NavHeader />
      <BotaoComplex />
      {openModal &&
        <ModalCard />
      }
      <Cards />
    </div>
  )
}