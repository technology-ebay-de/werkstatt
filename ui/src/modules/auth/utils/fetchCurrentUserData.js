export default () =>
  fetch('/api/user/current/')
    .then(response => response.json())
