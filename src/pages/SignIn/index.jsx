import { Link, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import { useState } from 'react';
import UseUser from '../../hooks/useUser';
import api from '../../services/api';
import './style.css';

export default function SigIn() {
    const navigate = useNavigate();
    const { email, setEmail, pass, setPass, setToken } = UseUser();
    const [values, setValues] = useState({
        password: false,
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (!email || !pass) {
                alert("Preencha todos os campos!");

                return;
            }
            const response = await api.post("/login", {
                email,
                senha: pass
            })
            const { token, usuario } = response.data;
            alert("Login Efetuado com Sucesso!!");
            setToken(token);


        } catch (error) {
            return alert(error.response.data.message);

        }
        alert('Login Efetuado com Sucesso!');
        return navigate('/dashboard');

    }

    function handleClear() {
        setEmail('');
        setPass('');
    }

    return (
        <div className='container_login'>

            <form onSubmit={handleSubmit}>

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

                <div className='container_login_button'>
                    <Button
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="error"
                        onClick={() => handleClear()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type='submit'
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="success"
                    >
                        Entrar
                    </Button>

                </div>
                <span>Ainda não tem cadastro, <a href='/sing-up'>clique aqui!</a></span>
                <Link to="/">Sair</Link>
            </form>
        </div>
    )
}