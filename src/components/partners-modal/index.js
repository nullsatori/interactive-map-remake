import React from "react";
import img from "react-cool-img";
import NiceModal, { muiDialog, useModal } from "@ebay/nice-modal-react";
import { Dialog, Slide } from "@mui/material";
import { cn as bem } from "@bem-react/classname";
import useWindowSize from "../../app/utils";
import "./style.scss"

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />
  );
});

export const PartnersModal = NiceModal.create(
  ({ id, data, qrCode, images, regions }) => {
    const modal = useModal();
    const cn = bem("partnersModal");
    const [width] = useWindowSize();

    return (
      <Dialog
        TransitionComponent={Transition}
        {...muiDialog(modal)}
        className={cn("")}
      >
        {(width < 768 && (
          <div className="exit" onClick={() => modal.hide()}>
            Закрыть
          </div>
        )) || (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => modal.hide()}
            className='exitCircle'
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.6808 7.31918C32.9219 -2.43973 17.0781 -2.43973 7.31918 7.31918C-2.43973 17.0781 -2.43973 32.9219 7.31918 42.6808C17.0781 52.4397 32.9219 52.4397 42.6808 42.6808C52.4397 32.9219 52.4397 17.0781 42.6808 7.31918ZM40.3236 9.67637C48.7809 18.1336 48.7809 31.8661 40.3236 40.3238C31.8664 48.7811 18.1339 48.7811 9.67618 40.3238C1.21846 31.8666 1.21893 18.1341 9.67618 9.67637C18.1334 1.21912 31.8659 1.21912 40.3236 9.67637ZM22.6433 25.0001L16.147 18.5038C15.4962 17.8537 15.4962 16.7966 16.147 16.1466C16.797 15.4958 17.8541 15.4958 18.5042 16.1466L25.0005 22.6429L31.4968 16.1466C32.1468 15.4958 33.204 15.4958 33.854 16.1466C34.5048 16.7966 34.5048 17.8538 33.854 18.5038L27.3577 25.0001L33.854 31.4964C34.5048 32.1465 34.5048 33.2036 33.854 33.8536C33.2039 34.5044 32.1468 34.5044 31.4968 33.8536L25.0005 27.3573L18.5042 33.8536C17.8541 34.5044 16.797 34.5044 16.147 33.8536C15.4962 33.2036 15.4962 32.1464 16.147 31.4964L22.6433 25.0001Z"
              fill="#4D5759"
            />
          </svg>
        )}
        <div className={cn("info")}>
          <div className={cn("info-summary")}>
            <div className="title">
              <img src={images[`${id}.png`]} alt="logo" />
              <p>
                <b>Компания: {data[id].name}</b>
              </p>
              <div>
                <img src={regions[`${id}.svg`]} alt=""/>
                <p>
                  Местоположение: <br /> {data[id].location}
                </p>
              </div>
              <img src={qrCode} alt="qr-code" className="qrCode" />
            </div>
            <p>
              <b> Краткое описание: </b> {data[id].summary}
            </p>
            <div className="request">
              <p>
                <b>Запрос: {data[id].request}</b>
              </p>
              <div>
                <p>
                  <b>Формат взаимодействия:</b> {data[id].cooperation}
                </p>
              </div>
            </div>
            <p>{data[id].extra}</p>
          </div>
        </div>
      </Dialog>
    );
  }
);

export default PartnersModal;
