const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const { name:ironmanName, age, key } = person;

console.log(ironmanName);
console.log(age);
console.log(key);

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}


const useContext = ( { key, name, age, rank = 'Sin Rango'}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    };
};


const { rank, keyName, user: { name }} = useContext(person);

console.log({ rank, keyName, name });