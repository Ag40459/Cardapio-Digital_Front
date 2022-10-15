import { useState } from "react";
import { useLocalStorage } from "react-use";
import listProduct from "../dados";

function useUseProvider() {
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [openModal, setOpenModal] = useState(false);
    const [listProductModal, setListProductModal] = useState(listProduct);
    const [productSelect, setProductSelect] = useState({});
    const [topPosition, setTopPosition] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    return {
        openModal, setOpenModal, token, setToken, removeToken, listProductModal, setListProductModal, productSelect, setProductSelect, topPosition, setTopPosition, name, setName, email, setEmail, pass, setPass
    }
}

export default useUseProvider;
