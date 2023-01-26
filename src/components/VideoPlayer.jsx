import ChannelInfo from './ChannelInfo';
import Comments from './Comments';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ video }) {
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className={styles.container}>
      <article className={styles.playerBox}>
        <iframe
          id={video.id}
          title={title}
          type='text/html'
          width='100%'
          height='100%'
          color='blue'
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1`}
        />
      </article>
      <section className={styles.infoBox}>
        <ChannelInfo
          title={title}
          id={channelId}
          name={channelTitle}
          des={description}
        />
      </section>
      <section className={styles.commentBox}>
        <Comments />
      </section>
    </section>
  );
}
