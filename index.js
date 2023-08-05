let area = document.querySelectorAll('#area-name')

let areaInput = document.querySelector('#location')

let areaForm = document.querySelector('#location-input')


areaForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let val = areaInput.value
    val = val.charAt(0).toUpperCase() + val.slice(1);

    for(let i =0 ;i<area.length;i++){
        area[i].innerText=val
    }

    areaInput.value=''
    
})


