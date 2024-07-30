let box = document.getElementById("box")
let ent = document.getElementById("ent")

ent.addEventListener("click", function() {
    text = document.getElementById("text").value;
    box.style.borderRadius = `${text}%`;
    box.style.backgroundColor = text;
})