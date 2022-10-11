import './style.css'
import Close from '../../assets/close.png'
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
import UseUser from '../../hooks/useUser';


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
    React.useEffect(() => {
        setTopPosition(document.documentElement.scrollTop);
    }, [openModal])
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
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
                    avatar={
                        <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
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
                    sx={{ height: '35rem' }}
                    component="img"
                    height="194"
                    image={productSelect.img}
                    alt="Prato Selecionado"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {productSelect.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"

                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {/* {productSelect.itens} */}
                    </CardContent>
                </Collapse>
                {productSelect.itens}
                <div>
                    R$ {(productSelect.value).toFixed(2)}
                </div>
            </Card>
        </div>
    );
}
