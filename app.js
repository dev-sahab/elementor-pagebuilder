
const switcher = document.getElementById('switcher');
const editorPanel = document.getElementById('editor-panel');
const icon = document.querySelector('.icon')

switcher.onclick = () => {
    editorPanel.classList.toggle('remove');
    icon.classList.toggle('rotate');
}