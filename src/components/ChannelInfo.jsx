import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './ChannelInfo.module.css';

export default function ChannelInfo({ id, title, name, des }) {
  const { youtube } = useYoutubeApi();
  const {
    data: url,
    isLoading,
    error,
  } = useQuery(['channel', id], () => youtube.channelImage(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className={styles.infoContainer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.name}>
        {isLoading ? <span>Wait...</span> : <img src={url} alt={name} />}
        <span>{name}</span>
      </div>
      <div className={styles.description}>
        <p>{des}</p>
      </div>
    </div>
  );
}
