
const ButtonsList = (props) => {

    const { languages, handleLangs, idDesc } = props


    // user experience to check the content of the array
    if (languages.length === 0) {
        return <h2>Non ci sono Linguaggi</h2>
    }

    return (


        languages.map((language, index) => {

            const { id, title } = language;

            return (

                <div key={id} >
                    <button className={`button ${idDesc == index && "active"}`} onClick={() => handleLangs(index)}> {title}</button>
                </div >

            )


        })







    )

}

export default ButtonsList