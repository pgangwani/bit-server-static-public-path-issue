const dummy="dummy";
console.log(dummy);

function component() {
    const element = document.createElement('div');
    element.innerHTML = "Please access <code>/bit-dev</code> route to reproduce the issue";
    return element;
}
document.body.appendChild(component())