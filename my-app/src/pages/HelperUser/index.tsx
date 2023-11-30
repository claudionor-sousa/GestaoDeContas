// src/FaleConosco.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import "./style.scss"; // Importa o arquivo de estilos

const FaleConosco = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Adicione aqui a lógica para enviar os dados do formulário para o servidor ou outra ação desejada
    setSnackbarOpen(true);
    // Limpe os campos do formulário
    setNome("");
    setEmail("");
    setMensagem("");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container className="container" maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Fale Conosco
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Mensagem"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submitButton"
        >
          Enviar Mensagem
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Mensagem enviada com sucesso!"
      />
    </Container>
  );
};

export default FaleConosco;
