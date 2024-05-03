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
  }

  async init() {
    // Register click listener
    this.driverDropdownBtn.onclick = this.showDropdown;
    this.driverDropdownItems.forEach((item) => {
      item.onclick = this.changeDriverInputValue;
    });

    this.timeDropdownBtn.onclick = this.showDropdown;
    this.timeDropdownItems.forEach((item) => {
      item.onclick = this.changeTimeInputValue;
    });
  }

  run = () => {
    console.log("App is running");
  };

  async load() {}

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
      e.target.getAttribute("data-value");
    this.driverDropdownBtn.classList.remove("active");
  };

  changeTimeInputValue = (e) => {
    this.timeInput.value = e.target.innerText;

    this.timeDropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    this.timeDropdownBtn.querySelector("span").textContent = e.target.innerText;
    this.timeDropdownBtn.classList.remove("active");
  };

  clear = () => {};
}
