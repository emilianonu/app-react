import CardAll from "../Card/Card"
import { Grid } from "@mui/material";

const CardList = () => {
    return(
        <>
        <h2>PRODUCTOS NUEVOS</h2>
        <Grid container>
          <Grid item md={4}>
            <CardAll title={"BUZO BLACK"} price={4000} image={"buzo-1.jpeg"}/>
          </Grid>
          <Grid item md={4}>
            <CardAll title={"BUZO GRIS"} price={4000} image={"buzo-2.jpeg"}/>
          </Grid>
          <Grid item md={4}>
            <CardAll title={"BUZO PINK"} price={4000} image={"buzo-3.jpeg"}/>
          </Grid>
        </Grid>
        </>
    )
    
}

export default CardList