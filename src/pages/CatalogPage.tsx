import {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import {chronicles} from '../mocks/chronicles';
import {SourceImage} from '../components/SourceImage';
import {YearFilter} from '../components/YearFilter';
export function CatalogPage({onOpen}: {onOpen: (id: number) => void}) {
  const [date, setDate] = useState('');
  const [year, setYear] = useState<number | null>(null);
  const items = chronicles.filter(item => year === null || item.startYear === year);
  return <><h1>Летописные источники</h1><p>Семь памятников древнерусского летописания</p>
    <YearFilter value={date} onChange={setDate} onSubmit={() => setYear(date ? Number(date.slice(0,4)) : null)}/>
    <div className="source-grid">{items.map(item => <Card key={item.id}>
      <SourceImage src={item.imageUrl} alt={item.name}/><Card.Body><Card.Title>{item.name}</Card.Title>
      <p aria-label="Количество отметок Нравится">♥ {item.likesCount}</p>
      <Button onClick={() => onOpen(item.id)}>Смотреть</Button></Card.Body></Card>)}</div>
    {items.length === 0 && <p role="status">Источники за выбранный год не найдены.</p>}
  </>;
}
