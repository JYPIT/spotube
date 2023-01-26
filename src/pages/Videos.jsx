import styles from './Videos.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <div className={styles.container}>
      {/* <div>{keyword ? `"${keyword}" 에 대한 검색 결과` : 'All Sports'}</div> */}
      <div>
        {isLoading ? (
          <h1>Wait...</h1>
        ) : (
          <div>
            {error && <p>Error</p>}
            <div className={styles.grid}>
              {videos.map((video) => (
                <ul key={video.id}>
                  <VideoCard video={video} />
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
