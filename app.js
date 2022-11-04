document.getElementById('updateval1').innerText = document.getElementById('red').value;
document.getElementById('updateval2').innerText = document.getElementById('green').value;
document.getElementById('updateval3').innerText = document.getElementById('blue').value;

function ColourElement() {

    var updateval1 = document.getElementById('updateval1');
    var updateval2 = document.getElementById('updateval2');
    var updateval3 = document.getElementById('updateval3');

    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;

    updateval1.innerText = red;
    updateval2.innerText = green;
    updateval3.innerText = blue;

    var colour = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('hexColor').innerText = `#${rgbToHex(red, green, blue)}`;

    // document.body.style.background = `${colour}`;
    var colour_box = document.getElementById('colourBox');
    var colour_text = document.getElementById('color');

    colour_box.style.backgroundColor = `${colour}`;

    colour_text.innerText = `${colour}`;
}

function copyText() {
    var elementData = document.getElementById('color').innerText;
    document.getElementById('color').innerText = 'copied...';
    navigator.clipboard.writeText(elementData);
    setTimeout(function () {
        document.getElementById('color').innerText = elementData;
    }, 2000);
}
function hexcopyText() {
    var elementData = document.getElementById('hexColor').innerText;
    document.getElementById('hexColor').innerText = 'copied...';
    navigator.clipboard.writeText(elementData);
    setTimeout(function () {
        document.getElementById('hexColor').innerText = elementData;
    }, 2000);
}

function valueToHex(c) {
    c = parseInt(c);
    var hex = c.toString(16);
    // console.log(hex)
    return hex;
}

function rgbToHex(r, g, b) {
    // console.log(valueToHex(r) + valueToHex(g) + valueToHex(b))
    return (valueToHex(r) + valueToHex(g) + valueToHex(b));
}


document.getElementById('red')
    .addEventListener('input', ColourElement);


document.getElementById('green')
    .addEventListener('input', ColourElement);


document.getElementById('blue')
    .addEventListener('input', ColourElement);

document.getElementById('color')
    .addEventListener('click', copyText);

document.getElementById('hexColor')
    .addEventListener('click', hexcopyText);