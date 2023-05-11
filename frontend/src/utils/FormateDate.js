export function formatDate(dateString, params = 'full') {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  if (params === 'full') {
    if (minutes > 9) {
      return `${day}.${month}.${year} ${hours}:${minutes}`
    } else {
      return `${day}.${month}.${year} ${hours}:0${minutes}`
    }
  } else if (params === 'date') {
    return `${day}.${month}.${year}`
  } else {
    if (minutes > 9) {
      return `${hours}:${minutes}`
    } else {
      return `${hours}:0${minutes}`
    }
  }
}
