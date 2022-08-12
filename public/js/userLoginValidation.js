
    const formulario = document.getElementById("formulario");
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones ={
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,
        password: /^.{5,12}$/
    }

    const validarFormulario = (e) =>{
       switch(e.target.name){

        case "email":
            if (expresiones.email.test(e.target.value)){
                document.getElementById('email').classList.remove('invalid');
                document.getElementById('email').classList.add('valid');
            }else{
                document.getElementById('email').classList.add('invalid');
            }
        break;

        case "password":
            if (expresiones.password.test(e.target.value)){
                document.getElementById('password').classList.remove('invalid');
                document.getElementById('password').classList.add('valid');
               
            }else{
                document.getElementById('password').classList.add('invalid');
                
            }
        
        break;
       }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    // formulario.addEventListener('submit', (e) =>{
    //     e.preventDefault();


    // })

