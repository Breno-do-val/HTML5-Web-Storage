class App {
  constructor() {
    console.log("Initialized...");
    this.bindButtonListener();
  }

  bindButtonListener() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      this.saveToStorage();
    });
  }

  saveToStorage() {
    const keyInput = document.getElementById("key");
    const valueInput = document.getElementById("value");

    if(keyInput.value && valueInput.value) {
      localStorage.setItem(keyInput.value, valueInput.value)
    }
  }
}

new App();
