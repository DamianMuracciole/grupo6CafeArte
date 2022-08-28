window.onload = function() {

    console.log("ppprobando que el archivo este bien linkeado");

    let nombreProducto = document.querySelector("#nombre");
    let descripcion = document.querySelector("#detalle");
    let imagen = document.getElementById("imagen");
    let formElement = document.querySelector(".form-element");
    let p = document.querySelector("#error")
    let pd = document.querySelector("#errorDetalle")
    let pi = document.querySelector("#errorImage")
    
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
        }
    }) // de la function y del blur   

    
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