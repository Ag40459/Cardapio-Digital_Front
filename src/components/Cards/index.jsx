import { CustomButton } from './styled';
import './style.css';
import UseUser from '../../hooks/useUser';

export default function Cards() {
    const { openModal, setOpenModal, listProductModal, setProductSelect } = UseUser()
    function handleSelectProduct(product) {
        setOpenModal(!openModal);
        return setProductSelect(product);
    }
    return (
        <>
            {listProductModal.map((product) => {
                // console.log(product);
                return (
                    <div
                        key={product.id}
                        className='container_cards_purchase'>
                        <h1>{product.title}</h1>
                        <img
                            onClick={() => handleSelectProduct(product)}
                            src={product.img} />
                        <span>R$ {((product.value).toFixed(2))}</span>

                    </div>
                )
            })}
        </>
    )
}

