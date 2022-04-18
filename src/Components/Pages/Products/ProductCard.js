import React from "react"
import { Card, Typography, CardContent } from "@mui/material";





const ProductCard = (props) => {
    
    return(
        <div>
          <Card className="list">
          <CardContent>
    
        <Typography variant="h5" >
         {props.name}
        </Typography>

        <Typography color="text.secondary">
          Preço: R$:{props.price},00
        </Typography>
      
        <Typography >
          Descrição: {props.description}
          <br />
          Data da publicação: {props.date}
        </Typography>

        <Typography color="text.secondary">
          Quantidade: {props.quantity}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}
export default ProductCard