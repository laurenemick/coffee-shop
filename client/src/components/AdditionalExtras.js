import React from "react";
import { connect } from "react-redux";
import { addExtra } from "../actions/extraActions";

const AdditionalExtras = props => {
    return (
        <div>
            <h4>Extras</h4>
            {props.additionalExtras.length ? (
                <div>
                    {props.additionalExtras.map(extra => (
                        <div className="additional-extra">
                            <p>{extra.name} (+ ${extra.price})</p>
                            <button onClick={() => props.addExtra(extra)}>Add</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        additionalExtras: state.additionalExtras,
    };
};

export default connect(
    mapStateToProps, 
    { addExtra } 
)(AdditionalExtras);