import DataGridDemo from "../../components/ComponentsUser/Grid";
import HeaderGrid from "../../components/ComponentsUser/HeaderGrid";
import ResponsiveLogadoAppBar from "../../components/Header/NavBarLogado";

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
        <DataGridDemo />
      </section>
    </div>
  );
}

export default UserPage;
