const input = document.getElementById("input");
const check = document.getElementById("check");

check.addEventListener("click", (e) => {
  e.preventDefault();

  const arr = [...input.value.toLowerCase()];
  const vowels = arr.filter(
    (letter) =>
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
  );

  alert(`There are ${vowels.length} vowels`);
});
