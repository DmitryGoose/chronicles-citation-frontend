import {useEffect, useRef} from 'react';
import {Button} from 'react-bootstrap';
import {chronicles} from '../mocks/chronicles';
export function FeedPage({id, onNext}: {id: number; onNext: (id: number) => void}) {
  const index = Math.max(0, chronicles.findIndex(item => item.id === id));
  const item = chronicles[index];
  const video = useRef<HTMLVideoElement>(null);
  const fallback = `${import.meta.env.BASE_URL}media/chronicle_default.mp4`;
  const poster = `${import.meta.env.BASE_URL}media/chronicle_default.jpg`;
  useEffect(() => {video.current?.load();}, [item.id]);
  return <article className="feed-card" key={item.id}>
    <video className="feed-media" ref={video} autoPlay muted loop playsInline preload="metadata"
      poster={item.imageUrl || poster} src={item.videoUrl || fallback}
      onError={e => {const el=e.currentTarget; if (!el.src.endsWith('/chronicle_default.mp4')) {el.src=fallback; el.load();}}}/>
    <div className="feed-overlay">
      <section className="feed-copy"><h1>{item.name}</h1>
        <p className="description-preview">{item.shortDescription}</p>
        <details><summary>Больше / меньше</summary><p>{item.shortDescription}</p></details>
      </section>
      <aside className="feed-actions" aria-label="Информация о летописи">
        <div className="topic-field"><span>Год авторства</span><strong>{item.authorshipYear}</strong></div>
        <div className="topic-field"><span>Год начала</span><strong>{item.startYear}</strong></div>
        <div className="like-icon"><span aria-hidden="true">♥</span><strong>{item.likesCount}</strong></div>
        <Button className="action-button next-button" onClick={() => onNext(chronicles[(index+1)%chronicles.length].id)}>Следующий</Button>
      </aside>
    </div>
  </article>;
}
