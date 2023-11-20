import { Button, Grid, Typography } from "@mui/material";
import "./style.scss";

export default function HelperHome() {
  return (
    <Grid className="ContainerDuvidas">
      <Typography gutterBottom variant="h5" component="div" className="Title">
        Dúvidas Frequentes
      </Typography>
      <Grid className="ContainerQuestions">
        <span>Minhas informações estão seguras?</span>
        <span>Consigo fazer backup dos meus dados?</span>
        <span>Posso controlar minhas finanças pessoais e do meu negócio?</span>
        <span>O sistema recebe atualizações frequentes?</span>
        <span>Consigo controlar meus investimentos e meus ativos?</span>
      </Grid>
      <Grid className="QuadroDuvidas">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="TitleDuvidas"
        >
          Outras dúvidas?
        </Typography>
        <span>
          Quaisquer outras dúvidas sobre os nossos serviços podem ser
          esclarecidas por meio do <strong>Fale conosco</strong>. Se preferir,
          você pode consultar nosso <strong>manual</strong>, onde estão
          documentadas informações detalhadas sobre o uso dos recursos e
          funcionamento da nossa plataforma.
        </span>
        <Grid className="BtnDuvidas">
          <Button>Fale conosco</Button>
          <Button>Manual</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
