import React from "react"
import { FiCheck } from "react-icons/fi"

type ServiceItemProps = {
  text: string
}

export default function ServiceItem({ text }: ServiceItemProps) {
  return (
    <li className='service__list-item'>
      <div className='service__list-icon'>
        <FiCheck color='#0D28A6' />
      </div>
      {text}
    </li>
  )
}
