const button = document.querySelector("button");


button.onclick = () => {
    const circle = document.querySelector(".circle");
    const red = document.querySelector("input:first-child");
    const green = document.querySelector("input:nth-child(2)");
    const blue = document.querySelector("input:last-of-type");
    
    circle.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
};