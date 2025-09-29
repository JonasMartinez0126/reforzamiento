
function greet(name: string): string {
    return  `Hola ${name}`;
}

const greet2 = (name: string): string => {
    return `Hola ${name}`;
}

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_papi23'
    };
}

const getUser2 = () => {
    return {
        uid: 'ABC-124',
        username: 'El_papi23'
    };
}

const message = greet('Goku');
const message2 = greet2('Vegeta');
const user = getUser();
const user2 = getUser2();


console.log(message, message2);

console.log(user, user2);