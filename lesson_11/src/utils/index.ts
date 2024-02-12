let str:string = `hello`;
let num:number = 10;
let bool:boolean = true;
let undefinedValue = undefined;
let nullValue: null = null;

type maybeString = undefined | string | null;

let someName: maybeString = `Anna`;
let userMonth: any = 10;

let animals: string[] = [`cat`];
let users: (string | number)[] = [`cat`, 10];

type Child = {
    name: string,
    age: number
}

enum REST_API_METHODS {
    get = `GET`,
    delete = `DELETE`
}

interface UserI {
    name: string,
    age: number
    animals?: Child[],
    methods: REST_API_METHODS[]
}

interface WomanI extends UserI {
    child: number
}

let user: UserI = {
    name: `Anna`,
    age: 60,
    methods: [REST_API_METHODS.get]
}

let Katya: WomanI = {
    name: `Katya`,
    age: 29,
    child: 2,
    methods: [REST_API_METHODS.delete],
    animals: [
        {
            name: `Child 1`,
            age: 2
        }
    ]
}

const renderString = (value: string): void => {
    console.log(`Render ${value}`);
}

const sum = (a: number, b?: number) => {
    if(b) return a+b;
    else return a;
}

const printValue = <x, y>(value_1:x, value_2:y): void => {
    console.log(value_1);
    console.log(value_2);
}

sum(10);
sum(10, 20);