export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("vi-VN", options);

  // Tách ngày và tháng
  const [day, month, year] = formattedDate.split("/");

  // Trả về định dạng "15 tháng 3, 2025"
  return `${day} tháng ${month}, ${year}`;
}
