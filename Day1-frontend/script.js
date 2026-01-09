const title = document.getElementById("mainTitle");

const paragraphs = document.getElementsByClassName("text");

const divs = document.getElementsByTagName("div");

const button = document.querySelector("#applyBtn");

button.addEventListener("click", function () {
    //To inspect stuff from web
    console.log("Button clicked");
    title.textContent = "DOM Updated Successfully";

    //Changes style when click happens
    for (let p = 0; p < paragraphs.length; p++) {
        paragraphs[p].style.color = "green";
    }
});

let box1 = document.getElementById("box1");
box1.style.backgroundColor = "red";

let box = document.getElementsByClassName("box")

box[1].style.backgroundColor = "blue"; // Accessing the first element in the collection