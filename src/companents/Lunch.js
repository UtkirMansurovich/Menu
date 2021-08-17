import React from 'react'

const Lunch = ({allMenu}) => {
    const dataTwo = allMenu.map(el=>{
        console.log(el.category)
        if(el.category == 'lunch'){
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
        }
        
    })
    return (
        <div className="bigCard">
            {dataTwo}
        </div>
    )
}

export default Lunch
