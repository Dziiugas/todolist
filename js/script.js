document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const li=document.createElement ('li');
    const darbas=document.querySelector ('.input').value
    const tekstas=document.querySelector('ul').appendChild(li)
    tekstas.textContent=darbas
});
    
    document.getElementById('remove').addEventListener('click', ()=>{
    const ul = document .querySelector ('ul');
    if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
}});