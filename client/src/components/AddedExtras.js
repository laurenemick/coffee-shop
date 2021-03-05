import React from "react";
import { connect } from "react-redux";
import { removeExtra } from "../actions/extraActions";

import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Icon } from "@material-ui/core";

const AddedExtras = props => {

    return (
        <div>
            {props.coffee.extras.length ? (
                <div>
                    {props.coffee.extras.map(extra => (
                        <div className="extra">
                            <Icon onClick={() => props.removeExtra(extra)}>
                                <CloseIcon fontSize="small" />
                            </Icon>
                            <p style={{paddingLeft:"4px"}}>{extra.name}</p>
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