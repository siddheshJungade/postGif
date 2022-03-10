import { useState, useRef, useContext } from "react"
import { Overlay, Popover } from "react-bootstrap"
import { PostContext } from "../Context/AppContext"
import GifSearch from "./GifSearch"


const AddPost = () => {
    const [text, setText] = useState('')
    const [gifItem, setGif] = useState('')


    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    function hendalSearch(e) {
        setShow(!show)
        setTarget(e.target)

    }

    const {addPost} = useContext(PostContext)
    function onSubmit(e) {
        console.log({text,gifItem})
        e.preventDefault()
        addPost({text,gifItem})
        setText('')
        setGif(null)
    }

    function onSearch(data) {
        setGif(data)
    }


    return (
        <div className="container border border-primary my-3">
            <form onSubmit={onSubmit}>
                <div className="form-group m-2">
                    <label htmlFor="exampleFormControlTextarea1">Post</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setText(e.target.value)} value={text} ></textarea>
                    <div className="d-flex justify-content-between my-2">
                        <div ref={ref}>
                            <button type="button" className="btn btn-outline-dark btn-sm px-3" onClick={hendalSearch}>GiF</button>

                            <Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Body>
                                            <GifSearch onSearch={onSearch} />
                                        <button type="button" className="btn btn-danger btn-sm px-3" onClick={hendalSearch}>submit</button>

                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary btn-sm" />
                    </div>
                </div>
            </form>
        </div>
    )
}


export default AddPost;