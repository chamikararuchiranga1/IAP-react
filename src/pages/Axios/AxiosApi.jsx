import { useEffect, useState } from "react"
import axios from "axios";
import PostCard from "../../components/PostCard/Postcard";

export default function AxiosApi() {

    const [showData, setShowdata] = useState([])

    useEffect(() => {
        getData();
        // postdata();
    }, [])

    function getData() {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(function (response) {
                console.log(response.data);
                setShowdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    function postdata() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Axios</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {showData.map((val) => (
                    <PostCard
                        id={val.id}
                        title={val.title}
                        url={val.url}
                        thumbnailUrl={val.thumbnailUrl}
                    />
                ))}

            </div>
        </div>
    )
}