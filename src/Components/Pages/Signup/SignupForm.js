import React, { useState } from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signup } from "../../Services/UserRequest";
import { CircularProgress } from "@mui/material";
import { ContainerForm } from "./styled";

const SignupForm = ({rightButtonText, setRightButtonText}) => {

  const [form, onChange, clear] = useForm({
    name: "",
    password: "",
    role: ""
})
const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = (e) => {
      e.preventDefault()
      signup(form, clear, navigate, setIsLoading, setRightButtonText)
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
            Cadastrar
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
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="role"
              label="Função"
              type="role"
              value={form.role}
              onChange={onChange}
              placeholder="Preencha com Normal ou Admin"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? <CircularProgress color={"inherit"} /> : <>Cadastrar</>}
            </Button>
          </Box>
        </Box>
        
      </Container>
   
        </ContainerForm>
    )
}
export default SignupForm