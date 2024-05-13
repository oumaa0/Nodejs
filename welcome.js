const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return;
  }
  console.log('File "welcome.txt" created successfully');
});

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Content of welcome.txt:", data);
});
