import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import "./style.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function CreateUser() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleCreateUser = () => {
    // Adicione a lógica para criar o usuário aqui
    setSnackbarOpen(true);
    handleLoginClose();
  };

  return (
    <Grid className="ContainerCreateDespesa">
      <Modal
        open={openLogin}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid className="ContainerFormMain">
            <Typography className="TitleForm">Cadastro</Typography>
            <Grid className="ContainerForm">
              <TextField
                className="form"
                id="outlined-required"
                label="Nome"
                type="text"
              />
              <TextField
                className="form"
                id="outlined-required"
                label="Nome da conta"
                type="text"
              />
              <TextField
                className="form"
                id="outlined-required"
                label="Parcelas"
                type="number"
              />
              <TextField
                className="form"
                id="outlined-required"
                label="valor"
                type="decimal"
              />

              <label>data de vencimento</label>
              <TextField className="form" type="date" />

              <Button className="btncadastrar" onClick={handleCreateUser}>
                Criar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Conta criada com sucesso!"
      />
      <Button className="BtnCreateDespesa" onClick={handleLoginOpen}>
        Cadastrar
      </Button>
    </Grid>
  );
}
