function handleSubmit(e) {
  e.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const url = { url: formText };
  Client.checkForName(formText);

  console.log("::: Form Submitted :::", url);
  fetch("http://localhost:8080/validate", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.subjectivity;
    });
}

export { handleSubmit };
