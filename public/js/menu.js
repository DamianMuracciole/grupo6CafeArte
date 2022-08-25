window.addEventListener('load', () => {

    let menuBar = document.getElementById('menuBar');
    let clase = document.querySelector('.mobile-display');
    let main = document.querySelector('main')

    menuBar.addEventListener("click", ()=>{
        console.log('%cMe hiciste click', "color:red");
        if (clase.style.display == 'inline-block') {
            clase.style.display = 'none'
        }else{
            clase.style.display = 'inline-block'
        }
    });

    main.addEventListener("click", ()=>{
        console.log('%cMe hiciste click', "color:blue");
        clase.style.display = 'none';
    })

})