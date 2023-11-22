

function ProfileCard( props ){

let {titulo, arroba, img}  = props;

    return (
        <div>
                <img scr={img} alt="logo"/>
                <h3>Titulo {props.titulo}</h3>
                <p>{props.arroba}</p>          
            </div>
    )
}

export default ProfileCard;