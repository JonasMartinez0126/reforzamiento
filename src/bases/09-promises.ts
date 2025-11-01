
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout(() => {
        // ! yo quiero mi dinero de regreso
        //resolve(100);
        reject('Mi amigo se perdio');
    }, 2000); // 2 segundos 
});

myPromise.then( (myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch( error => {
    console.warn( error );
}).finally( () => {
    console.log('A seguir con mi vidad');
})

