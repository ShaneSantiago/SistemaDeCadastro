import React, { useState } from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useForm from "../../Hooks/useForm";
import { login } from "../../Services/UserRequest"
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../Navigation/navigation"
import { CircularProgress } from "@mui/material"
import { ContainerForm } from "./styled"


const LoginForm = ({rightButtonText, setRightButtonText}) => {

  const [form, onChange, clear] = useForm({
    name: "",
    password: ""
})
const [ isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = (e) => {
      e.preventDefault()
      login(form, clear, navigate, setRightButtonText, setIsLoading)
}

    return(
        <ContainerForm>
            
      <Container> 
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome"
              name="name"
              value={form.name}
              onChange={onChange}
              autoComplete=""
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={onChange}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? <CircularProgress color={"inherit"} /> : <>Fazer Login</>}
            </Button>
            <Grid container>
              
              <Grid item>
                <Button
                variant="text"
                onClick={() => goToSignUp(navigate)}
                >
                  Cadastre-se
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
   
        </ContainerForm>
    )
}
export default LoginForm