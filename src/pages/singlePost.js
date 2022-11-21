import { useLocation } from "react-router-dom"
import { handleDelete} from "./addPost.js"


export default function SinglePost() {
    const location = useLocation()

    console.log(location)

    return (
        <div className="container">
            <div className="single-post">
                <img src="https://source.unsplash.com/random?sig=1" alt="" />
                <h1>{location.state.author}</h1>
                <p>{location.state.text}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}