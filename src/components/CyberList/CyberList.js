import React from 'react';
import CollectionCard from "../CollectionCard/CollectionCard";
import "./CyberList.css"

import alicePictures from "../../assets/owner/Alice.jpeg"

const CyberList = ({charactersData, setSelectedPunk}) => {
    return (
        <div className="cyberList">
            {
                charactersData.map(characters => (
                    <div onClick={() => setSelectedPunk(characters.token_id)}
                        key={characters.token_id}>
                        <CollectionCard
                            id={characters.token_id}
                            name={characters.name}
                            traits={characters.traits}
                            imagine={`${characters.image_original_url != null ? characters.image_original_url : alicePictures}`}
                        />
                    </div>
                ))}
        </div>
    );
}

export default CyberList;