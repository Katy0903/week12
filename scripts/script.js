
// button
const buttonRef = document.querySelector("button");
// console.log(buttonRef);

function alertUser()
{
    alert("You clicked!!!");
    // remove, so alert only appear once
    // buttonRef.removeEventListener("click", alertUser);
 
};

buttonRef.addEventListener("click", alertUser, {once:true});


function changeBGPink()
{
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pingBG");
};


buttonRef.addEventListener("click", changeBGPink);


function changeText()
{
    if (buttonRef.textContent === "Click Me!") {
        buttonRef.textContent = "Clicked!" 
        // one equal sogn just assigning, === is for equal check
    }else {
        buttonRef.textContent = "Click Me!";
    };
};

buttonRef.addEventListener("click", changeText);


function updateImage() {
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", "images/shoppingCart.png");
    // think we are in html, no need ..
    image.setAttribute("alt","shopping cart");
    image.setAttribute("width",50);
    image.setAttribute("height",50);

};

buttonRef.addEventListener("click", updateImage);
