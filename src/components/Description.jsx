const Description = (props) => {

    const { languages, idDesc } = props

    return (
        languages.map((language, index) => {

            const { description, id } = language;

            return (
                < div key={id} >
                    {idDesc === index && < h4 className='btnDescription' > {description} </h4>}
                </div >
            )

        }



        ))
}

export default Description