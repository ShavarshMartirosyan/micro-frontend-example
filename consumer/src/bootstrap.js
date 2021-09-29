import { mount as providerXMount } from "providerX/MicroX";
import { mount as providerYMount } from "providerY/MicroY";

const consumerX = document.querySelector("#consumer-x");
providerXMount(consumerX);


const consumerY = document.querySelector("#consumer-y");
providerYMount(consumerY);


console.log("CONSUMER");
