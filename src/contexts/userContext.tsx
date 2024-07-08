import { axiosInstance } from "@/libs/axios"
import { createContext, useEffect, useReducer } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const token = localStorage.getItem("token")

export interface User {
  id: number
  name: string
  email: string
  role: string
  avatar: string | null
  created_at: string
  updated_at: string
}

interface State {
  users: User[]
  error: string | null
}

interface Action {
  type: string
  payload?: any
}

export interface UserContextProps extends State {
  addUser: ({
    name,
    email,
    password,
    role,
    avatar,
  }: {
    name: string
    email: string
    password: string
    role: string
    avatar: File | null
  }) => void
  updateUser: ({
    id,
    name,
    email,
    password,
    role,
    avatar,
  }: {
    id: number
    name: string
    email: string
    password: string | null
    role: string
    avatar: File | null
  }) => void
  deleteUser: (id: number) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

const initialState: State = {
  users: [],
  error: null,
}

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      }
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      }
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
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

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    userReducer,
    initialState
  )

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const { data } = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({ type: "GET_USERS", payload: data.data })
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
    }
  }

  const addUser = async ({
    name,
    email,
    password,
    role,
    avatar,
  }: {
    name: string
    email: string
    password: string
    role: string
    avatar: File | null
  }) => {
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("role", role)
      if (avatar) {
        formData.append("avatar", avatar)
      }

      const { data } = await axiosInstance.post("/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      dispatch({ type: "ADD_USER", payload: data.data })
      toast.success("Data Berhasil Ditambahkan")
    } catch (error: any) {
      console.log(error)
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Ditambahkan")
    }
  }

  const updateUser = async ({
    id,
    name,
    email,
    password,
    role,
    avatar,
  }: {
    id: number
    name: string
    email: string
    password: string | null
    role: string
    avatar: File | null
  }) => {
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      if (password) {
        formData.append("password", password)
      }
      formData.append("role", role)
      if (avatar) {
        formData.append("avatar", avatar)
      }

      const { data } = await axiosInstance.put(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      dispatch({ type: "UPDATE_USER", payload: data.data })
      toast.success("Data Berhasil Diubah")
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Diubah")
    }
  }

  const deleteUser = async (id: number) => {
    try {
      await axiosInstance.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({ type: "DELETE_USER", payload: id })
      toast.success("Data Berhasil Dihapus")
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.response.data.message })
      toast.error("Data Gagal Dihapus")
    }
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        error: state.error,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
