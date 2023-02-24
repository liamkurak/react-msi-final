import React, {useEffect, useState} from "react";



function GetDate() {

    const [data, setData] = useState(0);

    async function f() {
        let response = await fetch(
            // "https://1c104v13x0.execute-api.us-east-1.amazonaws.com/v1/counter",
            "http://localhost:8080/Samples/age/40",
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                headers: { 'Content-Type': 'text/plain', },
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
                // body: body && JSON.stringify(body)
            }
        )
        return response.json();
    }

    useEffect(
        ()=>{
            // a promise function， return (success | failed results)
            f()
                .then(
                    (resolved_result)=>{
                        setData(resolved_result)
                    }
                ).catch(
                (failed_result)=>{
                    console.log('something wrong');
                    console.log(failed_result);
                }
            )
        }, []
    )


    return (
        <div className="App">
            DB data:
            <br />
            {data}
        </div>
    );
}

export default GetDate;
