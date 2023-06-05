import { apis } from "./apis"
const jwt = localStorage.getItem('jwt');

export async function asyncGet(api: string, mode?:string , Authorization?: string) {
    try {
        const res: Response = await fetch(
            api,
            {
                headers: new Headers({
                    'Authorization': `Bearer${jwt}`,
                }),
                mode: "cors"
            }
        )
        try {
            let data
            switch (mode) {
                case "text":
                    data = res.text()
                    break;
                default:
                    data = res.json()
                    break;
            }
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function asyncPost(api: string, body: {} | FormData, Authorization?: string) {
    const res: Response = await fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
            'Access-Control-Allow-Origin': "http://localhost:5173/",
            'content-Type': "application/json",
            'Authorization': Authorization ? Authorization : `Bearer${jwt}`,
        }),
        body: body instanceof FormData ? body : JSON.stringify(body),
        mode: "cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function login(name: string, password: string, callBack: Function) {
    try {
        const ans = await asyncPost(apis.login, { "name": name, "password": password })
        callBack(ans)
    } catch (error) {
        console.log(error)
    }
}