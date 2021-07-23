export default (context, inject) => {
  const format = (apiDate) => {
    const date  = new Date(apiDate);
    const formattedDate = date.toLocaleString('en',
      { month: 'short', weekday: 'short', day: 'numeric', year: 'numeric'});

    return formattedDate;
  }
  // Inject $hello(msg) in Vue, context and store.
  inject('format', format)
  // For Nuxt <= 2.12, also add 👇
  context.$format = format
}
