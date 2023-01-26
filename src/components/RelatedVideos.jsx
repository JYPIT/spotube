import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedCard from './RelatedCard';
import styles from './RelatedVideos.module.css';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    data: relatedVideos,
    isLoading,
    error,
  } = useQuery(['related', id], () => youtube.related(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className={styles.container}>
      {isLoading ? (
        <h1>Wait...</h1>
      ) : (
        <div className={styles.listBox}>
          {relatedVideos.map((video) => (
            <div key={video.id}>
              <RelatedCard video={video} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
