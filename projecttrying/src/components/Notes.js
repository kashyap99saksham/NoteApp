import React, { useEffect, useState } from 'react';


const Notes = () => {


  const [notes, setNotes] = useState([{
    title:'',
    data:''
  }])

  useEffect(()=>{
    fetch('http://localhost:3001/notes').then(res=>{
      if(res.ok)  return res.json()
    }).then(jsonOutput=> {
      setNotes(jsonOutput)
      console.log(jsonOutput);
    })
    console.log(notes); 
  },[])

  return (
  <table class="table">
  <thead>
    <tr>
      <th scope="col">_id</th>
      <th scope="col">title</th>
      <th scope="col">data</th>
    </tr>
  </thead>
  <tbody>
    {
      notes.map((data)=>
      <tr>
        <th scope="row">{data._id}</th>
        <td>{data.title}</td>
        <td>{data.data}</td>
      </tr>
      )
    }

  </tbody>
</table>);
};

export default Notes;
