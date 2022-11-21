import React from "react";
import img from "react-cool-img";
import NiceModal, { muiDialogV5, useModal } from "@ebay/nice-modal-react";
import { Dialog, Slide } from "@mui/material";
import { cn as bem } from "@bem-react/classname";
import useWindowSize from "../../app/utils";
import "./style.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />
  );
});

export const SecondaryModal = NiceModal.create(
  ({ id, data, qrCodes, images, regions }) => {
    const modal = useModal();
    const cn = bem("secondaryModal");
    const [width] = useWindowSize();

    return (
      <Dialog
        TransitionComponent={Transition}
        {...muiDialogV5(modal)}
        className={cn('')}
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

          <img src={images[`${id}.jpg`]} alt="photo" />
          <div className={cn("info-summary")}>
            <p>
              <b>Региональный представитель:</b>
            </p>
            <p>
              <b>{data[id].name}</b> {data[id].position}
            </p>
            <div className="wrapper">
              <div className="item">
                <img src={regions[`${id}.svg`]} />
                <p>
                  <b>Регион:</b> {data[id].region}
                </p>
              </div>
              {data[id].participants &&
                <div className="item">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6326 30.6957C18.8446 30.6957 21.4484 28.092 21.4484 24.8801C21.4484 21.6681 18.8446 19.0642 15.6326 19.0642C12.4207 19.0642 9.81689 21.6681 9.81689 24.8801C9.81689 28.092 12.4207 30.6957 15.6326 30.6957Z"
                      stroke="#4D5759"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M49.3342 55.0945L55.15 35.3413H33.0684L27.2527 55.0945H49.3342Z"
                      stroke="#4D5759"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.0428 45.8027H43.5186"
                      stroke="#4D5759"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4113 1.62842C27.8088 1.62842 27.2308 1.86766 26.8048 2.2937C26.3788 2.71974 26.1395 3.29768 26.1395 3.90019V20.1772C26.1395 20.7798 26.3788 21.3577 26.8048 21.7837C27.2308 22.2098 27.8088 22.449 28.4113 22.449H33.0684V29.4235L40.0428 22.449H52.8215C53.424 22.449 54.0018 22.2098 54.4278 21.7837C54.8539 21.3577 55.0932 20.7798 55.0932 20.1772V3.90019C55.0788 3.30221 54.8348 2.73274 54.4119 2.30978C53.9889 1.88683 53.4194 1.64283 52.8215 1.62842H28.4113Z"
                      stroke="#B1EC52"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.437 55.0947H27.2527"
                      stroke="#4D5759"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.76004 43.4742L8.01073 50.4486H15.6326C16.2487 50.4486 16.8394 50.6933 17.275 51.1289C17.7106 51.5645 17.9554 52.1554 17.9554 52.7714C17.9554 53.3875 17.7106 53.9784 17.275 54.414C16.8394 54.8496 16.2487 55.0945 15.6326 55.0945H4.63718C4.25585 55.096 3.87802 55.022 3.52528 54.8771C3.17255 54.7322 2.85189 54.5192 2.58172 54.2501C2.31155 53.981 2.0971 53.661 1.95082 53.3089C1.80455 52.9567 1.72925 52.5793 1.72925 52.198C1.73074 51.9566 1.76134 51.7162 1.82021 51.4822V51.4822L5.30732 37.5335C5.46817 36.9079 5.83195 36.3534 6.3417 35.9567C6.85146 35.56 7.47837 35.3436 8.12429 35.3413H23.2316C23.8766 35.3422 24.5028 35.5584 25.011 35.9556C25.5193 36.3527 25.8804 36.9079 26.0372 37.5335V37.5335L28.9793 49.3128"
                      stroke="#4D5759"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.8984 7.44385H49.3343"
                      stroke="#B1EC52"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.8984 12.0898H49.3343"
                      stroke="#B1EC52"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.8984 16.7471H43.5185"
                      stroke="#B1EC52"
                      strokeWidth="2.77603"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <b>
                      Количество участников <br/> проекта: &nbsp;
                    </b>
                    {data[id].participants}
                  </p>
                </div>
              }
            </div>
            {data[id].partner && (
              <div className="startup partner">
                <h2>
                  <b>Индустриальный партнер</b>
                </h2>
                <p>
                  <b>{data[id].partner.name}</b>
                </p>
                <p>
                  <b>Краткое описание:</b> {data[id].partner.info}
                </p>
              </div>
            )}
            <img src={qrCodes[`${id}.png`]} alt="qr-code" className="qrCode" />
          </div>
        </div>
      </Dialog>
    );
  }
);

export default SecondaryModal;
