import React from "react";
import { connect } from "react-redux";
import { removeExtra } from "../actions/extraActions";

const AddedExtras = props => {

    return (
        <div>
            {props.coffee.extras.length ? (
                <div>
                    {props.coffee.extras.map(extra => (
                        <div>
                            <button onClick={() => props.removeExtra(extra)}>X</button>
                            {extra.name}
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
        coffee: state.coffee
    };
};

export default connect(
    mapStateToProps, 
    { removeExtra } 
)(AddedExtras);