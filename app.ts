// Array of strings for hexa decimal values.
const hexValues: string[] = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById("btn");

/* Non-Null Assertion (!) - Using this bcuz typescript thinks color is null, its not exists, but we know that 
its there. */ 
const color = document.querySelector('.color')!;

// Alertnative wa to write above line with typescript non-null assertion
// const color = document.getElementsByTagName("span")[0];

btn?.addEventListener("click", () => {
    let hexColor:string = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});