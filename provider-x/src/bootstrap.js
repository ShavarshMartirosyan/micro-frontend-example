import { evBus } from 'eventBus/EventBus';

const mount = (el) => {
  const button = document.createElement("button");
  button.innerText = "Provider X";

  const input = document.createElement("input");

  el.appendChild(button);
  el.appendChild(input);
  
  button.addEventListener("click", () => {
    evBus.dispatch(input.value);
    input.value="";
  })

};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#provider-x");

  if (el) {
    mount(el);
  }
}

console.log("Provider X");

export { mount };

