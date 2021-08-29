/**
 * @jest-environment jsdom
 */
import { handleSubmit } from "../js/formHandler";

// Need Polyfill for fetch
import "whatwg-fetch";

test("Add loading msg to results div", () => {
  // Creating the output div to have results in later
  const outputDiv = document.createElement("div");
  outputDiv.id = "results";

  // Creating fake form to add handleSubmit to it
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.id = "name";
  input.value = "hello world";

  form.addEventListener("submit", handleSubmit);
  document.body.append(outputDiv, form, input);

  form.submit();

  expect(outputDiv.innerHTML).toBe(
    `<p class="error">Please enter a valid URL in the form http(s)://site-name.domain-name(/../../)</p>`
  );
});
