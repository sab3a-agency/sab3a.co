export function formatArabicDate(dateStr) {
  const date = new Date(dateStr);

  return new Intl.DateTimeFormat('ar', {
    day: 'numeric',
    month: 'long'
  }).format(date);
}

export function normalizeSlashes(str) {
  return str.replace(/\\/g, '/');
}
