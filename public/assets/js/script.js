const txtArea = document.querySelector("#justify-answer");
const formCollect = document.querySelector("#form-collect");
const charLength = document.querySelector("#char-length");

txtArea.addEventListener("keyup", function (e) {
  let totalChars = txtArea.value.length;
  charLength.innerHTML = `${totalChars}/200`;
});

formCollect.addEventListener("submit", function (e) {
  e.preventDefault();
  let minChars = 15;
  let totalChars = txtArea.value.length;

  if (totalChars < minChars) {
    txtArea.focus();
    return;
  }
  sendAnswer();
});

const sendAnswer = () => {
  const question_1 = document.querySelector(
    'input[name="question_1"]:checked'
  ).value;
  const question_2 = document.querySelector(
    'input[name="question_2"]:checked'
  ).value;
  const question_3 = document.getElementById("question_3").value;
  const question_4 = txtArea.value;
  const answer = { question_1, question_2, question_3, question_4 };
  const url = "http://localhost:5000/results";
  fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(answer),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  window.location.href = "./results";
};
