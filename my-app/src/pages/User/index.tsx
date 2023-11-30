import { Typography } from "@mui/material";
import CreateUser from "../../components/ComponentsUser/CreateUser";
import DataGridDemo from "../../components/ComponentsUser/Grid";
import HeaderGrid from "../../components/ComponentsUser/HeaderGrid";
import ResponsiveLogadoAppBar from "../../components/Header/NavBarLogado";
import image from "../../img/grafico.png";
import "./style.scss";
import Footer from "../../components/Footer";
function UserPage() {
  return (
    <div className="ContainerMain">
      <section>
        <ResponsiveLogadoAppBar />
      </section>
      <section>
        <HeaderGrid />
      </section>
      <section>
        <CreateUser />
      </section>
      <section>
        <DataGridDemo />
      </section>
      <section className="ContainerGrafico">
        <div>
          <Typography className="TitleGrafico">
            Gráfico anual de gastos cadastrados
          </Typography>
        </div>
        <img src={image} alt="Grafico" className="imagem" />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default UserPage;
