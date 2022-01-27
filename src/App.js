import './App.css';
import Header from "./components/Header/Header";

import {useState, useEffect} from "react";
import axios from "axios";
import CyberList from "./components/CyberList/CyberList";
import Main from "./components/Main/Main";

const App = () => {
    const [charactersData, setCharactersData] = useState([])
    const [selectedPunk, setSelectedPunk] = useState(0)

    useEffect(() => {
        const myNftSet = async () => {
            // const openData = await axios.get
            // ("https://testnets.opensea.io/assets?asset_contract_address=0x1dFd243365Edd51cfbdA00AEa10E45cF05db41a2&order_direction=asc")
            //
            const openData = await axios.get
            ("https://testnets-api.opensea.io/assets?asset_contract_address=0x1dFd243365Edd51cfbdA00AEa10E45cF05db41a2&order_direction=asc", {mode: 'no-cors'})
            console.log(openData.data.assets)
            setCharactersData(openData.data.assets)
        }

        return myNftSet()

    }, [])


    return (
        <div className='app'>
            <Header/>
            {charactersData.length > 0 && (
                <>
                    <Main selectedPunk={selectedPunk}
                          charactersData={charactersData}/>
                    <CyberList charactersData={charactersData}
                               setSelectedPunk={setSelectedPunk}
                    />
                </>
            )}

        </div>
    );
}

export default App;
