window.setTimeout(function() {
  var todos = ["Buy milk"];

  var input = prompt("What would you like to do?");

  while (input !== "Quit") {

    if (input === "List") {
      console.log(todos);
    } else if (input === "New") {
      // Ask the user for new todo List
      var newToDo = prompt("Enter new ToDo");
      // Add to todo List
      todos.push(newToDo);
    }
    // Ask for input again
    var input = prompt("What would you like to do?");

  }
  console.log("Quitting the app...");
  // put all of your JS code from the lecture here
}, 500);
