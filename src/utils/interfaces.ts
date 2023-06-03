export interface Material {
    mId: string,
    mType: string,
    mName: string,
    mNum: string,
}

export interface Product {
    pid: string,
    category: string,
    pName: string,
    pPackage: string,
    saleCount: number,
    price: number,
}

export interface Use{
    INo: string,
    pId: string,
    amount: number
}

export interface Browse{
    _id: string,
    uid: string,
    pid: string,
    browseTime: string
}

export interface User{
    _id: string,
    name: string,
    password: string,
    role: string,
    Address: string,
    phone: string,
    email: string
}

export interface Transaction {
    mId: string,
    tId: string,
    transTime: Date,
}