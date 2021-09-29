import { evBus } from 'eventBus/EventBus';

const mount = (el) => {
  const button = document.createElement("button");
  button.innerText = "Provider Y";

  const span = document.createElement('span');

  el.appendChild(button);
  el.appendChild(span);

  button.addEventListener("click", () => {
    span.innerText = evBus.subscribe().input;
  })
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#provider-y");

  if (el) {
    mount(el);
    
  }
}

console.log("Provider Y");


export { mount };

