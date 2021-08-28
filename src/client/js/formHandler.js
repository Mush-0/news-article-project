function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8080/test", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.subjectivity;
    });
}

export { handleSubmit }
