function loadFn() {
  const loadTrigger = document.querySelectorAll(".js-loaded");
  loadTrigger.forEach((element) => {
    element.classList.add("is-active");
  });
}

function loadFnRemove() {
  const loadTrigger = document.querySelectorAll(".js-loaded");
  loadTrigger.forEach((element) => {
    element.classList.remove("is-active");
  });
}