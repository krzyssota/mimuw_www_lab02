let el = document.querySelector("li.button:nth-child(9) > button:nth-child(1)");
el.style.display = "none";

let el2 = document.querySelector("#imie") as HTMLInputElement;

console.log(el2.value);



let indentyfikatorowe = document.querySelectorAll("#opoznienia > tbody:nth-child(2) tr[prior]");