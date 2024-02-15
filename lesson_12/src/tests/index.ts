import { unknownType, IUser } from './../types/types';
import { DEFAULT_USER } from './mockedData'
import { convertToNumber } from './../utils/utils'

const sum = (a: number, b?: unknownType): unknownType => {
    if (b) return convertToNumber(a) + convertToNumber(b);
    else return convertToNumber(a);
}

const getUser = (user?: IUser): IUser => {
    if (user) return { ...user, country: `Ukraine` };
    return DEFAULT_USER;
}

const awaitTimeout = async (timer: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after ${timer} ms`);
        }, timer);
    })
}

const fetchData = async () => {
    const request = await fetch(`https://655655bc84b36e3a431f9829.mockapi.io/test`),
        response = await request.json();

    return response;
}

export { sum, getUser, awaitTimeout, fetchData };