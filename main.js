
function calcolaMediaEValore(numeri) {

    // Calcola la somma dei valori
    // .reduce : mi permette questo metodo di ridurre l'insieme dei dati all'interno di un array in un unico nuovo dato
    // acc : sarebbe l'accumulatore, è il dato finale, ossia quello che verrà ritornato dalla .reduce
    // n : rappresenta ogni singolo elemento dell'array
    // la reduce sta ciclando su l'array e se vogliamo ottenere la somma dei numeri dovremmo fare "acc + n"

    let somma = numeri.reduce((acc, n) => acc + n, 0);




    // Calcolo della media
    // length: proprietà degli array che rappresenta l'esatto numero di elementi dentro l'array

    let media = somma / numeri.length;




    // Trova i valori minori della media
    // .filter: crea un clone di un array e mi permette quali elementi passare al clone attraverso una condizione.
    // poi il clone creato lo salvo dentro la variabile valoriMinori
    let valoriMinori = numeri.filter(number => number < media);
    let valoriMaggiori = numeri.filter(number => number > media);






    return {
        media: media, // Restituisco la media calcolata
        valoriMinori: valoriMinori, // Restituisco i valori minori della media
        valoriMaggiori: valoriMaggiori
    };


}





let array = [44, 9999, 34, 1, 8];
let risultatoFinale = calcolaMediaEValore(array);


console.log("La media è :  " + risultatoFinale.media);
console.log("Valori minori della media sono invece : " + risultatoFinale.valoriMinori);
console.log("Valori maggiori della media sono invece : " + risultatoFinale.valoriMaggiori);








