setInterval(() => {
  const time = document.querySelector("#time");
  const dateDisplay = document.querySelector("#date");
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dateFormat = new Intl.DateTimeFormat("en-US", options).format(date);

  dateDisplay.textContent = `${dateFormat}`;
  time.textContent = `${hours}:${minutes}:${seconds}`;
});
