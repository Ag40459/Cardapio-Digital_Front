import UseUser from '../../hooks/useUser';
import './style.css';

export default function CardsCollum() {
    const { openModal, setOpenModal, listProductModal, setProductSelect, listProduct } = UseUser()
    function handleSelectProduct(product) {
        console.log(listProduct);
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
                            <p>{product.title}</p>
                        </div>
                        <div className='container_cardsCollum_purchase_price'>
                            <strong>R$ {((product.value).toFixed(2))}</strong>
                            <span>R$ {(((product.value) * 0.8).toFixed(2))}</span>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

