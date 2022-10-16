import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Close from '../../assets/close.png';
import UseUser from '../../hooks/useUser';
import './style.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ModalCard() {
    const { setOpenModal, openModal, productSelect, setTopPosition, topPosition } = UseUser()
    useEffect(() => {
        setTopPosition(document.documentElement.scrollTop);
    }, [openModal])
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        document.querySelector("body").style.overflowY = 'hidden';

        return () => {
            document.querySelector("body").style.overflowY = 'auto';
        }
    }, []);

    return (
        <div
            style={{ top: topPosition }}
            className='container_modalCard'>
            <Card sx={{ width: '95%', height: '95%' }}>
                <CardHeader
                    action={
                        <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            aria-label="settings">
                            <img
                                src={Close}
                                alt="incone fechar" />
                        </IconButton>
                    }
                    title={productSelect.title}
                // subheader="September 14, 2016"
                />
                <CardMedia
                    sx={{ backgroundSize: 'cover', border: 'solid 1px black', width: '100%' }}
                    component="img"
                    height="300"
                    image={productSelect.img}
                    alt="Prato Selecionado"
                />
                <CardContent>
                    {/* <Typography
                        sx={{ fontSize: '1.6rem' }}
                        variant="body2"
                        color="text.secondary">
                        {productSelect.description}
                    </Typography> */}
                </CardContent>
                <div className='container_modalCard_description'>
                    {productSelect.description}
                </div>
                <div className='container_modalCard_botton'>
                    <button

                    >Adicionar R$ {(productSelect.value).toFixed(2)}</button>
                </div>
            </Card>
        </div>
    );
}
