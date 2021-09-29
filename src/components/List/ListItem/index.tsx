import {
    Add,
    PlayArrow,
    ThumbDownOutlined,
    ThumbUpOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.scss";

type ListItemProps = {
    index: number;
};

const ListItem = ({ index }: ListItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://imdb-video.media-imdb.com/vi1370014489/1434659607842-pgv4ql-1632588150913.mp4?Expires=1632934388&Signature=jskrvrzvKCzw9ra9-I~jsOK-JbB8WWkCrEKXUsmiUZGDGTimhZP~hAq6RLtTJjcGLJxdtqrHdTZh0s6~DCZOZ2XckiLMnx5WPfKi2RV~ufHBqsUszQ9yPcBXlXHqKETxKrMYIYMEHPAdifix8T1Ee84ZQAz6dEjtCpd~SCib98lYx7WyYPJQx6mMAz8ppOuE929xndOn69mOxRwXJ9lACZDDliKxySR~iINr9SPBfOX94l1VumcOlNY-PGKvJEn2s-QZe6FUHHJ~0sLLHdLYvnWryUG9wZ81QeEFvDtaKP8TX3GBJHuHw02xdFXMwqPxCm8wxJdJ68ixptwmuR4I5g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";
    return (
        <div
            className="listItem"
            style={{
                left: isHovered ? index * 225 - 50 + index * 2.5 : "undefined",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://www.denofgeek.com/wp-content/uploads/2017/08/stranger-things-season-3-starcourt-teaser-netflix.jpg?fit=670%2C377"
                alt="item-static"
            />

            {isHovered && <ItemTrailer trailer={trailer} />}
        </div>
    );
};

export default ListItem;

function ItemTrailer({ trailer }: { trailer: string }) {
    return (
        <>
            <video className="video" src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">16+</span>
                    <span>2020</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                </div>
                <div className="genre">Action</div>
            </div>
        </>
    );
}
