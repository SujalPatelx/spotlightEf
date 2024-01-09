let para = document.getElementById("myP");
let myC = document.getElementById("main-container");
let credit = document.getElementById("credit");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  para.innerText = result;
  return result;
}

myC.addEventListener("mousemove", (e) => {
  generateString(7000);
  myC.style.setProperty("--x", e.clientX + "px");
  myC.style.setProperty("--y", e.clientY + "px");
});
