export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).format(new Date(dateStr));
}

export function isWithinLast(dateStr, days) {
  const taskDate = new Date(dateStr);
  const now = new Date();

  if (taskDate > now) return false;

  const startOfNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfTask = new Date(
    taskDate.getFullYear(),
    taskDate.getMonth(),
    taskDate.getDate()
  );

  const diffTime = startOfNow - startOfTask;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays < days;
}
