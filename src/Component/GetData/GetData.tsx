import React, {useEffect, useState} from "react";



function GetDate() {

    const [data, setData] = useState(0);

    async function f() {
        let response = await fetch(
            "http://localhost:8080/samples/age/40",
            {
                method: 'GET',
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: 'omit',
                headers: { 'Content-Type': 'application/json'},
                // redirect: 'follow',
                referrerPolicy: 'no-referrer',
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
                        console.log('resolved_result: ',resolved_result);
                        console.log(resolved_result[0].age)
                        setData(resolved_result[0].age)

                    }
                )
                .catch(
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