const characterNames = ['Goku', 'Vegeta', 'Trunks'];

//const [goku, vegeta, trunks] = characterNames;
const [ , , trunks] = characterNames;

console.log({ trunks });

const returnsArrayfn = () => {
    return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnsArrayfn();

console.log( letters, numbers );

const useState = (value: String) => {
    return [value, (newValue: string) => { console.log(newValue); }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"