const addBtnDOM = document.querySelector(".add-button")
const inputDOM = document.querySelector("#task")
let ulLiDOM = document.getElementsByTagName("li");
let listDOM = document.getElementById("list")

for (let i = 0; i < ulLiDOM.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ulLiDOM[i].append(closeButton);
    ulLiDOM[i].onclick = check;
}

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}



addBtnDOM.addEventListener("click", function () {

    if (inputDOM.value.trim() != "") {
        $(".success").toast("show");

        const ul = document.querySelector("#list")
        const li = document.createElement("li")
        li.innerHTML = inputDOM.value
        ul.appendChild(li)
        inputDOM.value = ""
        listDOM.onclick = check;


        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        li.append(closeButton);
        li.onclick = check;

    }
    else {
        $(".error").toast("show");
    }

})
