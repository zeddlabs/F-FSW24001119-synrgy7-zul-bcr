import { monthNames } from "@/constants/months"
import {
  getNumberOfDaysInMonth,
  getNumberOfFirstDaysInNextMonth,
  getNumberOfLastDaysInPrevMonth,
} from "@/utils/date"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { useState } from "react"
import { FiArrowLeft, FiArrowRight, FiCalendar } from "react-icons/fi"

type DatePickerProps = {
  setDate: (date: string) => void
}

export default function DatePicker({ setDate }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  )
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  )
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [dateString, setDateString] = useState<string>("")

  const [isOpen, setIsOpen] = useState(false)

  const handleNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1)
    } else {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    }
  }

  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1)
    } else {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    }
  }

  const handleDateClick = (date: number) => {
    setSelectedDate(date)
  }

  const handleChooseDateBtn = () => {
    if (selectedDate) {
      const date = format(
        new Date(currentYear, currentMonth, selectedDate),
        "yyyy-MM-dd",
        {
          locale: id,
        }
      )
      const dateString = format(
        new Date(currentYear, currentMonth, selectedDate),
        "dd MMM yyyy",
        {
          locale: id,
        }
      )
      setDate(date)
      setDateString(dateString)
      setIsOpen(false)
    }
  }

  return (
    <div className='filter__form-group'>
      <input type='hidden' />

      <span className='filter__label'>Pilih Tanggal</span>
      <div
        className={`filter__date-btn ${isOpen ? "active" : ""}`}
        id='date'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{dateString == "" ? "Pilih Tanggal" : dateString}</span>
        <FiCalendar size={18} color='#8A8A8A' className='icon' />
      </div>
      <div className='datepicker'>
        <div className='datepicker__header'>
          <button type='button' className='prev' onClick={handlePrevMonth}>
            <FiArrowLeft size={24} color='#151515' />
          </button>

          <div>
            <span>{monthNames[currentMonth]}</span>
            <span>{currentYear}</span>
          </div>

          <button type='button' className='next' onClick={handleNextMonth}>
            <FiArrowRight size={24} color='#151515' />
          </button>
        </div>

        <div className='days'>
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
        <div className='dates'>
          {getNumberOfLastDaysInPrevMonth(currentMonth, currentYear).map(
            (date, index) => (
              <button key={index} type='button' disabled>
                {date}
              </button>
            )
          )}
          {getNumberOfDaysInMonth(currentMonth, currentYear).map(
            (date, index) => {
              const isToday =
                new Date(currentYear, currentMonth, date).toDateString() ===
                new Date().toDateString()

              return (
                <button
                  key={index}
                  type='button'
                  className={`${isToday ? "today" : ""} ${
                    date == selectedDate ? "selected" : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </button>
              )
            }
          )}
          {getNumberOfFirstDaysInNextMonth(currentMonth, currentYear).map(
            (date, index) => (
              <button key={index} type='button' disabled>
                {date}
              </button>
            )
          )}
        </div>

        <div className='datepicker__footer'>
          <button
            type='button'
            className='chooseDate btn btn-success w-100'
            onClick={handleChooseDateBtn}
          >
            Pilih Tanggal
          </button>
        </div>
      </div>
    </div>
  )
}
