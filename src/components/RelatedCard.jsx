import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';
import styles from './RelatedCard.module.css';

export default function RelatedCard({ video }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video: video } });
  };
  return (
    <div className={styles.listItem} onClick={handleClick}>
      <img src={video.snippet.thumbnails.medium.url} alt='' />
      <ul className={styles.relatedTitle}>
        <li>{video.snippet.title}</li>
        <li>{video.snippet.channelTitle}</li>
        <li>{formatAgo(video.snippet.publishedAt, 'ko')}</li>
      </ul>
    </div>
  );
}
