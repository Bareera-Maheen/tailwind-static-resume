function mybutton(){
    alert('button clicked');
}
document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.getElementById('mybutton') as HTMLButtonElement;
    if (button){
        button.addEventListener('click', mybutton)
    }
})
