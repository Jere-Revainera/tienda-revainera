const productos = [
    {
        "nombre":"Comida 1",
        "precio":"2000",
        "id":"comida-chico-baby",
        "img":"../img/pequeños/pequeño-baby.png",
        "tamanio":"chico",
        "edad":"Baby",
        "descripcion":"Comida para perros pequeños de hasta 4 meses de edad"
    },
    {
        "nombre":"Comida 2",
        "precio":"2500",
        "id":"comida-chico-puppy",
        "img":"../img/pequeños/pequeño-puppy.png",
        "tamanio":"chico",
        "edad":"puppy",
        "descripcion":"Comida para perros pequeños de 4 a 12 meses de edad"
    },
    {
        "nombre":"Comida 3",
        "precio":"3000",
        "id":"comida-chico-adult",
        "img":"../img/pequeños/pequeño-adulto.png",
        "tamanio":"chico",
        "edad":"adulto",
        "descripcion":"Comida para perros pequeños de 1 a 7 años"
    },
    {
        "nombre":"Comida 4",
        "precio":"4000",
        "id":"comida-chico-senior",
        "img":"../img/pequeños/pequeño-senior.png",
        "tamanio":"chico",
        "edad":"senior",
        "descripcion":"Comida para perros pequeños con mas de 8 años"
    },
    {
        "nombre":"Comida 5",
        "precio":"2500",
        "id":"comida-mediano-baby",
        "img":"../img/medianos/mediano-baby.png",
        "tamanio":"mediano",
        "edad":"Baby",
        "descripcion":"Comida para perros medianos de hasta 4 meses de edad"
    },
    {
        "nombre":"Comida 6",
        "precio":"3500",
        "id":"comida-mediano-puppy",
        "img":"../img/medianos/mediano-puppy.png",
        "tamanio":"mediano",
        "edad":"puppy",
        "descripcion":"Comida para perros medianos de 4 a 12 meses de edad"
    },
    {
        "nombre":"Comida 7",
        "precio":"5000",
        "id":"comida-mediano-adult",
        "img":"../img/medianos/mediano-adulto.png",
        "tamanio":"mediano",
        "edad":"adulto",
        "descripcion":"Comida para perros medianos de 1 a 7 años"
    },
    {
        "nombre":"Comida 8",
        "precio":"6000",
        "id":"comida-mediano-senior",
        "img":"../img/medianos/mediano-senior.png",
        "tamanio":"mediano",
        "edad":"senior",
        "descripcion":"Comida para perros medianos con mas de 8 años"
    },
    {
        "nombre":"Comida 9",
        "precio":"5000",
        "id":"comida-grande-baby",
        "img":"../img/grandes/grande-baby.png",
        "tamanio":"grande",
        "edad":"Baby",
        "descripcion":"Comida para perros grande de hasta 4 meses de edad"
    },
    {
        "nombre":"Comida 10",
        "precio":"5500",
        "id":"comida-grande-puppy",
        "img":"../img/grandes/grande-puppy.png",
        "tamanio":"grande",
        "edad":"puppy",
        "descripcion":"Comida para perros grande de 4 a 12 meses de edad"
    },
    {
        "nombre":"Comida 11",
        "precio":"7000",
        "id":"comida-grande-adult",
        "img":"../img/grandes/grande-adulto.png",
        "tamanio":"grande",
        "edad":"adulto",
        "descripcion":"Comida para perros grande de 1 a 7 años"
    },
    {
        "nombre":"Comida 12",
        "precio":"8000",
        "id":"comida-grande-senior",
        "img":"../img/grandes/grande-senior.png",
        "tamanio":"grande",
        "edad":"senior",
        "descripcion":"Comida para perros grande con mas de 8 años"
    }
]

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};

