const words = ["Aspiring Developer", "CSBS Student", "Creative Thinker"];
let i = 0;
let j = 0;
let isDeleting = false;
let current = '';
const typedText = document.getElementById("typed");

function type() {
  if (i >= words.length) i = 0;
  current = words[i];

  if (!isDeleting) {
    typedText.textContent = current.slice(0, ++j);
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typedText.textContent = current.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? 40 : 100);
}

document.addEventListener("DOMContentLoaded", type);
