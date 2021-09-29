import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

type FeaturedTypes = {
    type?: string;
};

const Featured = ({ type }: FeaturedTypes) => {
    return (
        <div className="featured">
            {type && <Type type={type} />}
            <img
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVQ3r-RD5ggW7SMOGIC0ATHOhcyr_oN1n19NDrSHuMXXlN9ZaODS8c51TbtPn_S0anR2qRN9S4qAVcNYrhN2d8MEgpHY.jpg?r=3a8"
                alt="featured-background"
            />
            <div className="info">
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png"
                    alt="info-img"
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus deserunt repellat voluptates esse laboriosam. Non,
                    expedim sunt ipsum perferendis saepe repellendus.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

const Type = ({ type }: { type: string }) => {
    return (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
        </div>
    );
};
