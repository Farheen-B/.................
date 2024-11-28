
    async function dots(id, message, delay) {
      let demoDiv = document.getElementById(id);

      // Create a promise that resolves after the specified delay
      let mypromise = new Promise((resolve) => {
        setTimeout(() => resolve(message), delay);
      });

      // Await the promise and display its resolved value
      demoDiv.innerHTML = await mypromise;

      // Function to manage dots
      let count = 0;
      setInterval(() => {
        count++;
        demoDiv.innerHTML = message + ".".repeat(count);

        // Reset the count and restart the dots
        if (count === 5) {
          count = 0; // Reset count
        }
      }, 800); // Append a dot every 800ms
    }

    // Call the dots function for each message with respective delays
    dots("demo", "Initializing hacking", 1000);
    dots("demo2", "Reading your files", 3000);
    dots("demo3", "Password files detected", 5000);
    dots("demo4", "Sending all password and personal files to server", 8000);
    dots("demo5", "Cleaning up", 10000);
  