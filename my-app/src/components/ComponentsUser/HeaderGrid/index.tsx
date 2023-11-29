import { Grid, Typography } from "@mui/material";
import "./style.scss";
function HeaderGrid() {
  return (
    <Grid className="TitleHeaderGrid">
      <Grid className="border">
        <Typography>Tabela de Cadastro de despesas pessoais</Typography>
      </Grid>
    </Grid>
  );
}

export default HeaderGrid;
