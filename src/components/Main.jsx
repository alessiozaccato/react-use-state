import ButtonsList from "./ButtonsList"

const Main = (props) => {
    return (
        <div className="buttonsContainer">
            <ButtonsList languages={props.languages} />
        </div>

    )
}

export default Main
