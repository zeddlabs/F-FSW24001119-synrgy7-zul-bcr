import { baseUrl } from "@/constants"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: baseUrl + "/api/v1",
})

export { axiosInstance }
