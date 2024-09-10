export default defineNuxtPlugin((nuxtApp) => {
  // Plugin options
  // ...

  // Plugin function
  const format = (apiDate: string | number | Date) => {
    const date = new Date(apiDate);
    const formattedDate = date.toLocaleString("en", {
      month: "short",
      weekday: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
});
