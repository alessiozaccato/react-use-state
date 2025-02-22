import { useState } from 'react';

const ButtonsList = (props) => {

    const { languages } = props

    // const [idDesc, setIdDesc] = useState(false);

    // const handleLangs = () => setIdDesc(!idDesc);

    // user experience to check the content of the array
    if (languages.length === 0) {
        return <h2>Non ci sono Linguaggi</h2>
    }

    return (


        languages.map((language) => {

            const { id, title, description } = language;

            const [idDesc, setIdDesc] = useState(false);

            const handleLangs = () => setIdDesc(!idDesc);

            return (

                <div className="lang" key={id} >
                    <button className='button' onClick={handleLangs}> {title}</button>
                    <div className='btnDescription'>
                        {idDesc && < div > {description} </div>}
                    </div >
                </div >

            )


        })







    )

}

export default ButtonsList