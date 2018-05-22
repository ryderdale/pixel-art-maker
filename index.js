
//generate black canvas of pixels
function generateBasePixels () {
    function generatePixelRow () {
        for (let i=0; i<100; i++) {
            let pixelGridSection = document.getElementById("pixel-grid");
            let pixelDiv = document.createElement('div');
            pixelDiv.className = 'pixel';
            pixelDiv.setAttribute
            pixelGridSection.appendChild(pixelDiv);
        }
    };
        for (let i=0; i<45; i++) {
        generatePixelRow(i);
        };
};
generateBasePixels();

//generate the currenlty selected color default 
function generateCurrentColor () {
    let SelectedColorOnPallete = document.getElementById("color-pallete-selection");
    let pixelDiv = document.createElement('div');
    let currentColorTextLable = document.createElement('h3');
    pixelDiv.className = 'colors';
    SelectedColorOnPallete.appendChild(pixelDiv); 
    SelectedColorOnPallete.getElementsByTagName("div")[0].style.backgroundColor = "white";
}
generateCurrentColor();


//generate pallete with no colors filled yet
function generateColorPallete (colorChoice) {
    for (let i=0; i<9; i++) {
        let sectionPallete = document.getElementById("pallete-section");
        let pixelDiv = document.createElement('div');
        pixelDiv.className = 'colors';
        sectionPallete.appendChild(pixelDiv);
    };
};
generateColorPallete();

//fill in colors. Left parameters to later add color selection edit by rgba user input

function setBaseColors(color1,color2,color3,color4,color5,color6,color7,color8) {
    let sectionPallete = document.getElementById("pallete-section");
        sectionPallete.getElementsByTagName("div")[0].style.backgroundColor = "blue";
        sectionPallete.getElementsByTagName("div")[1].style.backgroundColor = "red";
        sectionPallete.getElementsByTagName("div")[2].style.backgroundColor = "green";
        sectionPallete.getElementsByTagName("div")[3].style.backgroundColor = "yellow";
        sectionPallete.getElementsByTagName("div")[4].style.backgroundColor = "DeepPink";
        sectionPallete.getElementsByTagName("div")[5].style.backgroundColor = "DarkOrange";
        sectionPallete.getElementsByTagName("div")[6].style.backgroundColor = "brown";
        sectionPallete.getElementsByTagName("div")[7].style.backgroundColor = "black";
        sectionPallete.getElementsByTagName("div")[8].style.backgroundColor = "white";
};
setBaseColors();

//change selected color when color is clicked
document.getElementById("pallete-section").addEventListener("click", function setColor (event) {
    currentlySelectedColor = event.target.style.backgroundColor;
    let SelectedColorOnPallete = document.getElementById("color-pallete-selection");
    SelectedColorOnPallete.getElementsByTagName("div")[0].style.backgroundColor = currentlySelectedColor;
});

//paint individual pixels when clicked

let draggingStatus = false;
let currentlySelectedColor = "white";
document.getElementById("pixel-grid").addEventListener("click", function (event) {
    event.target.style.backgroundColor = currentlySelectedColor;
    draggingStatus = true; 
});

alert("Select a color from the pallete to begin paiting.");



//BONUS 1
//paint individual pixels when clicked and dragged over
// document.getElementById("pixel-grid").addEventListener("mousemove", function (event) {
//             if (draggingStatus) {
//             event.target.style.backgroundColor = currentlySelectedColor;
//         }    
// });

// document.getElementById("pixel-grid").addEventListener("mouseup", function (event) {
//     draggingStatus = false; 
//     event.target.style.backgroundColor = '';
//     console.log("mouseup");
//     console.log(draggingStatus);
// });