import PropTypes from "prop-types";

const NotificacionesComponent = ({item,user}) =>{
    return(
        <div style={{ border: "1px solid black" ,padding:5, width:450}}>
            <div>
                <h5>Cliente: {item.cliente.email}</h5>
                <h5>PetSitter: {item.petSitter.email}</h5>
                <h5>Servicio: {item.actividades}</h5>
                <h5>Frecuencia: {item.frecuencia}</h5>
                <h5>Horario: {item.horarios}</h5>
                <h5>Mascota: {item.animales}</h5>                
                <div style={{ flex: 1 }}>
                    
                    <button
                    
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};  

export default NotificacionesComponent;

NotificacionesComponent.prototypes = {
    item: PropTypes.object,
    user: PropTypes.object,
};
