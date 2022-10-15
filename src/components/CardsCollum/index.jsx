import { CustomButton } from './styled';
import './style.css';
import UseUser from '../../hooks/useUser';

export default function CardsCollum() {
    const { openModal, setOpenModal, listProductModal, setProductSelect } = UseUser()
    function handleSelectProduct(product) {
        setOpenModal(!openModal);
        return setProductSelect(product);
    }
    return (
        <>
            {listProductModal.map((product) => {
                return (
                    <div className='container_cardsCollum_purchase'
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}>
                        <div className='container_cardsCollum_purchase_img'>
                            <img
                                src={product.img} />
                        </div>
                        <div className='container_cardsCollum_purchase_details'>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <span>R$ {((product.value).toFixed(2))}</span>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

