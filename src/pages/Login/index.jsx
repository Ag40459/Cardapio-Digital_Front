import InputAdornments from '../../components/inputs/CustomInput';
import { TextField } from '@mui/material';
import Logo from '../../assets/logoNinacai.jpeg';
import './style.css';

export default function Login() {
    return (
        <div className='container_login'>

            {/* <img  src={Logo} alt="Logo" /> */}

            <form>

                <TextField
                    sx={{ width: '90%', paddingTop: 2 }}
                    id="standard-name-input"
                    label="Nome e Sobrenome"
                    type="text"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    sx={{ width: '90%', paddingTop: 2 }}
                    id="standard-phone-input"
                    label="Nome e Sobrenome"
                    type="phone"
                    autoComplete="current-phone"
                    variant="standard"
                />
                <TextField
                    sx={{ width: '90%', paddingTop: 2 }}
                    id="standard-email-input"
                    label="Nome e Sobrenome"
                    type="text"
                    autoComplete="current-password"
                    variant="standard"
                />


            </form>

        </div>
    )
}