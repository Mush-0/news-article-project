function handleSubmit(e) {
  e.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const url = { url: formText };

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
      if (res.error === "failed") {
        document.getElementById("results").innerHTML =
          "Request failed, Please enter a valid URL";
        return;
      }
      const { score_tag, agreement, subjectivity, confidence, irony } = res;
      let scoreResult;
      switch (score_tag) {
        case "P+":
          scoreResult = "Highly positive";
          break;
        case "P":
          scoreResult = "Positive";
          break;
        case "NEU":
          scoreResult = "Neutral";
          break;
        case "N":
          scoreResult = "Negative";
          break;
        case "N+":
          scoreResult = "Highly negative";
          break;

        default:
          scoreResult = "No polarity detected";
          break;
      }
      document.getElementById(
        "results"
      ).innerHTML = `<p>Article polarity: ${scoreResult} <br>
       Agreement type: ${agreement.toLowerCase()} <br>
       Subjectivity: ${subjectivity.toLowerCase()} <br>
       API Confidenece: ${confidence}% <br>
       Irony: ${irony.toLowerCase()} </p>`;
    });
}

export { handleSubmit };
