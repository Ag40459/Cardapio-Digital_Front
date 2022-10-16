import { useState } from "react";
import { useLocalStorage } from "react-use";
import listProduct from "../dados";

function useUseProvider() {
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [openModal, setOpenModal] = useState(false);
    const [listProductModal, setListProductModal] = useState(listProduct);
    const [productSelect, setProductSelect] = useState({});
    const [topPosition, setTopPosition] = useState(0);
    const [listCategory, setListCategory] = useState([]);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [titleProduct, setTitleProduct] = useState('');
    const [idCategoryProduct, setIdCategoryProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [imageProduct, setImageProduct] = useState('');

    // const [array]



    return {
        openModal, setOpenModal, token, setToken, removeToken, listProductModal, setListProductModal, productSelect, setProductSelect, topPosition, setTopPosition, listCategory, setListCategory, category, setCategory, name, setName, email, setEmail, pass, setPass, titleProduct, setTitleProduct, idCategoryProduct, setIdCategoryProduct, priceProduct, setPriceProduct, descriptionProduct, setDescriptionProduct, imageProduct, setImageProduct
    }
}

export default useUseProvider;
