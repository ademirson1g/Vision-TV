import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import "../../style/VideoList.css"

const VideoList: React.FunctionComponent = () =>{
    const [getVideo , setGetVideo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchTvShowTrailer();
    }, [])

        async function fetchTvShowTrailer() {
          const response = await fetch(
              `https://api.themoviedb.org/3/tv/${id}/videos?api_key=18efa1c884796c304e2b89592f48fa10`
            );
            const data = await response.json();
  
            const trailer = data.results?.filter((video) => {
              return video.type === 'Trailer';
            });
            setGetVideo(trailer[0]);
          }

        return (
            <div>
            <div>
            <h2>{getVideo["name"]}</h2>
        </div>
        <iframe
          style={{display:"block"}}
          className="teaser"
          width="90%"
          height="800"
          src={`https://www.youtube.com/embed/${getVideo['key']}`}
          title={getVideo["title"]}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
        )
    }

export default VideoList