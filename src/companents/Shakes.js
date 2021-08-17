import React from 'react'

const Shakes = ({allMenu}) => {
    const dataThree = allMenu.map(el=>{
        if(el.category == 'shakes'){
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
            {dataThree}
        </div>
    )
}

export default Shakes
