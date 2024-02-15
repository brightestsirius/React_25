const DEFAULT_USER = {
    name: `User`
}

interface IUser {
    name: string,
    country?: string
}

const TEST = [
    {
        "name": "Dr. Bertha Sanford",
        "id": "1"
    },
    {
        "name": "Danielle Feil IV",
        "id": "2"
    }
];

export { DEFAULT_USER, TEST };
export type { IUser }