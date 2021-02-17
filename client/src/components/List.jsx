import axios from 'axios';
import React from 'react';
import {useState} from 'react';

function List(props) {
    const unique = Array.from(new Set(props.people.map(x=>x.name)))
        .map(name =>{
            return {
                name: name,
                id: props.people.find(s => s.name === name)._id,
                entry: props.people.find(s => s.name === name).entry
            };
        });
    
    const [view, setView] = useState(null)
    let renderView;

    function deleteEntry(value) {
        console.log(value, 'delete')
        axios.delete('/people/' + value
        ).then(props.getEntries())
    }

    function likeEntry(value) {
        console.log(value, 'delete')
        axios.put('/people/' + value
        ).then(props.getEntries())
    }

    function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name> b.name ){
          return 1;
        }
        return 0;
      }

    console.log(props.people, 'ListView')
    
    if (view === null) {
        renderView = (
            <ul>
              {unique.sort(compare).map((person)=>(<div className="entryDiv" key={person.id} onClick={()=>setView(person.name)}>{person.name}</div>))}
            </ul>
        )
    } else {
        renderView = (
            <div>
              <ul>
        {props.people.filter(person=>person.name === view).sort((a, b) => (a.likeCount < b.likeCount) ? 1 : -1).map((person)=>(<div className="entryDiv" key={person._id} onClick={()=>setView(null)}>{person.entry}<span className="like" onClick={()=>likeEntry(person._id)}>&#9829;</span><span class="close" onClick={()=>deleteEntry(person._id)}>X</span></div>))}
              </ul>
              <button className="homeButton" onClick={()=>setView(null)}>Back to Entries</button>
            </div>
   
        )
    }

    return (
        <div>
            {renderView}
        </div>
    )
}

export default List;