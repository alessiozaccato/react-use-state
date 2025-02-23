import ButtonsList from "./ButtonsList"
import Description from "./Description"
import { useState } from "react";

const Main = (props) => {

    const [idDesc, setIdDesc] = useState(null);

    const handleLangs = (index) => setIdDesc(index === idDesc ? null : index);

    return (
        <>
            <div className="buttonsContainer">
                <ButtonsList handleLangs={handleLangs} languages={props.languages} idDesc={idDesc} />
            </div>
            {idDesc === null ?
                <div className='btnDescription' >< h4 > Non hai selezionato nessun linguaggio </h4></div>
                : <Description idDesc={idDesc} languages={props.languages} />}

        </>
    )
}

export default Main
