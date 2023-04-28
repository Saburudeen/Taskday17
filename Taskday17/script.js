let count = 10;

const countdown = setInterval(() => {
  if (count === 0) {
    clearInterval(countdown);
    displayMessage();
  } else {
    document.getElementById("countdown").innerHTML = count;
    count--;
  }
}, 1000);

function displayMessage() {
  document.getElementById("countdown").innerHTML = "Happy Independence Day";
}
