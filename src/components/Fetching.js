import { useEffect, useState } from "react";

const Fetching = () => {
    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
        //     .then((response) => {
        //         return (
        //             response.json()
        //         )
        //     }).then((response) => {
        //         console.log(response);
        //     });
        // console.log(getData);
        const getData = async () => {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();
            // console.log(request);
            // console.log(response);
            setData(response);
            setLoadingData(false);
        }
        getData();
    }, [])

    return (
        <div className="p-4 w-9/12 h-auto mx-auto mb-8 rounded-lg bg-gradient-to-b from-cyan-200 to-purple-300 drop-shadow-xl">
            {
                loadingData ?
                    <h1 className="italic">Loading ...</h1>
                    : <ul className="list-decimal list-inside">
                        {
                            data.map((datas) => {
                                console.log(datas);
                                return (
                                    <li className="font-semibold" key={datas.id}>{datas.title}</li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    );
}

export default Fetching;