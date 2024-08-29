  // Initialize the count to 0
  let count = 0;

  // Function to increment the count
  function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
  }

  // Function to save the count
  function save() {
    const saveEl = document.getElementById("save-el");
    saveEl.textContent += count + " - ";
    count = 0; // Reset count after saving
    document.getElementById("count-el").textContent = count;
  }
