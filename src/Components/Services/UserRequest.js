import axios from "axios"
import { goToProductPage } from "../Navigation/navigation"
import { BASE_URL } from "./baseUrl"


export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
  axios.post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.access_token)
      clear()
      setIsLoading(false)
      goToProductPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((error) => {
      setIsLoading(false)
      alert(error.response.data.message)
    })
}
export default login

export const signup = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.access_token)
    clear()
    setIsLoading(false)
    goToProductPage(navigate)
  })
  .catch((error) => {
    setIsLoading(false)
    alert(error.response.data)
  })
}