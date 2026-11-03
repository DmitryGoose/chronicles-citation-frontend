import {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {CatalogPage} from './pages/CatalogPage';
import {FeedPage} from './pages/FeedPage';
type Route = {page: 'catalog' | 'feed'; id: number};
function readRoute(): Route {
  const [path, query] = window.location.hash.slice(1).split('?');
  return {page: path === '/feed' ? 'feed' : 'catalog', id: Number(new URLSearchParams(query).get('id')) || 1};
}
export default function App() {
  const [route, setRoute] = useState<Route>(readRoute);
  useEffect(() => {const update=()=>setRoute(readRoute()); window.addEventListener('hashchange',update);
    return () => window.removeEventListener('hashchange',update);}, []);
  const open = (id: number) => {window.location.hash=`/feed?id=${id}`;};
  return <><Container as="main" className={route.page === 'feed' ? 'mobile-page feed-page' : 'mobile-page content-page'}>{route.page === 'catalog' ? <CatalogPage onOpen={open}/> : <FeedPage id={route.id} onNext={open}/>}</Container>
    <Navbar fixed="bottom" className="bottom-nav"><Nav activeKey={route.page}>
      <Nav.Link eventKey="feed" active={route.page === 'feed'} href="#/feed">Лента</Nav.Link>
      <Nav.Link disabled>Добавление</Nav.Link>
      <Nav.Link eventKey="catalog" active={route.page === 'catalog'} href="#/catalog">Плитка</Nav.Link>
      <Nav.Link disabled>Вход</Nav.Link>
    </Nav></Navbar></>;
}
