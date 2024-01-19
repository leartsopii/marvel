import React from 'react'
import ComicItem from './ComicItem'

const ComicTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <ComicItem key={item.id} item={item}></ComicItem>
            ))
        }
    </section>
}

export default ComicTable