import { axiosInstance } from "@/libs/axios"
import { createContext, useEffect, useReducer } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const token = localStorage.getItem("token")

export interface User {
  id: number
  name: string
}

export interface Size {
  id: number
  name: string
}

export interface Car {
  id: number
  name: string
  rent_per_day: number
  image: string
  start_rent: string | null
  finish_rent: string | null
  is_deleted: boolean
  created_at: string
  updated_at: string
  deletedBy: User | null
  size: Size
  createdBy: User
  updatedBy: User
}

interface State {
  cars: Car[]
  error: string | null
}

interface Action {
  type: string
  payload?: any
}

export interface CarContextProps extends State {
  addCar: ({
    name,
    rent_per_day,
    image,
    size_id,
  }: {
    name: string
    rent_per_day: number
    image: File
    size_id: number
  }) => void
  updateCar: ({
    id,
    name,
    rent_per_day,
    image,
    size_id,
    start_rent,
    finish_rent,
  }: {
    id: number
    name: string
    rent_per_day: number
    image: File | null
    size_id: number
    start_rent: string | null
    finish_rent: string | null
  }) => void
  deleteCar: (id: number) => void
}

const CarContext = createContext<CarContextProps | undefined>(undefined)

const initialState: State = {
  cars: [],
  error: null,
}

const carReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        cars: action.payload,
      }
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      }
    case "UPDATE_CAR":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
      }
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      }
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    carReducer,
    initialState
  )

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
    try {
      const { data } = await axiosInstance.get("/cars")
      dispatch({ type: "GET_CARS", payload: data.data })
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
    }
  }

  const addCar = async ({
    name,
    rent_per_day,
    image,
    size_id,
  }: {
    name: string
    rent_per_day: number
    image: File
    size_id: number
  }) => {
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("rent_per_day", rent_per_day.toString())
      formData.append("image", image)
      formData.append("size_id", size_id.toString())

      const { data } = await axiosInstance.post("/cars", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      dispatch({ type: "ADD_CAR", payload: data.data })
      toast.success("Data Berhasil Ditambahkan")
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Ditambahkan")
    }
  }

  const updateCar = async ({
    id,
    name,
    rent_per_day,
    image,
    size_id,
    start_rent,
    finish_rent,
  }: {
    id: number
    name: string
    rent_per_day: number
    image: File | null
    size_id: number
    start_rent: string | null
    finish_rent: string | null
  }) => {
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("rent_per_day", rent_per_day.toString())
      if (image) {
        formData.append("image", image)
      }
      formData.append("size_id", size_id.toString())
      if (start_rent) {
        formData.append("start_rent", start_rent)
      }
      if (finish_rent) {
        formData.append("finish_rent", finish_rent)
      }

      const { data } = await axiosInstance.put(`/cars/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      dispatch({ type: "UPDATE_CAR", payload: data.data })
      toast.success("Data Berhasil Diubah")
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Diubah")
    }
  }

  const deleteCar = async (id: number) => {
    try {
      await axiosInstance.delete(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({ type: "DELETE_CAR", payload: id })
      toast.success("Data Berhasil Dihapus")
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Dihapus")
    }
  }

  return (
    <CarContext.Provider
      value={{
        cars: state.cars,
        error: state.error,
        addCar,
        updateCar,
        deleteCar,
      }}
    >
      {children}
    </CarContext.Provider>
  )
}

export { CarProvider, CarContext }
