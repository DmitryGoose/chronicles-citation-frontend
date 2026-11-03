import {Button, Form} from 'react-bootstrap';
interface Props { value: string; onChange: (value: string) => void; onSubmit: () => void }
export function YearFilter({value, onChange, onSubmit}: Props) {
  return <Form className="year-filter" onSubmit={e => {e.preventDefault(); onSubmit();}}>
    <Form.Label htmlFor="start-date">Дата начала летописи</Form.Label>
    <Form.Control id="start-date" type="date" value={value} onChange={e => onChange(e.target.value)}/>
    <Button type="submit">Найти</Button>
  </Form>;
}
