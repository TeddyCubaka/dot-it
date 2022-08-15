import { useEffect, useState } from "react"


export default function Fetcher (){

    const [DataisLoaded, setDataisLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(
            "https://jsonplaceholder.typicode.com/users")
                        .then((res) => res.json())
                        .then((json) => {
                                setItems(json);
                                setDataisLoaded(true);
                        })
    }, [])

    if (!DataisLoaded) return 
    ( 
        <div>
            <h1> Pleses wait some time.... </h1>
        </div>
    )

    return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>
            {
                items.map((item) => ( 
                    <ol key = { item.id } >
                        User_Name: { item.username }, 
                        Full_Name: { item.name }, 
                        User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    )
}