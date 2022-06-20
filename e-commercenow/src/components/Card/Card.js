import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';

const CardAll = ({image, title, price}) => {
    const [count, setCount] = useState(1) 

    const addCount = () =>{
        setCount(count + 1)
    }
    const restCount = () =>{
        setCount(count - 1)
    }
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='count-item'>
                        <Button onClick={restCount} disabled={count == 0}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount}>+</Button>
                    </div>
                    <Button variant='outlined'>Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardAll