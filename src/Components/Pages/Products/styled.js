import styled from "styled-components"
import Fab from "@mui/material/Fab"

export const ProductFormStyle = styled.div`
    display: flex;
    flex-direction: colunm;
    margin: 10px;
    justify-content: center;
    height: 100vh;
.containerForm{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
input{
    width: 500px;
}
h2{
    text-align: center;
}
`;

export const AddProductButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    button: 20px;
    z-index: 3;
`;
export const ContainerList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
.list{
    display: flex;
    width: 500px;
    margin: 10px;
    }
`;