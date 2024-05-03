// const filterBtn = document.querySelector(".filter__btn");

// filterBtn.addEventListener("click", () => {
//   const driverType = document.querySelector("#driverInput").value;
//   const date = document.querySelector("#dateInput").value;
//   const time = document.querySelector("#timeInput").value;
//   const passengerCount = document.querySelector("#passengerInput").value;

//   if (driverType && date && time) {
//     filterBtn.classList.remove("btn-success");
//     filterBtn.classList.add("btn-outline-primary");
//     filterBtn.textContent = "Edit";

//     const app = new App();
//     app.clear();
//     app.init({ driverType, date, time, passengerCount }).then(app.run);
//   }
// });

const app = new App();
app.init().then(app.run);
