window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formBody");

    formulario.addEventListener('submint', function (e){
        e.preventDefault();

        let campoEmail= document.querySelector('input.email');

        if (campoEmail.value == ""){

            alert("el campo de email tiene que estar completo")
        }

    })


})


 







