export const getNumberOfLastDaysInPrevMonth = (
  currentMonth: number,
  currentYear: number
) => {
  const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0)
  const lastDaysOfPrev = []
  for (let i = 0; i <= lastDayOfPrevMonth.getDay(); i++) {
    const date = lastDayOfPrevMonth.getDate() - lastDayOfPrevMonth.getDay() + i
    lastDaysOfPrev.push(date)
  }
  return lastDaysOfPrev
}

export const getNumberOfDaysInMonth = (
  currentMonth: number,
  currentYear: number
) => {
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const days = []
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push(i)
  }
  return days
}

export const getNumberOfFirstDaysInNextMonth = (
  currentMonth: number,
  currentYear: number
) => {
  const firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1)
  const firstDaysOfNext = []
  for (let i = firstDayOfNextMonth.getDay(); i < 7; i++) {
    const date =
      firstDayOfNextMonth.getDate() - firstDayOfNextMonth.getDay() + i
    firstDaysOfNext.push(date)
  }
  return firstDaysOfNext
}
