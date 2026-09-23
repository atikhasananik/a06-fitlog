export const getData =async() => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache:"force-cache"})
  const data = await res.json()
  return data
}
