import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

import introvideo from '../assets/Untitled design.mp4'
const ReactVideoPlayer = () => {
    return (
        <div className='lg:w-[600px] h-72 mt-5 p-4'>
            <Video autoPlay loop>
            <source src={introvideo} type='video/webm'>
            
            </source>
        </Video>
        </div>
    );
};

export default ReactVideoPlayer;