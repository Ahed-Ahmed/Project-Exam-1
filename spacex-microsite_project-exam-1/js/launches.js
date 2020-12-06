const apiContainer = document.querySelector("#api-container-index");

fetch("https://api.spacexdata.com/v4/launches/next")
  .then((response) => response.json())
  .then((nextLaunch) => {
    const launchMarkup = createLaunchMarkup(nextLaunch, "Next Mission Planned");
    apiContainer.appendChild(launchMarkup);
  })
  .catch((err) => console.error(error))
  .then(() => fetch("https://api.spacexdata.com/v4/launches/past"))
  .then((response) => response.json())
  .then((data) => {
    const lastItem = data.length - 1;
    const previousLaunch = data[lastItem];
    const launchMarkup = createLaunchMarkup(previousLaunch, "Previous Mission");
    apiContainer.appendChild(launchMarkup);
  })
  .catch((err) => console.error(error));

function createLaunchMarkup(launch, launchText) {
  const launchContainer = document.createElement("section");

  launchContainer.className = "launch";

  const date = launch.date_local;

  launchContainer.innerHTML = `
    <h2 class="launch-title">${launchText}: ${launch.name} </h2>
    <ul class="launch-details">
    <h3 class="launch-detail"><strong>Launch time:</strong> <time datetime="${getDateTime(date)}">${formateDate(date)}</time></h3>
    <h3 class="launch-subtitle">Description</h3>
    <p class="launch-description">${launch.details}</p>
    <a href="${launch.links.webcast}" class="launch-link">Webcast</a>
    <a href="${launch.links.wikipedia}" class="launch-link">Wikipedia</a>
    `;

  return launchContainer;
}

function getDateTime(date) {
  if (!date) return;

  const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/g;

  return date.match(datePattern)[0];
}

function formateDate(date) {
  if (!date) return;

  const datePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/g;
  const formattedDate = date.match(datePattern)[0].split("T");
  const timeString = formattedDate[1];
  const dateString = formattedDate[0].split("-").reverse().join(".");

  return `${dateString} ${timeString} o'clock`;
}
