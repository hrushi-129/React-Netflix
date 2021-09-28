import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons";
import ListItem from "./ListItem";
import { useRef, useState } from "react";
import "./list.scss";
import { setTimeout } from "timers";

const List = () => {
    const listRef = useRef<HTMLDivElement>(null);

    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction: "left" | "right"): void => {
        const value: number = direction === "left" ? 230 : -230;
        if (listRef.current) {
            const { current } = listRef;
            const distance = current.getBoundingClientRect().x - 50;
            if (direction === "left" && slideNumber > 0) {
                setSlideNumber(value => value - 1);
                current.style.transform = `translateX(${value + distance}px)`;
            }
            if (direction === "right" && slideNumber < 10) {
                setSlideNumber(value => value + 1);
                current.style.transform = `translateX(${value + distance}px)`;
            }

            // ? Extra UX to feel you can't slide more if it is the first member
            // if (slideNumber <= 0 && direction === "left") {
            //     current.style.transform = `translateX(${value + distance}px)`;
            //     setTimeout(() => {
            //         current.style.transform = `translateX(${0}px)`;
            //     }, 250);
            // }
            // if (slideNumber >= 4 && direction === "right") {
            //     current.style.transform = `translateX(${value + distance}px)`;
            //     setTimeout(() => {
            //         current.style.transform = `translateX(${0}px)`;
            //         setSlideNumber(10);
            //     }, 250);
            // }
        }
    };

    return (
        <div className="list">
            <span className="listTitle">Continue To Watch</span>
            <div className="wrapper">
                <ArrowBackOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                />
                <div className="container" ref={listRef}>
                    {[...new Array(10)].map((item, idx) => (
                        <ListItem key={idx} />
                    ))}
                </div>
                <ArrowForwardOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default List;
