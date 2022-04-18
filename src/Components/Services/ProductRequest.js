import axios from "axios"
import { BASE_URL } from "../Services/baseUrl"

export const createProduct = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/product`, body, {
        header: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        setIsLoading(false)
        alert("Produto criado com sucesso")
        clear()
    })
    .catch((error) => {
        setIsLoading(false)
        alert(error.response.data.message)
    })
}
export default createProduct