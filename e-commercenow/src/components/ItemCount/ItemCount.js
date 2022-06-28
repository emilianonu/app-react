import { useState } from "react"
import { Button } from '@mui/material';

const ItemCount = ({count, setCantidad, setShowButton}) => {

    const addProduct = () => {
        setCantidad(count + 1)
    }

    return(
        <>
        <label>Selecciona cantidad</label>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
            <button >-</button>
            <p>{count}</p>
            <button onClick={addProduct}>+</button>
        </div>
        <Button variant='outlined' onClick={() => setShowButton(true)}>Agregar producto</Button>
        </>
    )
}

export default ItemCount