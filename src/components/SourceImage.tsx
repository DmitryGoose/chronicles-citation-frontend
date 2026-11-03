import {useEffect, useState} from 'react';
const fallback = `${import.meta.env.BASE_URL}media/chronicle_default.jpg`;
export function SourceImage({src, alt}: {src: string | null; alt: string}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return <img src={!src || failed ? fallback : src} alt={alt} onError={() => setFailed(true)}/>;
}
