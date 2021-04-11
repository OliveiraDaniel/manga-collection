import React from 'react';
import '../styles/Showcase.css'
import Collection from '../data/collection.json'

const dataManga = Collection;

function Card() {
    return (
        <>
            {dataManga.map((item: any, index) => {
                return (
                    <div className="item" key={index}>
                        <h2>{item.text}</h2>
                        <small>Editora: {item.editora}</small>
                        <div className="link-collection">
                            <a href={item.url}>
                                <img src={item.img} />
                            </a>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Card;