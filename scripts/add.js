 document.querySelector("#add-time")
 .addEventListener("Click",cloneField())



 function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ""
    });
    //Teste
    
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
 }