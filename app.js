
const switcher = document.getElementById('switcher');
const editorPanel = document.getElementById('editor-panel');
const icon = document.querySelector('.icon')
const eidtorBody = document.getElementById('eidtor-body');

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
const hColor = document.querySelector('#heading-editor #color');
const hFontFamily = document.querySelector('#heading-editor #font-family');

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

hFontFamily.onchange = () => {
    headingOutput.style.fontFamily = hFontFamily.value;
}





//scrollbar for chrome
const isChrome = !!window.chrome;

const scrollbarVisible = (element) => {
    return element.scrollHeight > element.clientHeight;
}

if (scrollbarVisible(eidtorBody) == true && isChrome == true
) {
    eidtorBody.classList.add('scroll');
}else{
    eidtorBody.classList.remove('scroll');
}

console.log(isChrome);