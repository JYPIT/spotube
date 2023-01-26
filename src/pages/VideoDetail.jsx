import { useLocation } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import RelatedVideos from '../components/RelatedVideos';
import styles from './VideoDetail.module.css';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  return (
    <div className={styles.contatiner}>
      <div className={styles.grid}>
        <VideoPlayer video={video} />
        <RelatedVideos id={video.id} />
      </div>
    </div>
  );
}
