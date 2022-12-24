function init() {
    
    //le damos funcionalidad al botón, en el momento que se le clica ejecutará la función para crear un LI nuevo con el contenido del INPUT
    document.querySelector(".btn-add").addEventListener("click", storeInput);


    function storeInput(){

    //prevenimos que la página se recargue al pulsar el botón
        document.body.querySelector(".btn-add").setAttribute("type","button");

    //prevenimos que la página se recargue al pulsar el INTRO en el INPUT TEXT
        //! no lo logro hacer

    //capturamos lo que se contiene en el INPUT y lo ponemos en variable
        const inputValue = document.querySelector("input[type=text]").value;
        console.log(inputValue);

    //creamos un elemento LI con el contenido que haya dentro del INPUT
        if (!inputValue){
            return alert("¡¡ Inserta una tarea válida !! ");
        } else {


    //creamos los elementos a introducir como lista        
            const listElement = document.createElement("li");
            const element = document.createElement("p");
            const buttonDelete = document.createElement("button");



    //damos contenido a la tarea antes de introducirla en el HTML        
            element.textContent = inputValue;   

    //insertamos los elementos en el HTML        
            listElement.appendChild(element);
            listElement.appendChild(buttonDelete);
            document.body.querySelector("ul").appendChild(listElement);

    //creamos el botón para eliminar tarea
            buttonDelete.setAttribute("class","btn-delete");
            buttonDelete.textContent = "X";

            function deleteTask(evento) {
                evento.target.parentElement.remove();
                const tasks = document.querySelector("li");

                if(!tasks){
                    document.querySelector("div.empty").setAttribute("style","visibility: visible");
                };
            }

            buttonDelete.addEventListener("click", deleteTask);

    //eliminamos la frase ALL TASKS ARE COMPLETED si hay tareas pendientes
            const tasks = document.querySelector("li");

            if(tasks){
                document.querySelector("div.empty").setAttribute("style","visibility: hidden");
            } else { 
                document.querySelector("div.empty").setAttribute("style","visibility: visible");
            };

        }
    };


};

window.onload = init;