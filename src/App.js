import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data,setdata]=useState([]);
  const fetchdata=()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response)=> setdata(response.data));
  }
useEffect(
  ()=>{
    fetchdata();
  }
)
  return (
    <div className="App">
      <h1> calling the api </h1>
       
            <table style={{ width: 1200 }}>
                <thead>
                    <tr>
                    <th>Name</th>
                        {data.map((data1, headID) =>
                            <th key={headID} >{data1.name}</th>)
                        }
                    </tr>
                    <tr>
                    <th>Email</th>
                        {data.map((data1, email) =>
                            <th key={email} >{data1.email}</th>)
                        }
                    </tr>
                    <tr>
                      <th>Body</th>
                        {data.map((data1, body) =>
                            <th key={body} >{data1.body}</th>)
                        }
                    </tr>
                </thead>
               
            </table>
        
    </div>
  );
}

export default App;
