export interface Chronicle {
  id: number; name: string; shortDescription: string; authorshipYear: number;
  startYear: number; imageUrl: string | null; videoUrl: string | null; likesCount: number;
}
const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
export const chronicles: Chronicle[] = [
  {id:1,name:'Повесть временных лет',shortDescription:'Летописный свод о происхождении Руси и событиях её ранней истории.',authorshipYear:1116,startYear:852,imageUrl:media('pvl.jpg'),videoUrl:media('pvl.mp4'),likesCount:4},
  {id:2,name:'Лаврентьевская летопись',shortDescription:'Один из важнейших памятников древнерусского летописания.',authorshipYear:1377,startYear:853,imageUrl:media('laurentian.jpg'),videoUrl:media('laurentian.mp4'),likesCount:4},
  {id:3,name:'Ипатьевская летопись',shortDescription:'Свод летописей о событиях Киевской и Галицко-Волынской Руси.',authorshipYear:1425,startYear:852,imageUrl:media('hypatian.jpg'),videoUrl:media('hypatian.mp4'),likesCount:5},
  {id:4,name:'Новгородская первая летопись',shortDescription:'Сведения о жизни и событиях средневекового Новгорода.',authorshipYear:1330,startYear:1016,imageUrl:media('novgorod1.jpg'),videoUrl:media('novgorod1.mp4'),likesCount:2},
  {id:5,name:'Новгородская четвёртая летопись',shortDescription:'Летописный свод с новгородскими и общерусскими известиями.',authorshipYear:1448,startYear:1016,imageUrl:media('novgorod4.jpg'),videoUrl:media('novgorod4.mp4'),likesCount:3},
  {id:6,name:'Псковская первая летопись',shortDescription:'Исторические известия о Пскове и соседних землях.',authorshipYear:1469,startYear:1030,imageUrl:media('pskov1.jpg'),videoUrl:media('pskov1.mp4'),likesCount:2},
  {id:7,name:'Московский летописный свод',shortDescription:'Общерусский летописный свод конца XV века; пример локальных медиа по умолчанию.',authorshipYear:1479,startYear:852,imageUrl:null,videoUrl:null,likesCount:3},
];
