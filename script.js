function writeToDisplay(data){
    document.querySelector ('#display').value += data
}

function clean (){
    document.querySelector('#display').value = ''
 }

 function del(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
 }

 function result(){
    const display = document.querySelector('#display')
    try{
        display.value = eval(display.value).toFixed(4)
            } catch {

            }
 }