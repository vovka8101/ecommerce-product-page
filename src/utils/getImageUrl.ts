export const getImageUrl = (src: string) => {
  return new URL(`../assets/images/${src}.jpg`, import.meta.url).href
}
