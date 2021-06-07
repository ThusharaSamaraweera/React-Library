export interface IAuthor {
  name: string
}

export interface IBook {
  name: string,
  price: number,
  author: string
}

export interface AuthorInDropDown {
  value: string,
  label: string,
}