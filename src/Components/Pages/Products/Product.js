import React from "react"
import useProtectedPage from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/useRequestData"
import { BASE_URL } from "../../Services/baseUrl"
import ProductCard from "../Products/ProductCard"
import { AddProductButton, ContainerList } from "./styled"
import { goToAddProduct } from "../../Navigation/navigation"
import { useNavigate } from "react-router-dom"


const ProductsPage = (props) => {
    useProtectedPage()

    const navigate = useNavigate()
    
    const products = useRequestData([], `${BASE_URL}/product`)

   const productsCards = products.map((product) => {
        return <ProductCard key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        date={product.date}
        />
    })

    return(
        <ContainerList>
            {productsCards}
            <AddProductButton
            color="secondary"
            onClick={() => goToAddProduct(navigate)}
            >
            +
            </AddProductButton>
        </ContainerList>
    )
}
export default ProductsPage