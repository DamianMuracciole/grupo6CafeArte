window.addEventListener('load', () => {
    let nombre = document.getElementById('nombre');
    let peso = document.getElementById('peso');
    let detalle = document.getElementById('detalle');
    let precio = document.getElementById('precio');
    let cantidad = document.getElementById('cantidad');
    let imagen = document.getElementById("imagenes");
    let pi = document.querySelector("#errorImage")
  

    let submit     = document.getElementById('submit');

    //Clases para textos de Errores
    let err_nombre = document.querySelector('.err_nombre');
    let err_peso = document.querySelector('.err_peso');
    let err_detalle = document.querySelector('.err_detalle');
    let err_precio = document.querySelector('.err_precio');
    let err_cantidad = document.querySelector('.err_cantidad');
    let err_image = document.querySelector('.err_image');
   

     //definicion del objeto errores y constantes 
     const msgInicial = ''

     let errores = {
         nombre: msgInicial,
         peso: msgInicial,
         detalle: msgInicial,
         precio: msgInicial,
         cantidad:  msgInicial,
       
         };
     
         //Evalua condicion de error en el nombre
    nombre.addEventListener('blur', function(){
       
        if(nombre.value.length == 0){
            errores.nombre = "El campo nombre de Producto no puede estar vacio.";
        } else if(nombre.value.length <5) {
            errores.nombre = "El campo nombre de Producto tiene que tener al menos 5 letras."
        } else {
            delete errores.nombre;
        };
        //Agrega texto de error correspondiente
        err_nombre.innerHTML  = (errores.nombre)  ? errores.nombre  : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.nombre  ? nombre.classList.add('is-invalid') : nombre.classList.remove('is-invalid');
    
    })
    

    detalle.addEventListener("blur", function(){
        if(detalle.value.length == 0){
            errores.detalle ="El campo de la descripcion del producto no puede estar vacio."
        }else if(detalle.value.length <20) {
            errores.detalle = "El campo de la descripcion del Producto debe que tener al menos 20 caracteres."
        } else{
            delete errores.detalle;
        };
        //Agrega texto de error correspondiente
        err_detalle.innerHTML  = (errores.detalle)  ? errores.detalle  : '';
        //Cambia el background y da estilo de los campos si ha error en los mismos
        errores.detalle  ? detalle.classList.add('is-invalid') : detalle.classList.remove('is-invalid');
    });
   

    // validaciones no requeridas 
    peso.addEventListener("blur", function(){
        if(peso.value == 0){
            errores.peso = "El campo de peso del producto no puede estar vacio."
        }else{
            delete errores.peso;
        };
       
        err_peso.innerHTML  = (errores.peso)  ? errores.peso  : '';
        errores.peso  ? peso.classList.add('is-invalid') : peso.classList.remove('is-invalid');
    })

    precio.addEventListener("blur", function(){
        if(precio.value == 0){
            errores.precio = "El campo de la descripcion del producto no puede estar vacio."
        }else{
            delete errores.precio;
        };
       
        err_precio.innerHTML  = (errores.precio)  ? errores.precio  : '';
        errores.precio  ? precio.classList.add('is-invalid') : precio.classList.remove('is-invalid');
    })

    cantidad.addEventListener("blur", function(){
        if(cantidad.value == ""){
            errores.cantidad = "El campo de la cantidad del producto no puede estar vacio."
        } else if(cantidad.value == 0){
            errores.cantidad = "El campo de la cantidad del producto no puede ser 0."
        }
        else{
            delete errores.cantidad;
        };
      
        err_cantidad.innerHTML  = (errores.cantidad)  ? errores.cantidad  : '';
        errores.cantidad  ? cantidad.classList.add('is-invalid') : cantidad.classList.remove('is-invalid');
    })

    imagen.addEventListener("change", e => {
        // When the control has changed, there are new files
        let files = imagen.files
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        let element  = e.srcElement
        for (var i = 0; i < files.length; i++) {
            let fileName = files[i].name
            let fileExtension = "." + fileName.split(".")[1].toLocaleLowerCase()
            console.log("Filename: " + fileName);
            console.log("File ext: " + fileExtension)

            if (!files.length) {
                element.classList.add("is-invalid");
                pi.innerHTML = "Debe subir una imagen del producto.";
                pi.classList.add("error")   
            } else if(!acceptedExtensions.includes(fileExtension)){
                element.classList.add("is-invalid");
                pi.innerHTML = `Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`;
                pi.classList.add("error")   
            } else {
                element.classList.remove("is-invalid")
                element.classList.add("is-valid");
                pi.innerHTML = ""
            }

            
        }
    }, false);
    
    console.log(cantidad.innerHTML)
    
    // submit.addEventListener('click', function(e){
    //     console.log(errores)
          
    //     //Agrega texto de error correspondiente cuando envía el formulario 
    //     if(Object.keys(errores).length >= 1){
    //         console.log(Object.keys(errores).length)
    //         e.preventDefault();
    //         err_nombre.innerHTML = (errores.nombre) ? errores.nombre  : '';
    //         err_peso.innerHTML  = (errores.peso)  ? errores.peso  : '';
    //         err_detalle.innerHTML   = (errores.detalle)   ? errores.detalle   : '';
    //         err_precio.innerHTML      = (errores.precio)      ? errores.precio   : '';
    //         err_cantidad.innerHTML = (errores.cantidad) ? errores.cantidad : '';
           
           
    //     }
    // })


})