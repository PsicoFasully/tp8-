class Usuarios {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraeña = contraseña
    }
}

let usuarios = []

if (localStorage.getItem('usuarios')) {
    tareas = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const formUsers = document.getElementById("formUsers")
const divT = document.getElementById("divT")
const botonUsers = document.getElementById("botonUsers")
const contraseña = document.getElementById("idContraseña")

formUsers.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)



    let usuario = new Usuarios(datForm.get('nombre'), datForm.get('email'), datForm.get("contraseña"))
    usuarios.push(usuario)
    console.log(usuarios)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    formUsers.reset()
})

botonUsers.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('usuarios'))
    divT.innerHTML = ""
    arrayStorage.forEach((usuario, indice) => {

        divT.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${usuario.nombre}</h2></div>
            <div class="card-body">
                <p class="card-title">${usuario.email}</p>

                <button class = "btn btn-danger" > eliminar </button>
                
            </div>
        </div>
        
        `
    });

    arrayStorage.forEach((tarea, indice) => {
        let botonCard = document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild
        botonCard.addEventListener('click', () => {
            Swal.fire({
                title: 'desea eliminarlo?',
                text: "esto se eliminara!",
                icon: 'alerta',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'eliminarlo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById(`tarea${indice}`).remove()
                    tareas.splice(indice,1)
                    localStorage.setItem('tareas', JSON.stringify(tareas))
                    console.log(`${tarea.nombre} Eliminada`)
                    Swal.fire(
                        'eliminado!',
                        'ah sido eliminado.',
                        'success'
                    )
                }
            })
        })


    })










})
