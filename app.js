
const switcher = document.getElementById('switcher');
const editorPanel = document.getElementById('editor-panel');
const icon = document.querySelector('.swicher-icon')
const eidtorBody = document.getElementById('eidtor-body');

const emptySec = document.getElementById('empty-sec');

switcher.onclick = () => {
    editorPanel.classList.toggle('remove');
    icon.classList.toggle('rotate');
}


// get heading elements
const headingInput =  document.getElementById('heading-input');
// const headingOutput =  document.getElementById('heading-output');
const hAlignment = document.querySelectorAll('#heading-editor #alignment input')
const hfontWeight = document.querySelector('#heading-editor #font-weight')
const hfontSize = document.querySelector('#heading-editor #font-size')
const hColor = document.querySelector('#heading-editor #color');
const hFontFamily = document.querySelector('#heading-editor #font-family');
const heading = document.querySelector('.heading')
const headingElement = document.getElementById('heading-element');

const editorOptions = document.getElementById('editor-options');
const toolLists = document.querySelectorAll('.tool-lists');


editorOptions.style.display = 'none';

// create custom h2 dom
let headingOutput = '';
headingElement.onclick = () => {

    
    headingOutput = document.createElement('h2');

    const headingText = document.createTextNode('Add Your Heading Text Here');
    headingOutput.append(headingText);
    heading.appendChild(headingOutput);

    headingOutput.style.fontSize = "30px"

    toolLists.forEach( item => {
        item.style.display = 'none';
    })

    editorOptions.style.display = 'block';
    editorOptions.style.marginTop = '20px';

    emptySec.style.display = 'none';

}



// if heading value will empty then show some text
headingInput.onkeyup = () => {
    
    if(headingInput.value == ""){
        headingOutput.innerHTML = 'Add Your Heading Text Here'
    }
    else{
        headingOutput.innerHTML = headingInput.value
    }
    
}

// heading Alignment
hAlignment.forEach(item => {
    
    item.onchange = () => {
        headingOutput.style.textAlign = item.value
    }

});

// Heading Font Weight
hfontWeight.onchange = () => {
    headingOutput.style.fontWeight = hfontWeight.value;
}

// Heading Font Size
hfontSize.oninput = () => {
    headingOutput.style.fontSize = hfontSize.value + 'px';
}

// Heading color
hColor.oninput = () => {
    headingOutput.style.color = hColor.value;
}

//Heading font-family
hFontFamily.onchange = () => {
    headingOutput.style.fontFamily = hFontFamily.value;
}




//scrollbar for chrome
const isChrome = !!window.chrome;

const scrollbarVisible = (element) => {
    return element.scrollHeight > element.clientHeight;
}

toolLists.forEach( item => {
    item.onclick = () => {
        if (scrollbarVisible(eidtorBody) == true && isChrome == true) {
            eidtorBody.classList.add('scroll');
        }else{
            eidtorBody.classList.remove('scroll');
        }
    }
})
eidtorBody.onmouseenter = () => {
    if (scrollbarVisible(eidtorBody) == true && isChrome == true) {
        eidtorBody.classList.add('scroll');
    }else{
        eidtorBody.classList.remove('scroll');
    }
}





// if click on grid icon then tool list will show and editor options will hide
const elementGrid = document.querySelector('.grid-icon')


elementGrid.onclick = () => {

    toolLists.forEach( item => {
        item.style.display = 'grid';
    });

    editorOptions.style.display = 'none';
    
}