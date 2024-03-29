import React, {useState} from 'react'


const Searchc = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a comics"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Searchc