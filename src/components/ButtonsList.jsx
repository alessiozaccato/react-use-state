
const ButtonsList = (props) => {

    const { languages, handleLangs, idDesc } = props


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