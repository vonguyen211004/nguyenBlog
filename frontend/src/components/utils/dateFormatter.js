export const formatDateVietnamese = (date) => {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  return `${day} tháng ${month} năm ${year}`
}

export const formatDateVietnameseShort = (date) => {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatRelativeTimeVietnamese = (date) => {
  const now = new Date()
  const createdDate = new Date(date)
  const diffMs = now - createdDate
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffSecs < 60) return "Vừa xong"
  if (diffMins < 60) return `${diffMins} phút trước`
  if (diffHours < 24) return `${diffHours} giờ trước`
  if (diffDays < 7) return `${diffDays} ngày trước`
  if (diffWeeks < 4) return `${diffWeeks} tuần trước`
  if (diffMonths < 12) return `${diffMonths} tháng trước`
  return `${diffYears} năm trước`
}
