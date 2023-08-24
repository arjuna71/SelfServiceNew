import './button.css'
import '../Layout/Header.css'


const Button = ({ button, doSomethingAfterClick, size, ...props }) => {
    return (
        <>
            <button
                type="button"
                aria-label={button}
                name={button}
                onClick={doSomethingAfterClick}
                //onClick={(event)=> {handleClick(event)}}
                className={`customButton ${size}`}
                {...props}
            >
                {props.children}
                {button}
                {/* {img1 !== '' ? <img src={logo} alt="buttonpng" border="0" name={`img${button}`} /> : " "} */}
            </button>

        </>
    );
}

export default Button

