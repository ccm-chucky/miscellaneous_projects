import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  const handleClick = (id)=>{
    const newPeople = people.filter((person)=>person.id !==id);
    setPeople(newPeople);

  };
  return <>
  {
  people.map((person)=>{
   const {id,name} = person; 
    return <div key={id} className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={()=>handleClick(id)}>delete</button>
    </div>
  })
  
}
<button onClick={()=>setPeople([])}>delete all</button>
</>;
};

export default UseStateArray;
