import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image from "../../img/Banco.png";
import image1 from "../../img/cartao.png";
import image2 from "../../img/44783.png";
import "./style.scss";
export default function ActionAreaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 0.6 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100%"
            height="100"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Controle suas despesas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Para alcançar estabilidade financeira, é fundamental controlar
              suas despesas com sabedoria, priorizando necessidades e
              construindo um caminho sólido para o futuro.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 0.6 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100%"
            height="100"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Controle sua riqueza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              O verdadeiro sucesso financeiro reside em sua capacidade de
              controlar sua riqueza, investindo com discernimento, gerenciando
              ativos com prudência.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: 0.6 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100%"
            height="100"
            image={image2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gerencie seus projetos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Para prosperar financeiramente, é crucial gerenciar seus projetos
              de finanças com diligência, desde o estabelecimento de metas
              claras até a execução de estratégias sólidas. Mantenha um controle
              rigoroso, ajuste conforme necessário e construa um futuro
              financeiro sólido e estável.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
