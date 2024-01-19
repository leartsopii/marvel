import './App.css';
import Header from './Components/Header'
import ComicTable from './Components/ComicTable'
import axios from 'axios'
import React , {useEffect,useState} from 'react'
import Searchc from './Components/Searchcomics'

const hash =  "bd0722d5750b6362d5ba0212ca36726b"

function App2() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')
  

  useEffect(()=>{ 
      const fetch = async()=>{
        if(query===''){
          // checking if favorites array is empty or does not exist
          if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
            localStorage.setItem('favorites', '[]')
            const result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
            console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          }
          
          
        }else{
          const result = await axios(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
    <div className="container">
      <Header />
      <Searchc search={(q)=>setQuery(q)}></Searchc>
      <ComicTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App2;