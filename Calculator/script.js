let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsarray = Array.from(buttons);
buttonsarray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{ 
        display.value = display.value +e.target.innerHTML;
        console.log(e.target.innerHTML);
    })
})