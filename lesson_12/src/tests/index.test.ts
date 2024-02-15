import { DEFAULT_USER, TEST } from './mockedData';

import { test, expect, beforeEach, afterAll, describe } from 'vitest'

import { sum, getUserData, awaitSetTimeout, fetchData } from './index'

test(`fn should return sum of numbers`, () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
});

test(`fn should return number`, () => {
    const result = sum(2, `10`);
    expect(result).toBe(2);
    expect(result).not.toBe(12);
});

describe(`USERS_FN`, () => {
    test(`fn should return default user`, () => {
        const result = getUserData();
        expect(result).toEqual(DEFAULT_USER)
    });

    test(`fn should return user`, () => {
        const result = getUserData({ name: `Katya` });
        expect(result).toEqual({ name: `Katya`, country: `Ukraine` })
    });

    let testCounter = 0;

    beforeEach(() => {
        testCounter++;
    })

    afterAll(() => {
        console.log(testCounter);
    })
})

test(`fn should retun text after 1s`, async () => {
    const result = await awaitSetTimeout();
    expect(result).toBe(`after 1s`);
})

test(`fn should retun fetch`, async () => {
    const result = await fetchData();
    expect(result).toEqual(TEST);
})