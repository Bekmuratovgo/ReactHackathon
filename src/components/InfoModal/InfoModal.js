import React from 'react';
import './InfoModal.css';

const InfoModal = (props) => {
        console.log(props);// css    //img des
    return (
        <div className="main-modal-1">
            <div className="inner-modal-1">
                <div className="close-1">
                    <button onClick={props.handleCloseModalSecond}>&times;</button>
                </div>
                <h3>{props.infoDetails.name}</h3>
                <img className="img-render-1" src={props.infoDetails.image} />
                <h4>{props.infoDetails.description}</h4>

                {/* <div
                    // asd={props.infoDetails.img}
                    fgh={props.infoDetails.name}

                    jkl={props.infoDetails.description}
                /> */}
            </div>
        </div>
    );
};

export default InfoModal;

