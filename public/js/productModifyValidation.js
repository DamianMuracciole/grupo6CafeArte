window.onload = function() {

    console.log("ppprobando que el archivo este bien linkeado");

    let nombreProducto = document.querySelector("#nombre");
    let descripcion = document.querySelector("#detalle");
    let imagen = document.getElementById("imagenes");
    let peso = document.getElementById("peso")
    let precio = document.getElementById("precio")
    let cantidad = document.getElementById("cantidad")
    let formElement = document.querySelector(".form-element");
    let p = document.querySelector("#error")
    let pd = document.querySelector("#errorDetalle")
    let pi = document.querySelector("#errorImage")
    let pp = document.querySelector("#errorPeso")
    let pprecio = document.querySelector("#errorPrecio")
    let pcantidad = document.querySelector("#errorCantidad")

    let backErrorname = document.getElementById("backErrorname")
    let backErrorDetalle = document.getElementById("backErrorDetalle")
    let backErrorPeso = document.getElementById("backErrorPeso")
    let backErrorPrecio = document.getElementById("backErrorPrecio")
    let backErrorCantidad = document.getElementById("backErrorCantidad")

    nombreProducto.addEventListener("blur", e =>  {
        let element  = e.srcElement
        
        
        if(element.value === "") {
            element.classList.add("is-invalid");
            p.innerHTML = "El campo nombre de Producto no puede estar vacio.";    
            p.classList.add("error")           
        } else if(element.value.length < 5) {
            element.classList.add("is-invalid");
            p.innerHTML = "El campo nombre de Producto tiene que tener al menos 5 letras.";
            p.classList.add("error")   
        } else {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
            p.innerHTML = ""
            backErrorname.style.display = "none"
        }

        if (p.innerHTML != ""){
            backErrorname.parentNode.removeChild(backErrorname)
        } 
    }) // de la function y del blur

    descripcion.addEventListener("blur", e =>  {
        let element  = e.srcElement
        
        if(element.value === "") {
            element.classList.add("is-invalid");
            pd.innerHTML = "El campo de la descripcion del producto no puede estar vacio.";
            pd.classList.add("error")            
        } else if(element.value.length < 20) {
            element.classList.add("is-invalid");
            pd.innerHTML = "El campo de la descripción del producto tiene que tener al menos 20 letras.";
            pd.classList.add("error")  
        } else {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
            pd.innerHTML = ""
            backErrorDetalle.style.display = "none"
        }
        if (pd.innerHTML != ""){
            backErrorDetalle.parentNode.removeChild(backErrorDetalle)
        }

    }) // de la function y del blur   

    peso.addEventListener("blur", e => {
        let element  = e.srcElement
        
        if(element.value === "") {
            element.classList.add("is-invalid");
            pp.innerHTML = "El campo del peso del producto no puede estar vacio.";
            pp.classList.add("error")            
        } else if(element.value == 0) {
            element.classList.add("is-invalid");
            pp.innerHTML = "El campo del peso del producto no puede ser 0.";
            pp.classList.add("error")  
        } else {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
            pp.innerHTML = "" 
            backErrorPeso.style.display = "none"      
        }
        if (pp.innerHTML != ""){
            backErrorPeso.parentNode.removeChild(backErrorPeso)
        }
     
    })
    
    precio.addEventListener("blur", e => {
        let element  = e.srcElement
        
        if(element.value === "") {
            element.classList.add("is-invalid");
            pprecio.innerHTML = "El precio del producto no puede estar vacio.";
            pprecio.classList.add("error")            
        } else if(element.value == 0) {
            element.classList.add("is-invalid");
            pprecio.innerHTML = "El  precio del producto no puede ser 0.";
            pprecio.classList.add("error")  
        } else {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
            pprecio.innerHTML = ""
            backErrorPrecio.style.display = "none"  
        }
        if (pprecio.innerHTML != ""){
            backErrorPrecio.parentNode.removeChild(backErrorPrecio)
        }
    })

    cantidad.addEventListener("blur", e => {
        let element  = e.srcElement
        
        if(element.value === "") {
            element.classList.add("is-invalid");
            pcantidad.innerHTML = "La cantidad del producto no puede estar vacio.";
            pcantidad.classList.add("error")            
        } else if(element.value == 0) {
            element.classList.add("is-invalid");
            pcantidad.innerHTML = "La cantidad del producto no puede ser 0.";
            pcantidad.classList.add("error")  
        } else {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
            pcantidad.innerHTML = ""
            backErrorCantidad.style.display = "none"  
        }
        if (pcantidad.innerHTML != ""){
            backErrorCantidad.parentNode.removeChild(backErrorCantidad)
        }
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
                pd.innerHTML = ""
            }

            
        }
    }, false);

    // body('image').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        
    //     if(!file){
    //         throw new Error('Tienes que subir una imagen')
    //     } else { //cuando me envien un archivo (sino me sale un error porque al principio no viene nada, entonces ahi si pregunto lo de las extensiones)
    //         let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
    //         if(!acceptedExtensions.includes(fileExtension)) {
    //             throw new Error(`Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`)
    //         }
    //     }
    //     return true;
    // })

    




} // del onload