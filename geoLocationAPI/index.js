const btn = document.querySelector("#getLocation");
const display = document.querySelector("#locationDisplay");

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  display.textContent = `Latitude : ${latitude}, Longitude : ${longitude}`;
};

const displayError = (err) => {
  display.textContent = err.message;
};

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(displayGeoData, displayError); // getCurrentPosition 은 처음의 경도와 위도만 받을수 있다.
  }
});
