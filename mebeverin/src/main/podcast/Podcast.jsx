import './Podcast.css';
import PodcastPlayer from "./PodcastPlayer";
import {podcasts} from "./Data";

export default function Podcast(){
    return(
        <div className="podcast" id="podcast">
            <div className="podcast-header">Podcasty</div>
            <PodcastPlayer podcasts={podcasts}/>
        </div>
    );
}