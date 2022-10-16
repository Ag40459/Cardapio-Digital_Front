import api from '../../services/api';
import UseUser from '../../hooks/useUser';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function Register() {
    const { name, setName, email, setEmail, pass, setPass } = UseUser();
    const [confirmation, setConfirmation] = useState();
    const [values, setValues] = useState({
        password: false,
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowPassword2 = () => {
        setValues({
            password: !values.password,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (!email || !name || !pass || !confirmation) { return alert("Preencha todos os campos!") }
            if (pass !== confirmation) { return alert("O Campo Senha e Confirmar Senha nao Conferem!") }

            await api.post("/user", {
                nome: name,
                email,
                senha: pass,
                tipo: 'client'
            })

        } catch (error) {
            return alert(error.response.data.message)

        }
        return alert("Cadastro Efetuado com Sucesso!!")

    }

    function handleClear() {
        setName('');
        setEmail('');
        setPass('');
        setConfirmation('');
    }

    return (
        <div className='container_register'>

            <form onSubmit={handleSubmit}>
                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Nome e Sobrenome</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >E-mail</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Senha</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel >Confirmar Senha</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type={values.password ? 'text' : 'password'}
                        onChange={(e) => setConfirmation(e.target.value)}
                        value={confirmation}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                >
                                    {values.password ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
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
                <span>Já tenho cadastro, <a href='/signIn'>clique aqui!</a></span>
                <a href="/">Sair</a>
            </form>
        </div>
    )
}