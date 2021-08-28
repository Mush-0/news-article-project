function handleSubmit(e) {
  e.preventDefault();

  const formText = document.getElementById("name").value;
  const outputDiv = document.getElementById("results");

  const url = { url: formText };
  outputDiv.innerHTML = `<p class="loading" >Please wait,Loading...</p>`;
  console.log("::: Form Submitted :::", url.url);

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
      if (res.error === "failed") {
        outputDiv.innerHTML = `<p class="error">Request failed, API responded: ${res.problem}</p>`;
        return;
      }
      const { score_tag, agreement, subjectivity, confidence, irony } = res;
      const scoreResult = Client.resolveScoreTag(score_tag);
      outputDiv.innerHTML = `<p>Article polarity: ${scoreResult} <br>
       Agreement type: ${agreement.toLowerCase()} <br>
       Subjectivity: ${subjectivity.toLowerCase()} <br>
       API Confidenece: ${confidence}% <br>
       Irony: ${irony.toLowerCase()} </p>`;
    });
}

export { handleSubmit };
