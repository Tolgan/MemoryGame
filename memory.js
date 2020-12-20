let array = [];

var imag = document.querySelectorAll("img");

//CHECK IF ITS SUCCESSS(EVERY ITEM HIDDEN)
function checkSuccess() {
  let array = [];
  imag.forEach((img) => {
    img.visible = getComputedStyle(img).visibility;
    array.push(getComputedStyle(img).visibility);
  });

  function check(visible) {
    return visible === "hidden";
  }
  console.log(array.every(check));
}

async function changeimg(event, SRC) {
  event.target.src = SRC;
  setTimeout(() => {
    event.target.src = "./dragon.jpg";
  }, 1000);
}

imag.forEach((item) => {
  item.style.order = Math.floor(Math.random() * 20);
  item.src = "./dragon.jpg";

  item.addEventListener("click", () => {
    var classs = item.getAttribute("class");
    var finder = document.getElementsByClassName(`${classs}`);
    var listar = Array.from(finder);

    array = [...array, item];

    const length = array.length;

    if (
      length >= 2 &&
      array[length - 1].id !== array[length - 2].id &&
      array[length - 1].className == array[length - 2].className
    ) {
      array = [];

      setTimeout(
        () => listar.forEach((value) => (value.style.visibility = "hidden")),
        1000
      );
      setTimeout(() => {
        if (checkSuccess() === false) {
          return document.createElement("h1").innerText("Successs!!Congrats");
        }
      }, 1200);
    }
  });
});

function refresh() {
  array = [];
  imag.forEach((item) => {
    item.style.order = Math.floor(Math.random() * 20);
    item.style.visibility = "visible";
  });
}
