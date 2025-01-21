import PropTypes from "prop-types";
import NotificacionesComponent from "./NotificacionesComponent";

const NotificacionesComponentList = ({itemList,user}) =>{
    return(
        <div style={{display:"grid",gridTemplateColumns: "repeat(3,1fr)",gap: 20,
            padding: 20}}>
            {itemList.map((item) => (
                <NotificacionesComponent key={item.id} item={item} user={user}/>
            ))}
        </div>
    );
};

export default NotificacionesComponentList;

NotificacionesComponentList.prototypes = {
    itemList: PropTypes.arrayOf(PropTypes.object),
};
