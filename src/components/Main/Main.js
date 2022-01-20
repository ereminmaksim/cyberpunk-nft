import React, {useEffect, useState} from 'react';

import "./Main.css"

// import alicePictures from "../../assets/owner/Alice.jpeg"
import instagramLogo from "../../assets/owner/instagram.png"
import twitterLogo from "../../assets/owner/twitter.png"
import moreLogo from "../../assets/owner/more.png"
import alicePictures from "../../assets/owner/Alice.jpeg";

const Main = ({selectedPunk, charactersData}) => {
    const [activeCharacters, setActiveCharacters] = useState(charactersData[0]);
    // console.log(selectedPunk, ":rock")
    // console.log(charactersData[selectedPunk])


    useEffect(() => {
        setActiveCharacters(charactersData[selectedPunk])
    }, [selectedPunk, charactersData])


    return (
        <div className="main">
            <div className="main_content">
                <div className="main_highlight">
                    <div className="main_container">
                        <img className="main_characters"
                             src={`${activeCharacters?.image_original_url != null ? activeCharacters.image_original_url : alicePictures}`}
                             alt="punk"/>
                    </div>
                </div>

                <div className="details_container">
                    <div className="details">
                        <div className="details_characters_title">{activeCharacters.name}
                            <span className="details_characters_itemNumber">·#{activeCharacters?.token_id}</span>
                        </div>
                    </div>


                    <div className="owner">
                        <div className="owner_image">
                            <img
                                // src={`${activeCharacters?.image_original_url != null ? activeCharacters.image_original_url : alicePictures}`}
                                // src={activeCharacters?.owner.profile_img_url}
                                src={activeCharacters?.owner.profile_img_url}
                                alt=""/>
                        </div>


                        <div className="owner_Details" style={{color: "#fff"}}>
                            <div className="owner_name">
                                <div>{activeCharacters?.asset_contract?.address}</div>
                                <div className="owner_Handle">
                                    <a href='https://t.me/eremin_maksim_official'>@Cyberpunk</a>
                                </div>
                            </div>


                            <div className="ownerLink">
                                <img src={instagramLogo} alt="instagram"/>
                            </div>

                            <div className="ownerLink">
                                <img src={twitterLogo} alt="twitter"/>
                            </div>

                            <div className="ownerLink">
                                <img src={moreLogo} alt="more"/>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;