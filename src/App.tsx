import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import {
  AddCarPage,
  AddUserPage,
  DashboardPage,
  EditCarPage,
  EditUserPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  SearchPage,
  UserListPage,
} from "./pages"
import { Bounce, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AuthProtected from "./components/AuthProtected"

function App() {
  const location = useLocation()

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme='colored'
        transition={Bounce}
      />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route
          path='/dashboard'
          element={<Navigate to={"/dashboard/cars"} />}
        />
        <Route
          path='/dashboard/cars'
          element={
            <AuthProtected roles={["Super Admin", "Admin"]}>
              <DashboardPage />
            </AuthProtected>
          }
        />
        <Route
          path='/dashboard/cars/add'
          element={
            <AuthProtected roles={["Super Admin", "Admin"]}>
              <AddCarPage />
            </AuthProtected>
          }
        />
        <Route
          path='/dashboard/cars/edit/:id'
          element={
            <AuthProtected roles={["Super Admin", "Admin"]}>
              <EditCarPage />
            </AuthProtected>
          }
        />
        <Route
          path='/dashboard/users'
          element={
            <AuthProtected roles={["Super Admin"]}>
              <UserListPage />
            </AuthProtected>
          }
        />
        <Route
          path='/dashboard/users/add'
          element={
            <AuthProtected roles={["Super Admin"]}>
              <AddUserPage />
            </AuthProtected>
          }
        />
        <Route
          path='/dashboard/users/edit/:id'
          element={
            <AuthProtected roles={["Super Admin"]}>
              <EditUserPage />
            </AuthProtected>
          }
        />
      </Routes>
    </>
  )
}

export default App
