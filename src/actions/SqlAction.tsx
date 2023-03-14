export async function getData(path:string) {
    let response = await fetch(
        `http://localhost:8080/${path}`,
        {   method: 'Get',
            headers: { 'Content-Type': 'application/json'},
            referrerPolicy: 'no-referrer',
        })
    return response.json();
}

async function SQL_Method(path:string, method:string, body:object){
    let response = await fetch(
        `http://localhost:8080/${path}`,
        {   method: method,
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(body),
            })
    return response.json();
}

export async function putData(path:string, body:object) {
    return SQL_Method(path, 'PUT', body);
}

export async function postData(path:string, body:object) {
    return SQL_Method(path, 'PUT', body);
}

export async function deleteData(path:string, body:object) {
    return SQL_Method(path, 'Delete', body);
}