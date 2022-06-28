import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount';


const CardItem = ({image, title, price, stock}) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1)
    const handleClose = () => {
        setOpen(false)
    }

    const addCount = () =>{
        setCount(count + 1)
    }
    const restCount = () =>{
        setCount(count - 1)
    }
    return(
        <Card sx={{ minWidth: 275 }} className='card-item-container'>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='count-item'>
                        <ItemCount/>
                    </div>
                    <Button variant={'outlined'} onClick={() => setOpen(true)}>Detalle</Button>
                </div>
            </CardContent>
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} alt={"producto"}/>
            </Modal>
        </Card>
    )
}

export default CardItem