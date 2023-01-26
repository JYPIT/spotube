import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';
import styles from './VideoCard.module.css';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/videos/watch/${video.id}`, { state: { video: video } });
  };
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <div className={styles.videoCard} onClick={onClick}>
      <img src={thumbnails.medium.url} alt='' />
      <div className={styles.info}>
        <li className={styles.title}>{title}</li>
        <li className={styles.name}>{channelTitle}</li>
        <li className={styles.time}>{formatAgo(publishedAt, 'ko')}</li>
      </div>
    </div>
  );
}
