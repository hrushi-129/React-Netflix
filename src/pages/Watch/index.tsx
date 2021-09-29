import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useState } from "react";

const Watch = () => {
    const [showBack, setShowBack] = useState(true);

    return (
        <div className="watch">
            {showBack && (
                <div className="back">
                    <ArrowBackOutlined className="icon" />
                    Home
                </div>
            )}
            <video
                src="https://imdb-video.media-imdb.com/vi1370014489/1434659607842-pgv4ql-1632588150913.mp4?Expires=1632992789&Signature=WauTaYKLFO6BgqKCTQgJpB5NyIFF4YycsL2VLpPq-m27lCU9M7uEkjUTbIZOK3LbFoS~uhGsrVkYKiT9mJ~zyWdAjotbOMfSugqraDf5F-1V8Zsae7~EU55sl0RN2HPsmsYSZmi2yalB-uapJb~0wLJpUZdvARJa9sUXZZLCeM7~lrkTcnLibXwYxSJzKFPC0UQJJzSE9UATYYzqP3TBx8ut6JnSB0k27B7MGwEuyPirkMT6dQcRVmJ-~jRGxbXcR9etLHzk7MpehBDmhODcwZnz5wMVU-nbKBa3gQdQvvHKt3C726ldhFQDPQwbI0Mu4e9swu4~lcN8zxFGwD1isg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
                className="video"
                autoPlay
                controls
                onPause={() => setShowBack(true)}
                onPlay={() => setShowBack(false)}
            />
        </div>
    );
};

export default Watch;
