


const Post = (props) => {
    if (props.data.text === '' && props.data.gifItem === null) {
        return "";
    }
    return (
        <div className="card m-2">
            {props.data.text !== '' ? <div className="card-body">
                <p className="card-text">{props.data.text}</p>
            </div> : ""}

            {props.data.gifItem !== null ? <iframe src={props.data.gifItem["embed_url"]} width="480" height="270" frameBorder="0" className="giphy-embed mx-auto my-3" allowFullScreen title="helo"></iframe> : ""}
        </div>

    );
}

export default Post;