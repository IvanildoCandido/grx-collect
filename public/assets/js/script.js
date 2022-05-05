const txtArea = document.querySelector("#justify-answer");
const formCollect = document.querySelector("#form-collect");
const charLength = document.querySelector("#char-length");

txtArea.addEventListener("keyup", function (e) {
  let totalChars = txtArea.value.length;
  charLength.innerHTML = `${totalChars}/200`;
});

formCollect.addEventListener("submit", function (e) {
  let minChars = 15;
  let totalChars = txtArea.value.length;

  if (totalChars < minChars) {
    txtArea.focus();
    e.preventDefault();
  }
});
