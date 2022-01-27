import React, { useState } from 'react';
import axios from 'axios'

const CreateNotes = () => {

    const [input, setInput] = useState({
        title:'',
        data:''
    })

    const handleChange = (e) => {

        console.log(e.target);
        const {name,value} = e.target

        setInput((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        } )

    }
    const handleClick = (e)  =>{
        e.preventDefault();
        console.log(input);

        const newNote = {
          title: input.title,
          data: input.data
        }

        axios.post('http://localhost:3001/create', newNote)

    }

  return <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Note Title</label>
    <input onChange={handleChange} value={input.title} name='title'  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Note Title" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Note Data</label>
    <input onChange={handleChange} value={input.data} name='data' type="password" class="form-control" id="exampleInputPassword1" placeholder="Note Data" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Add My Note</label>
  </div>
  <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
</form>;
};

export default CreateNotes;

