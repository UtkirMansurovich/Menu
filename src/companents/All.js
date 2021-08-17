import React from 'react'

const All = ({allMenu}) => {
    const getData = allMenu.map(el=>{
        return(
            <div className="card">
                <div className="img">
                    <img src={el.img} alt="Photo" />    
                </div>
                <div className="text">
                    <div className="name">
                        <p className="title">{el.title}</p>
                        <p className="price">{el.price}</p>
                    </div>
                    <hr />
                    <p className="desc">{el.desc}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="bigCard">
            {getData}
        </div>
    )
}

export default All
