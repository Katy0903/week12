
// button
const buttonRef = document.querySelector("button");

function alertUser()
{
    alert("You clicked!!!");
    // remove, so alert only appear once
    // buttonRef.removeEventListener("click", alertUser);
 
};

buttonRef.addEventListener("click", alertUser, {once:true});


// function changeColor()
// {


// };


