
const switcher = document.getElementById('switcher');
const editorPanel = document.getElementById('editor-panel');
const icon = document.querySelector('.icon')

switcher.onclick = () => {
    editorPanel.classList.toggle('remove');
    icon.classList.toggle('rotate');
}


// get heading elements
const headingInput =  document.getElementById('heading-input');
const headingOutput =  document.getElementById('heading-output');
const hAlignment = document.querySelectorAll('#heading-editor #alignment input')
const hfontWeight = document.querySelector('#heading-editor #font-weight')
const hfontSize = document.querySelector('#heading-editor #font-size')
const hColor = document.querySelector('#heading-editor #color')

headingInput.onkeyup = () => {
    
    if(headingInput.value == ""){
        headingOutput.innerHTML = 'Add Your Heading Text Here'
    }
    else{
        headingOutput.innerHTML = headingInput.value
    }
    
}

hAlignment.forEach(item => {
    
    item.onchange = () => {
        headingOutput.style.textAlign = item.value
    }

});

hfontWeight.onchange = () => {
    headingOutput.style.fontWeight = hfontWeight.value;
}

headingOutput.style.fontSize = "30px"


hfontSize.oninput = () => {
    headingOutput.style.fontSize = hfontSize.value + 'px';
}

hColor.oninput = () => {
    headingOutput.style.color = hColor.value;
}
console.log(hColor.value);