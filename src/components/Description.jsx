const Description = (props) => {

    const { languages, idDesc } = props

    return (
        languages.map((language, index) => {

            const { description, id } = language;

            return (
                < div key={id} >
                    {idDesc === index && <div className='btnDescription' >< h4 > {description} </h4></div>}
                </div >
            )

        }



        ))
}

export default Description