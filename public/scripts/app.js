class App {
  constructor() {
    this.driverInput = document.querySelector("#driverInput");
    this.driverDropdownBtn = document.querySelector("#driver");
    this.driverDropdownMenu = this.driverDropdownBtn.nextElementSibling;
    this.driverDropdownItems = this.driverDropdownMenu.querySelectorAll(
      ".filter__dropdown-item"
    );

    this.timeInput = document.querySelector("#timeInput");
    this.timeDropdownBtn = document.querySelector("#time");
    this.timeDropdownMenu = this.timeDropdownBtn.nextElementSibling;
    this.timeDropdownItems = this.timeDropdownMenu.querySelectorAll(
      ".filter__dropdown-item"
    );

    this.dateInput = document.querySelector("#dateInput");
    this.datepickerBtn = document.querySelector("#date");

    this.passengerInput = document.querySelector("#passengerInput");
    this.filterBtn = document.querySelector("#filterBtn");

    // datepicker
    this.dates = document.querySelector(".dates");
    this.nextMonthBtn = document.querySelector(".datepicker__header .next");
    this.prevMonthBtn = document.querySelector(".datepicker__header .prev");
    this.monthInput = document.querySelector("#monthInput");
    this.yearInput = document.querySelector("#yearInput");
    this.chooseDateBtn = document.querySelector(
      ".datepicker__footer .chooseDate"
    );

    this.selectedDate = new Date();
    this.year = this.selectedDate.getFullYear();
    this.month = this.selectedDate.getMonth();

    this.carContainerElement = document.getElementById("carContainer");
  }

  async init() {
    moment.locale("id");

    await this.load();

    // Register click listener
    this.driverDropdownBtn.onclick = this.showDropdown;
    this.driverDropdownItems.forEach((item) => {
      item.onclick = this.changeDriverInputValue;
    });

    this.timeDropdownBtn.onclick = this.showDropdown;
    this.timeDropdownItems.forEach((item) => {
      item.onclick = this.changeTimeInputValue;
    });

    this.updateFilterBtn();

    this.datepickerBtn.onclick = this.showDatepicker;

    this.displayDates();

    this.nextMonthBtn.onclick = (e) => {
      if (this.month === 11) year++;
      this.month = (this.month + 1) % 12;
      this.displayDates();
    };

    this.prevMonthBtn.onclick = (e) => {
      if (this.month === 0) year--;
      this.month = (this.month - 1 + 12) % 12;
      this.displayDates();
    };

    this.monthInput.onchange = (e) => {
      this.month = e.target.selectedIndex;
      this.displayDates();
    };

    this.yearInput.onchange = (e) => {
      this.year = parseInt(e.target.value);
      this.displayDates();
    };

    this.chooseDateBtn.onclick = this.handleChooseDateBtn;

    this.filterBtn.onclick = this.handleFilterBtnClick;
  }

  run = () => {
    console.log("App is running");

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-6", "col-lg-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars((car) => {
      return (
        car.availableAt >=
          new Date(this.dateInput.value + "T" + this.timeInput.value) &&
        (this.passengerInput.value === undefined
          ? true
          : car.capacity >= this.passengerInput.value) &&
        car.driverType === this.driverInput.value
      );
    });
    Car.init(cars);
  }

  getParentBySelector = (el, selector) => {
    var node;
    var els = document.querySelectorAll(selector);
    els = els && els.length ? Array.from(els) : [];

    while (el && el.parentNode) {
      el = el.parentNode;
      node = els.find((x) => x === el);
      if (node) return node;
    }
  };

  showDropdown = (e) => {
    const parent = this.getParentBySelector(e.target, ".filter__dropdown-btn");
    parent.classList.toggle("active");
  };

  changeDriverInputValue = (e) => {
    this.driverInput.value = e.target.getAttribute("data-value");

    this.driverDropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    this.driverDropdownBtn.querySelector("span").textContent =
      e.target.innerText;
    this.driverDropdownBtn.classList.remove("active");

    this.updateFilterBtn();
  };

  changeTimeInputValue = (e) => {
    this.timeInput.value = e.target.getAttribute("data-value");

    this.timeDropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    this.timeDropdownBtn.querySelector("span").textContent = e.target.innerText;
    this.timeDropdownBtn.classList.remove("active");

    this.updateFilterBtn();
  };

  updateFilterBtn = () => {
    const driver = this.driverInput.value;
    const time = this.timeInput.value;
    const date = this.dateInput.value;

    if (driver && time && date) {
      this.filterBtn.removeAttribute("disabled");
    } else {
      this.filterBtn.setAttribute("disabled", true);
    }
  };

  showDatepicker = (e) => {
    const parent = this.getParentBySelector(e.target, ".filter__date-btn");
    parent.classList.toggle("active");
  };

  displayDates = () => {
    this.updateYearMonth();

    this.dates.innerHTML = "";

    const lastOfPrevMonth = new Date(this.year, this.month, 0);
    for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
      const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
      const button = this.createDateButton(text, true, false);
      this.dates.appendChild(button);
    }

    const lastOfMonth = new Date(this.year, this.month + 1, 0);
    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
      const isToday =
        this.selectedDate.getDate() === i &&
        this.selectedDate.getMonth() === this.month &&
        this.selectedDate.getFullYear() === this.year;

      const button = this.createDateButton(i, false, isToday);
      button.addEventListener("click", this.handleDateClick);
      this.dates.appendChild(button);
    }

    const firstOfNextMonth = new Date(this.year, this.month + 1, 1);
    for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
      const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
      const button = this.createDateButton(text, true, false);
      this.dates.appendChild(button);
    }
  };

  createDateButton = (text, isDisabled = false, isToday = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle("today", isToday);
    button.setAttribute("type", "button");
    return button;
  };

  handleDateClick = (e) => {
    const button = e.target;

    const selected = this.dates.querySelector(".selected");
    selected && selected.classList.remove("selected");

    button.classList.add("selected");

    this.selectedDate = new Date(
      this.year,
      this.month,
      parseInt(button.textContent)
    );
  };

  updateYearMonth = () => {
    this.monthInput.selectedIndex = this.month;
    this.yearInput.value = this.year;
  };

  handleChooseDateBtn = () => {
    this.dateInput.value = moment(this.selectedDate).format("YYYY-MM-DD");

    this.datepickerBtn.querySelector("span").textContent = moment(
      this.selectedDate
    ).format("DD MMM YYYY");
    this.datepickerBtn.classList.remove("active");

    this.updateFilterBtn();
  };

  handleFilterBtnClick = () => {
    if (
      this.driverInput.value &&
      this.dateInput.value &&
      this.timeInput.value
    ) {
      this.filterBtn.classList.remove("btn-success");
      this.filterBtn.classList.add("btn-outline-primary");
      this.filterBtn.textContent = "Edit";

      this.clear();
      this.init().then(this.run);
    }
  };

  clear = () => {
    this.carContainerElement.innerHTML = "";
  };
}
