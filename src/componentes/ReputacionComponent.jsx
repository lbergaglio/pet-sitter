import PropTypes from "prop-types";
import Puntuacion from "./Puntuacion";

const ReputacionComponent = ({item,user}) =>{
    return(
        <div style={{ border: "1px solid black" ,padding:5, width:450}}>
            <div>
                <Puntuacion score={item.valor}/>
                <h5>Comentario:</h5>
                <h5>{item.opinion}</h5>     
                <div style={{ flex: 1 }}>
                    <button>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};  

export default ReputacionComponent;

ReputacionComponent.prototypes = {
    item: PropTypes.object,
    user: PropTypes.object,
};