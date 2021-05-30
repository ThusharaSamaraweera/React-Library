export interface IAuthors {
    name: string
}

export interface IBooks {
    name: string,
    price: number,
    author: string
}

export interface AuthorsInDropDown {
    value: string,
    label: string,
}