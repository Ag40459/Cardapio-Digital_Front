import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import { useEffect } from 'react';
import UseUser from '../../hooks/useUser';
import api from '../../services/api';
import './style.css';


export default function RegisterProduct() {
    const { token, titleProduct, setTitleProduct, idCategoryProduct, setIdCategoryProduct, priceProduct, setPriceProduct, descriptionProduct, setDescriptionProduct, imageProduct, setImageProduct, listCategory, setListCategory, category, setCategory } = UseUser();
    const headers = { Authorization: `Bearer ${token}` };

    function handleCategory(event) {
        setCategory(event.target.value)
    }

    async function loadListCategory() {
        try {
            const response = await api.get("/category");
            setListCategory(response.data);

        } catch (error) {
            return alert(error.response.data.message)
        }
    }

    useEffect(() => {
        loadListCategory()
    }, [listCategory])

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (!titleProduct || !category || category === 'Categoria' || !priceProduct || !descriptionProduct) { return alert("Preencha todos os campos!") }

            const newProduct = {
                titulo_produto: titleProduct,
                id_categoria: category,
                preco: priceProduct,
                descricao: descriptionProduct
            }

            await api.post("/product", newProduct, { headers })

        } catch (error) {
            return alert(error.response.data.message)

        }
        return alert("Cadastro Efetuado com Sucesso!!")

    }

    function handleClear() {
        setTitleProduct('');
        setPriceProduct('');
        setDescriptionProduct('');
    }

    return (
        <div className='container_register'>

            <form onSubmit={handleSubmit}>
                <h6>Cadastro de Produtos</h6>
                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Título Produto</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='text'
                        onChange={(e) => setTitleProduct(e.target.value)}
                        value={titleProduct}
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">

                    <select
                        onChange={handleCategory} >
                        <option >Categorias</option>
                        {listCategory.map((selectCategory) => {
                            return (
                                <option
                                    key={selectCategory.id}
                                    value={selectCategory.id}>
                                    {selectCategory.descricao}
                                </option>
                            )
                        })}
                    </select>

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Preço</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='number'
                        onChange={(e) => setPriceProduct(e.target.value)}
                        value={priceProduct}
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Descrição do Produto</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='text'
                        onChange={(e) => setDescriptionProduct(e.target.value)}
                        value={descriptionProduct}
                    />

                </FormControl>

                <div className='container_register_button'>
                    <Button
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="error"
                        onClick={() => handleClear()}
                    >
                        Limpar
                    </Button>
                    <Button
                        type='submit'
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="success"
                    >
                        Cadastrar
                    </Button>

                </div>

            </form>
        </div>
    )
}


