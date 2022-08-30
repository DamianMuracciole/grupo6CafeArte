//Validaciones del formulario de Usuario desde el Front-End
window.addEventListener('load', () => {
    //Capturas del formulario
    let first_name = document.getElementById('first_name');
    let last_name  = document.getElementById('last_name');
    let username   = document.getElementById('username');
    let email      = document.getElementById('email');
    let birth_date = document.getElementById('birth_date');
    let image      = document.getElementById('image');
    let password   = document.getElementById('password');
    let newPassword = document.getElementById('newPassword');
    let newRepassword = document.getElementById('newRepassword');
    //let rol        = document.getElementById('rol');
    let submit     = document.getElementById('submit');
    let changePassword = document.getElementById('changePassword')
    
    //Clases para textos de Errores
    let err_first_name = document.querySelector('.err_first_name');
    let err_last_name  = document.querySelector('.err_last_name');
    let err_username   = document.querySelector('.err_username');
    let err_email      = document.querySelector('.err_email');
    let err_birth_date = document.querySelector('.err_birth_date');
    let err_image = document.querySelector('.err_image');
    let err_password   = document.querySelector('.err_password');
    let err_newPassword = document.querySelector('.err_newPassword');
    let err_newRepassword = document.querySelector('.err_newRepassword');
    //let err_rol = document.querySelector('.err_rol');

    //definicion del objeto errores y constantes 
    const msgInicial = 'Campo Obligatorio'
    const nameMinLength = 2;
    const passwordMinLength = 8;
    let errores = {
        // first_name: msgInicial,
        // last_name: msgInicial,
        // username:msgInicial,
        // email:msgInicial,
        // birth_date:msgInicial,
        // image:msgInicial,
        // password:msgInicial,
        // newPassword:msgInicial,
        // newRepassword:msgInicial
        };

    //Evalua condicion de error de first_name
    first_name.addEventListener('blur', function(){
        if(first_name.value.length == 0){
            errores.first_name = 'Debe escribir un nombre';
        }else if(first_name.value.length < nameMinLength){
            errores.first_name = 'El nombre debe tener un mínimo de ' + nameMinLength + ' caracteres';
        }else if(first_name.value.charAt(0) == ' ' || first_name.value.charAt(1) == ' '){
            errores.first_name = 'No se admite dos espacios al principio';
        }else{
            delete errores.first_name;
        };
        //Agrega texto de error correspondiente
        err_first_name.innerHTML  = (errores.first_name)  ? errores.first_name  : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.first_name  ? first_name.classList.add('is-invalid') : first_name.classList.remove('is-invalid');
    });

    //Evalua condicion de error de last_name
    last_name.addEventListener('blur', function(){
        if(last_name.value.length == 0){
            errores.last_name = 'Debe escribir un apellido';
        }else if(last_name.value.length < nameMinLength){
            errores.last_name = 'El apellido debe tener un mínimo de ' + nameMinLength + ' caracteres';
        }else if(last_name.value.charAt(0) == ' ' || last_name.value.charAt(1) == ' '){
            errores.last_name = 'No se admite dos espacios al principio';
        }else{
            delete errores.last_name;
        };
        //Agrega texto de error correspondiente
        err_last_name.innerHTML  = (errores.last_name)  ? errores.last_name  : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.last_name  ? last_name.classList.add('is-invalid') : last_name.classList.remove('is-invalid');
    });

    //Evalua condicion de error de username
    username.addEventListener('blur', function(){
        if(username.value.length <= 0){
            errores.username = 'Debe escribir un nombre de Usuari@';
        }else{
            delete errores.username;
        };
        //Agrega texto de error correspondiente
        err_username.innerHTML = (errores.username)   ? errores.username   : '';
        errores.username   ? username.classList.add('is-invalid')  : username.classList.remove('is-invalid');
    });

    //Evalua condicion de error de email
    email.addEventListener('blur', function(){
        if(email.value.length <= 0){
            errores.email = 'Debe escribir un email';
        }else{
            //comparo le que viene escrito en el campo email con la siguiente expresion regular
            //esta misma la saqué de internet y probé su funcionamiento pero no sabría como hacerla 
            let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!emailRegex.test(email.value)) {
                errores.email = 'Debe ser un formato de correo electrónico válido';
            }else{
                delete errores.email;
            };
        };
        //Agrega texto de error correspondiente
        err_email.innerHTML      = (errores.email)      ? errores.email      : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.email      ? email.classList.add('is-invalid')     : email.classList.remove('is-invalid');
    });
    //Evalua condicion de error de Birth_date
    birth_date.addEventListener('blur', function(){
        if(!birth_date.value.length){
            errores.birth_date = 'Este campo debe estar completo';
        }else{
            delete errores.birth_date;
        };
        //Agrega texto de error correspondiente
        err_birth_date.innerHTML = (errores.birth_date) ? errores.birth_date : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.birth_date ? birth_date.classList.add('is-invalid'): birth_date.classList.remove('is-invalid');
    });
    
    //Evalua condicion de error de la imagen
    image.addEventListener('change', function(){
        if(image.value.length <= 0){
            errores.image = 'Debe ingresar una imagen';
        }else if (!image.value.includes('.')) {
            errores.image = 'Archivo no válido';
        }else{
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let nombre = image.value.split('.');
            let extension = '.' + nombre[nombre.length-1].toLowerCase();
            if (!acceptedExtensions.includes(extension)){
                errores.image = `Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`;
            }else{
                delete errores.image;
            };
        };
        //Agrega texto de error correspondiente
        err_image.innerHTML      = (errores.image)      ? errores.image      : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.image      ? image.classList.add('is-invalid')     : image.classList.remove('is-invalid');
    });

    //Evalua el checkbox changePassword
    changePassword.addEventListener('click',()=>{
        if (changePassword.checked){
            //habilito campo
            password.removeAttribute("readonly",false)
            newPassword.removeAttribute("readonly",false)
            newRepassword.removeAttribute("readonly",false)
            // Cargo errores de mensaje inicial
            errores.password = msgInicial,
            errores.newPassword = msgInicial,
            errores.newRepassword = msgInicial
        }else{
            password.setAttribute('readonly',true)
            newPassword.setAttribute('readonly',true)
            newRepassword.setAttribute('readonly',true)
            //borro valores ingresados
            password.value = '';
            newPassword.value = '';
            newRepassword.value = '';
            //borro errores
            delete errores.password;
            delete errores.newPassword;
            delete errores.newRepassword;
            //borro carteles
            err_password.innerHTML = '';
            err_newPassword.innerHTML = '';
            err_newRepassword.innerHTML = '';
            //borro fondo
            password.classList.remove('is-invalid');
            newPassword.classList.remove('is-invalid');
            newRepassword.classList.remove('is-invalid');
        }
    })
    
    //Evalua condicion de error de password
    password.addEventListener('blur', function(){
        if(changePassword.checked){
            if(password.value.length < passwordMinLength){
                errores.password = 'Este campo necesita de ' + passwordMinLength + ' caracteres mínimo';
            }else{
                delete errores.password;
            };
            //Agrega texto de error correspondiente
            err_password.innerHTML   = (errores.password)   ? errores.password   : '';
            //Cambia el background y da estilo de los campos si ha error en los mismos
            errores.password   ? password.classList.add('is-invalid')  : password.classList.remove('is-invalid')
        }
    });

    //Evalua condicion de error de newPassword
    newPassword.addEventListener('blur', function(){
        if(changePassword.checked){
            if(newPassword.value.length < passwordMinLength){
                errores.newPassword = 'Este campo necesita de ' + passwordMinLength + ' caracteres mínimo';
            }else if (newPassword.value.length >= passwordMinLength && newRepassword.value.length >= passwordMinLength){
                if (newPassword.value !== newRepassword.value){
                    errores.newPassword = 'Las contraseñas no son iguales';

                }else{
                    delete errores.newPassword;
                    delete errores.newRepassword;
                    err_newRepassword.innerHTML = (errores.newRepassword) ? errores.newRepassword : '';
                    errores.newRepassword ? newRepassword.classList.add('is-invalid'): newRepassword.classList.remove('is-invalid');
                }
            }else{
                delete errores.newPassword;
            };
            //Agrega texto de error correspondiente
            err_newPassword.innerHTML   = (errores.newPassword)   ? errores.newPassword   : '';
            //Cambia el background y da estilo de los campos si ha error en los mismos
            errores.newPassword   ? newPassword.classList.add('is-invalid')  : newPassword.classList.remove('is-invalid')
        }
    });

    //Evalua condicion de error de newRepassword
    newRepassword.addEventListener('blur', function(){
        if(changePassword.checked){
            if(newRepassword.value.length < passwordMinLength){
                errores.newRepassword = 'Este campo necesita de ' + passwordMinLength + ' caracteres mínimo';
            }else if (newPassword.value.length >= passwordMinLength && newRepassword.value.length >= passwordMinLength){
                if (newPassword.value !== newRepassword.value){
                    errores.newRepassword = 'Las contraseñas no son iguales';
                }else{
                    delete errores.newPassword;
                    delete errores.newRepassword;
                    err_newPassword.innerHTML = (errores.newPassword) ? errores.newPassword : '';
                    errores.newPassword ? newPassword.classList.add('is-invalid'): newPassword.classList.remove('is-invalid');
                }
            }else{
                
                delete errores.newRepassword;
            };
            //Agrega texto de error correspondiente
            err_newRepassword.innerHTML = (errores.newRepassword) ? errores.newRepassword : '';
            //Cambia el background y da estilo de los campos si ha error en los mismos
            errores.newRepassword ? newRepassword.classList.add('is-invalid'): newRepassword.classList.remove('is-invalid');
        }
    });

    //Evalua condicion de igualdad entre newPassword y newRepassword
    if (newPassword.value.length >= passwordMinLength && newRepassword.value.length >= passwordMinLength){
        if (newPassword.value !== newRepassword.value){
        errores.newPassword = 'Las contraseñas no son iguales';
        errores.newRepassword = 'Las contraseñas no son iguales';
        newPassword.value = '';
        newRepassword.value = '';
        //Agrega texto de error correspondiente
        err_newPassword.innerHTML   = (errores.newPassword)   ? errores.newPassword   : '';
        err_newRepassword.innerHTML = (errores.newRepassword) ? errores.newRepassword : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.newPassword   ? newPassword.classList.add('is-invalid')  : newPassword.classList.remove('is-invalid');
        errores.newRepassword ? newRepassword.classList.add('is-invalid'): newRepassword.classList.remove('is-invalid');
        };
    };

    
    
    submit.addEventListener('click', function(e){
        //Agrega texto de error correspondiente cuando envía el formulario        
        if(Object.keys(errores).length >= 1){
            e.preventDefault();
            err_first_name.innerHTML = (errores.first_name) ? errores.first_name  : '';
            err_last_name.innerHTML  = (errores.last_name)  ? errores.last_name  : '';
            err_username.innerHTML   = (errores.username)   ? errores.username   : '';
            err_email.innerHTML      = (errores.email)      ? errores.email   : '';
            err_birth_date.innerHTML = (errores.birth_date) ? errores.birth_date : '';
            err_image.innerHTML      = (errores.image)      ? errores.image      : '';
            err_password.innerHTML   = (errores.password)   ? errores.password   : '';
            err_newPassword.innerHTML= (errores.newPassword) ? errores.newPassword   : '';
            err_newRepassword.innerHTML = (errores.newRepassword) ? errores.newRepassword   : '';
        }
    })

})

