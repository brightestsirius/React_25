import { DEFAULT_USER, IUser } from './mockedData';

const sum = (a: number, b?: number | string): number => {
    if (b && typeof b === `number`) return a + b;
    else return a;
}

const getUserData = (user?: IUser) => {
    if (user) return { ...user, country: `Ukraine` };
    else return DEFAULT_USER;
}

const awaitSetTimeout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after 1s`);
        }, 1000);
    })
}

const fetchData = async () => {
    const request = await fetch(`https://655655bc84b36e3a431f9829.mockapi.io/test`),
        response = await request.json();

    return response;
}

export { sum, getUserData, awaitSetTimeout, fetchData }