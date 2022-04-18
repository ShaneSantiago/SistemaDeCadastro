import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import useForm from "../../Hooks/useForm"
import createProduct from "../../Services/ProductRequest"
import { ProductFormStyle } from "./styled"



const ProductForm = () => {

    const [form, onChange, clear] = useForm({
        name: "",
        description: "",
        price: "",
        quantity: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createProduct(form, clear, setIsLoading)
    }

    return(
        <ProductFormStyle>
            <Box className="containerForm" component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
            <Typography>
                <h2>Cadastre seu produto</h2>
            </Typography>
                <TextField 
                margin="normal"
                name="name"
                type="name"
                value={form.name}
                onChange={onChange}
                required
                label="Nome do produto"
                placeholder="Nome do produto"
                />
                <TextField 
                margin="normal"
                name="description"
                type="text"
                value={form.description}
                onChange={onChange}
                label="Descrição"
                placeholder="Descrição do produto"
                />
                <TextField 
                margin="normal"
                name="price"
                type="number"
                value={form.price}
                onChange={onChange}
                label="Preço"
                placeholder="Preço do produto"
                />
                
                <TextField 
                margin="normal"
                name="quantity"
                type="number"
                value={form.quantity}
                onChange={onChange}
                label="Quantidade"
                placeholder="Quantidade do produto"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? <CircularProgress color={"inherit"}/> : <>Cadastrar Produto</>}
            </Button>
            </Box>
        </ProductFormStyle>
    )
}
export default ProductForm