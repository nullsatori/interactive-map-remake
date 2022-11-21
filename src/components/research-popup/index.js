import {Popover} from "@mui/material";
import NiceModal, {muiDialogV5, useModal} from "@ebay/nice-modal-react";
import React from "react";
import './style.scss';

export const ResearchPopup = NiceModal.create(({ id, data }) => {
    const modal = useModal();
    const listItems = Object.values(data[id]).map((d) => (
        <p key={d}>{d}</p>
    ));

    return (
        <Popover
            anchorReference="anchorPosition"
            anchorPosition={{ top: 220, left: 350 }}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            {...muiDialogV5(modal)}
            className="dialog__rd"

        >
            <div className="rd__modal__info">
                {listItems}
            </div>
        </Popover>
    );
});
