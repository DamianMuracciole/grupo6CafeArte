window.addEventListener('load', () => {
    let menuBar = document.getElementById('menuBar');
    let clase = document.querySelector('.mobile-display');
    let main = document.querySelector('main')
    let retardo = document.querySelector('.mobile-display-retardo')

    menuBar.addEventListener("click", ()=>{
        // console.log('%cMe hiciste click', "color:red");
        if (clase.style.display == 'inline-block') {
            clase.style.display = 'none';
            clase.classList.add('mobile-display-retardo')          
        }else{
            clase.style.display = 'inline-block'
            clase.classList.remove('mobile-display-retardo')
        }
    });

    main.addEventListener("click", ()=>{
        //console.log('%cMe hiciste click', "color:blue");
        clase.style.display = 'none';
    })

})