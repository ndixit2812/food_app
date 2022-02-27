import React from 'react'
import './Style.css';

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card-container">
            { menuData.map((curElem) => {

                 const {id, name, category, image, description, price} = curElem;

                    return (
                        <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle" style={{color: "red"}}>Dish No. {id}</span>
                                    <span className="card-author subtle" style={{color:"green"}}>Avail at {category}</span>
                                    <h2 className="card-title" style={{color:"blue"}}>{name}</h2>
                                    <span className="card-description subtle" style={{color:"purple"}}>{description}</span>
                                    
                                </div>
                                <img src={image} alt="images" className="card-media " />
                                <div className="card-read " style={{color:"red", display:"inline-block"}}>Read</div>

                                <span className="card-tag subtle" style={{color: "blue"}}>Price: {price}</span>
                            </div>
                        </div>
                        </>
                    )
                    
                })
            }
            </section>
        </>
    )
}

export default MenuCard
