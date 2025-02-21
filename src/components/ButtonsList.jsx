import { useState } from 'react';

const ButtonsList = (props) => {

    const { languages } = props

    const [isOpen, setIsOpen] = useState(false);

    const handleLangs = () => setIsOpen(!isOpen);

    // user experience to check the content of the array
    if (languages.length === 0) {
        return <h2>Non ci sono Linguaggi</h2>
    }


    return (


        languages.map((language) => {

            const { id, title, description } = language;

            return (


                < div className="lang" key={id} >
                    <button onClick={handleLangs} > {title}</button>
                    <div className='btnDescription'>
                        {isOpen && < div> {description} </div>}
                    </div >
                </div >





            )


        })




    )

}

export default ButtonsList