import React, { useState } from "react";
import { connect } from "react-redux";
import { addExtra } from "../actions";
import { v4 as uuidv4 } from 'uuid';

import { Add, Close } from "@material-ui/icons";
import { IconButton, Divider, Dialog, Toolbar, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AdditionalExtras = props => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="item-btn">
                <button className="btn" onClick={() => setOpen(true)}>
                    Add Extras
                </button>
            </div>

            <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
                <div className="toolbar">
                    <Toolbar style={{display:"flex", justifyContent:"flex-end"}}>
                        <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
                            <Close style={{color:"#fdfafb"}}/>
                        </IconButton>
                    </Toolbar>
                </div>
                {
                    props.additionalExtras.map(extra => (
                        <>
                        <div className="extra" key={uuidv4()} onClick={() => props.addExtra(props.index, extra)}>
                            <IconButton>
                                <Add />
                            </IconButton>
                            <p style={{paddingLeft:"4px"}}>{extra.name} (+ ${extra.price})</p>
                        </div>
                        <Divider />
                        </>
                    ))
                }
                {/* <div className="update-btn">
                    <button className="btn-2" onClick={() => setOpen(false)}>
                    Update Item
                    </button>
                </div> */}
            </Dialog>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        additionalExtras: state.additionalExtras,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        addExtra: (index, extra) => { dispatch(addExtra(index, extra)) },
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps 
)(AdditionalExtras);