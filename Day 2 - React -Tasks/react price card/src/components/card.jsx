import  PropTypes from "prop-types"



export default function Card(props={}){
    const {tag,amount, features}=props;
    return(
    <>
    <div className="card">
            <p className="scheme"> {tag} </p>
            <p className="amount"> {amount} </p>
            <ul>
                {features.map((elements,index) => (
                <p key={index} className={elements.isAvailable ? 'available' : 'unavailable'}> 
                {elements.isAvailable ? "✔" : " ✖"}  {elements.property} 
                </p> ))}           
            </ul>
              <button className="subcribe-button">Button</button>
        </div>
    </>
    );
}

Card.propTypes = {
    tag : PropTypes.string,
    amount : PropTypes.string,
    features: PropTypes.array,
    };