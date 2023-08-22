const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        /** funcionalidad del boton c, borra todo con un click */
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        /** funcionalidad del boton borrar, borra el ultimo digito**/
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        /**Este hace la operacion de strings */
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }
            return;
        }

        /** Con esto cambiamos el valor de 0 a el valor que deseamos **/
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
})
