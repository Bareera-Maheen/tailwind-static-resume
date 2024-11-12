"use strict";
function mybutton() {
    alert('button clicked');
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mybutton');
    if (button) {
        button.addEventListener('click', mybutton);
    }
});
