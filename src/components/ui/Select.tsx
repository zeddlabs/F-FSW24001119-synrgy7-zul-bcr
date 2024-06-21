import { useState } from "react"

type SelectProps = {
  label: string
  placeholder: string
  icon: React.ReactNode
  options: string[]
  value: string
  setValue: (value: string) => void
}

export default function Select({
  label,
  placeholder,
  icon,
  options,
  value,
  setValue,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (option: string) => {
    setValue(option)
    setIsOpen(false)
  }

  return (
    <div className='filter__form-group'>
      <input type='hidden' value={value} />

      <span className='filter__label'>{label}</span>
      <div
        className={`filter__dropdown-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value == "" ? placeholder : value}</span>
        {icon}
      </div>
      <ul className='filter__dropdown'>
        {options.map((option, index) => (
          <li
            className='filter__dropdown-item'
            key={index}
            onClick={() => handleItemClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
