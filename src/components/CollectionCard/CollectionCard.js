import React from 'react';
import "./CollectionCard.css"

import weth from '../../assets/weth.png';

const CollectionCard = ({id, name, imagine, traits}) => {
    return (
        <div className="collectionCard">

            <img src={imagine} alt="currently not available"/>

            <div className="collectionCard_details">
                <div className="collectionCard_name">{name}
                    <div className="collectionCard_name_id">· #{id}</div>
                </div>


                <div className="collectionCard_price">
                    <img src={weth} className="collectionCard_price_id" alt="images"/>
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;