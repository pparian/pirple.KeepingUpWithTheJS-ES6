
const listEventListener = document.getElementsByClassName('list_');

document.addEventListener("mouseup",(event)=>{
    event.preventDefault;
    // console.log(event.target);
    if (event.target.id === 'test_list') {
        console.log(event.target);
    }
        
});