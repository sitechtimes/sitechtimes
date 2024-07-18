export default {
  // Plugin options
  // ...

  // Plugin function
  format(apiDate) {
    const date = new Date(apiDate);
    const formattedDate = date.toLocaleString("en", {
      month: "short",
      weekday: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  },
};
