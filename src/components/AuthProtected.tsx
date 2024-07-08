import { Navigate } from "react-router-dom"

type AuthProtectedProps = {
  children: React.ReactNode
  roles: string[]
}

export default function AuthProtected({ children, roles }: AuthProtectedProps) {
  const user = JSON.parse(localStorage.getItem("user") as string)

  if (user) {
    return <>{roles.includes(user.role) ? children : <Navigate to={"/"} />}</>
  } else {
    return (
      <>
        <Navigate to={"/"} />
      </>
    )
  }
}
