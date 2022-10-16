import UseUser from '../../hooks/useUser';
import './style.css';

export default function Cards() {
    const { openModal, setOpenModal, listProductModal, setProductSelect } = UseUser()
    function handleSelectProduct(product) {
        setOpenModal(!openModal);
        return setProductSelect(product);
    }
    return (
        <>
            {listProductModal.map((product) => {
                return (
                    <div
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}
                        className='container_cards_purchase'
                    >
                        <div className='container_cards_purchase_img'>
                            <img
                                src={product.img} />
                        </div>
                        <div className='container_cards_purchase_details'>
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

