import React from "react"

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <main>{children}</main>
}
