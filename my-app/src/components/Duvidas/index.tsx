import { Button, Grid, Typography } from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function HelperHome() {
  const navigate = useNavigate();
  const navigateToPage = (path: string) => {
    navigate(path);
  };
  return (
    <Grid className="ContainerDuvidas">
      <Typography gutterBottom variant="h5" component="div" className="Title">
        Dúvidas Frequentes
      </Typography>
      <Grid className="ContainerQuestions">
        <span onClick={() => navigateToPage("/FaQ")}>
          Minhas informações estão seguras?
        </span>
        <span onClick={() => navigateToPage("/FaQ")}>
          Consigo fazer backup dos meus dados?
        </span>
        <span onClick={() => navigateToPage("/FaQ")}>
          Posso controlar minhas finanças pessoais e do meu negócio?
        </span>
        <span onClick={() => navigateToPage("/FaQ")}>
          O sistema recebe atualizações frequentes?
        </span>
        <span onClick={() => navigateToPage("/FaQ")}>
          Consigo controlar meus investimentos e meus ativos?
        </span>
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
          <Button onClick={() => navigateToPage("/FaleConosco")}>
            Fale conosco
          </Button>
          <Button>Manual</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
