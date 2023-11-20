import { Button, Grid, Typography } from "@mui/material";
import "./style.scss";
export default function CreateAccountLink() {
  return (
    <Grid className="ContainerCreate">
      <Typography gutterBottom variant="h5" component="div" className="Title">
        Experiemente todos os recursos gratuitamente por sete dias
      </Typography>
      <span>Sem informar dados de compra</span>
      <Button className="BtnCreateAccount">Crie sua conta gratis</Button>
    </Grid>
  );
}
