import React from "react";
import { Grid } from "@mui/material";
import "./style.scss";

export default function Footer() {
  return (
    <Grid className="footer">
      <ul>
        <li>Quem somos</li>
        <li>Termos de uso</li>
        <li>Politica de privacidade</li>
        <li>Fale conosco</li>
      </ul>
      <span className="copy">ProfitPioners © 2023-2023</span>
    </Grid>
  );
}
