class App {
  constructor() {
    console.log("Initialized...");
    this.bindButtonListener();
    this.listStorageValues();
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

  listStorageValues() {
    const storageValues = document.getElementById('storageValues');

    const toHtml = key => {
      const value = localStorage.getItem(key);
      return `<p>${key}: ${value}</p>`;
    };

    const htmlOutput = Object.keys(localStorage)
      .map(toHtml)
      .join('');

    storageValues.innerHTML = htmlOutput;
  }
}

new App();
