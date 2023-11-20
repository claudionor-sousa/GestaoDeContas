import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Grid, Modal, TextField } from "@mui/material";

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
function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);
  const logo = require("../../../img/favicon_transparent_32x32.png");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    handleCloseNavMenu();
  };
  return (
    <AppBar className="NavBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
              color: "rgb(0, 220, 0)",
            }}
          >
            <img alt="logo" src={String(logo)} />
            ProfitPioneers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => navigateToPage("/")}>
                <Typography textAlign="center">Pagina principal</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigateToPage("/informacoes")}>
                <Typography textAlign="center">Informações</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            className="TitleNav"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "rgb(0, 220, 0)",
              textDecoration: "none",
            }}
          >
            <img alt="logo" src={String(logo)} />
            ProfitPioneers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {" "}
            <Button
              onClick={() => navigateToPage("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Pagina principal
            </Button>
            <Button
              onClick={() => navigateToPage("/informacoes")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              informações
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Grid sx={{ p: 0, display: { xs: "none", md: "flex" } }}>
              <Button
                className="ButtonCadastrarNav"
                onClick={handleLoginOpen}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                login
              </Button>
              <Modal
                open={openLogin}
                onClose={handleLoginClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Grid className="ContainerFormMain">
                    <Typography className="TitleForm">
                      Login de usuário
                    </Typography>
                    <Grid className="ContainerForm">
                      <TextField
                        className="form"
                        id="outlined-required"
                        label="Email"
                        type="email"
                      />
                      <TextField
                        className="form"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                      />

                      <Button className="btncadastrar">Login</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
              <Button
                className="ButtonCadastrarNav"
                onClick={handleOpen}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Cadastrar
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Grid className="ContainerFormMain">
                    <Typography className="TitleForm">
                      Cadastro de usuário
                    </Typography>
                    <Typography id="modal-modal-description">
                      <Grid className="ContainerForm">
                        <TextField
                          className="form"
                          id="outlined-required"
                          label="Usuario"
                        />
                        <TextField
                          className="form"
                          id="outlined-required"
                          label="email"
                          type="Email"
                        />
                        <TextField
                          className="form"
                          id="outlined-password-input"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                        />
                        <TextField
                          className="form"
                          id="outlined-password-input"
                          label="Re-password"
                          type="password"
                          autoComplete="current-password"
                        />
                        <Button className="btncadastrar">Cadastrar</Button>
                      </Grid>
                    </Typography>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
