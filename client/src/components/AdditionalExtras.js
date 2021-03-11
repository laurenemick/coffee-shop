import React from "react";
import { connect } from "react-redux";
import { addExtra } from "../actions/extraActions";

import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

const AdditionalExtras = props => {
    return (
        <div className="additional-extras">
            {
                props.additionalExtras.length ? (
                    <div>
                        {
                            props.additionalExtras.map(extra => (
                                <div className="extra" key={extra.id} onClick={() => props.addExtra(props.id, extra)}>
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                    <p style={{paddingLeft:"4px"}}>{extra.name} (+ ${extra.price})</p>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p></p>
                )
            }
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