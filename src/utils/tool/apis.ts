export const enum apis {
    //prouds
    // check = "https://sp.ethci.org/check",
    // login = "https://sp.ethci.org/perform_login",
    // logout = 'https://sp.ethci.org/logout',


    //devs
    check = "http://localhost:2087/check",
    login = "http://localhost:2087/perform_login",
    logout = 'http://localhost:2087/logout',
    getBrowse = "http://localhost:2087/api/Browse/findAll",
    addBrowse = "http://localhost:2087/api/Browse/add",
    getMaterial = "http://localhost:2087/api/Material/findAll",
    getProduct = "http://localhost:2087/api/Product/findAll",
    getRecord = "http://localhost:2087/api/Record/findAll",
    getTransaction = "http://localhost:2087/api/Transaction/findAll",
    getUse = "http://localhost:2087/api/Use/findAll",
    getUser = "http://localhost:2087/getAllUser",
    findProduct = "http://localhost:2087/api/Product/find",
    buy = "http://localhost:2087/api/Transaction/buy",
    addRecord = "http://localhost:2087/api/Record/add",
    findNameById = "http://localhost:2087/findUserById",
    findProductNameById = "http://localhost:2087/api/Product/findProductNameById",
    findMaterialNameById = "http://localhost:2087/api/Material/findMaterialNameById",
}