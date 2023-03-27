
// button
const buttonRef = document.querySelector("button");

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
    }else {
        buttonRef.textContent = "Click Me!";
    };
};

buttonRef.addEventListener("click", changeText);