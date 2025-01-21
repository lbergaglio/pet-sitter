import PropTypes from "prop-types";
import ReputacionComponent from "./ReputacionComponent";

const ReputacionComponentList = ({itemList,user}) =>{
    return(
        <div style={{display:"grid",gridTemplateColumns: "repeat(3,1fr)",gap: 20,
            padding: 20}}>
            {itemList.map((item) => (
                <ReputacionComponent key={item.id} item={item} user={user}/>
            ))}
        </div>
    );
};

export default ReputacionComponentList;

ReputacionComponentList.prototypes = {
    itemList: PropTypes.arrayOf(PropTypes.object),
};
