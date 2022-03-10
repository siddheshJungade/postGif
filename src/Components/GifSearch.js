import { useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Carousel } from '@giphy/react-components'

const GifSearch = ({onSearch}) => {
    const [query, setQuery] = useState("")
    const [loding, setLoding] = useState(false)
    const giphyFetch = new GiphyFetch("IROxjSE69yavnX7kyh55qb6Dz9Mw5bu0");


    function CarouselDemo() {
        const fetchGifs = (offset) =>
            giphyFetch.search(query, { offset, limit: 10 });
        return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} onGifClick={(gif, e) => {
            e.preventDefault();
            onSearch(gif)
        }} />;
    }

    function handleGif(e) {
        if (query !== '') {
            setLoding(true)
        } else {
            setLoding(false)
        }
        setQuery(e.target.value)
    }

    return (<>
        {/* <ReactGiphySearchbox
            apiKey="IROxjSE69yavnX7kyh55qb6Dz9Mw5bu0"
            onSelect={item => setGif(item)}
        /> */}
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={handleGif} />
        </div>
        {loding ? <CarouselDemo /> : ""}
    </>)
}


export default GifSearch;