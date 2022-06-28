import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className='video'
                autoPlay
                controls
                src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            />
        </div>
    );
};

export default Watch;
