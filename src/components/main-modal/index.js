import React from "react";
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



export const MainModal = NiceModal.create(
  ({ id, data, qrCodes, images, regions }) => {
    const modal = useModal();
    const cn = bem("mainModal");
    const [width] = useWindowSize();

    const startups =
      data[id].startups &&
      Object.values(data[id].startups).map((d, count) => {
        const info = d.info.map((d) => <p key={d}>{d}</p>);
        return (
          <div className="startup">
            <div className="startup-info">
              {images[`${id}_LOGO_${count + 1}.jpg`] && (
                <img
                  src={images[`${id}_LOGO_${count + 1}.jpg`]}
                  className="startup-logo"
                />
              )}
              <h2>{d.name}</h2>
            </div>
            {info}
          </div>
        );
      });
    const partners =
      data[id].partner &&
      Object.values(data[id].partner).map((d) => (
        <div className="startup">
          <p>
            <b>{d.name}</b>
          </p>
          <p>
            <b>Краткое описание: </b>
            {d.info}
          </p>
        </div>
      ));

    return (
      <Dialog
        TransitionComponent={Transition}
        {...muiDialogV5(modal)}
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
          <div className="images">
            <img src={images[`${id}.jpg`]} className="modal-logo" />
            {id === "RU_LEN" && (
              <img src={images[`${id}2.jpg`]} className="modal-logo" />
            )}
            <img src={images[`${id}_PARK.jpg`]} className="modal-tech" />
          </div>
          <div className="wrapper">
            <h2>
              Региональный оператор: <br /> {data[id].name}
            </h2>
            <div className={cn("info-summary")}>
              <div className={cn("info-summary-items")}>
                <div className="item">
                  <img src={regions[`${id}.svg`]} className="qrCode" />
                  <p>
                    <b>Регион:</b> {data[id].region}
                  </p>
                </div>
                <div className="item">
                  <svg
                    width="63"
                    height="62"
                    viewBox="0 0 63 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.874512 12.2842C0.874512 5.49981 6.37433 0 13.1587 0H62.25V49.0913C62.25 55.8756 56.7502 61.3755 49.9658 61.3755H13.1587C6.37433 61.3755 0.874512 55.8756 0.874512 49.0913V12.2842Z"
                      fill="white"
                    />
                    <path
                      d="M43.2918 37.2869V48.1717C43.2918 48.6159 43.1154 49.0418 42.8013 49.3558C42.4873 49.6699 42.0614 49.8463 41.6172 49.8463H14.8239C14.3797 49.8463 13.9537 49.6699 13.6397 49.3558C13.3256 49.0418 13.1493 48.6159 13.1493 48.1717V17.1919C13.1493 16.7478 13.3256 16.3218 13.6397 16.0077C13.9537 15.6937 14.3797 15.5173 14.8239 15.5173H18.173"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M38.2679 15.5173H41.6171C42.0612 15.5173 42.4871 15.6937 42.8011 16.0077C43.1152 16.3218 43.2916 16.7478 43.2916 17.1919V23.053"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M39.9429 40.6361V46.4971H16.4987V18.8665H18.1732"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M38.2679 18.8665H39.9425V26.4021"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M34.0823 14.68H31.5704C31.5704 13.7917 31.2175 12.9398 30.5894 12.3117C29.9613 11.6836 29.1095 11.3308 28.2213 11.3308C27.333 11.3308 26.4811 11.6836 25.853 12.3117C25.2249 12.9398 24.8721 13.7917 24.8721 14.68H22.3602C21.694 14.68 21.0551 14.9446 20.584 15.4157C20.113 15.8867 19.8483 16.5257 19.8483 17.1919V19.7037H36.5942V17.1919C36.5942 16.5257 36.3295 15.8867 35.8584 15.4157C35.3873 14.9446 34.7485 14.68 34.0823 14.68Z"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M28.2206 13.8425V15.5171"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M45.8042 24.7275L34.9194 35.5035L30.7329 31.317L27.3837 34.6662L34.7854 42.3107L49.1533 28.0767L45.8042 24.7275Z"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <b>Выручка: </b> {data[id].revenue}
                  </p>
                </div>
                <div className="item">
                  <svg
                    width="63"
                    height="62"
                    viewBox="0 0 63 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.721436 12.6597C0.721436 5.8753 6.22125 0.375488 13.0056 0.375488H62.0969V49.4668C62.0969 56.2511 56.5971 61.7509 49.8127 61.7509H13.0056C6.22125 61.7509 0.721436 56.2511 0.721436 49.4668V12.6597Z"
                      fill="white"
                    />
                    <path
                      d="M18.8882 20.2039V22.7162C18.8882 24.4938 19.5943 26.1985 20.8512 27.4554C22.1081 28.7124 23.8128 29.4184 25.5903 29.4184C27.3679 29.4184 29.0726 28.7124 30.3296 27.4554C31.5865 26.1985 32.2926 24.4938 32.2926 22.7162V18.5262C32.2904 16.7501 31.5833 15.0476 30.3267 13.7924C29.07 12.5373 27.3665 11.8323 25.5903 11.8323H20.5657C20.1316 11.8323 19.7154 12.0047 19.4084 12.3117C19.1015 12.6186 18.929 13.0349 18.929 13.469V14.2873C18.929 15.3985 19.3705 16.4642 20.1563 17.25C20.942 18.0357 22.0077 18.4773 23.1189 18.4773H29.8212"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.219 50.3433V41.9717L15.5414 40.3022"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5658 31.0879L25.5904 34.435"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5903 34.4348V50.3433"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.8049 32.7654L30.615 31.0877V26.8979"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.6149 31.0879L25.5903 34.435"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M50.7136 50.3434H11.3596V39.0831C11.3588 37.9585 11.6817 36.8573 12.2897 35.9112C12.8977 34.9651 13.7652 34.214 14.7885 33.7475L20.5659 31.1207V26.9307"
                      stroke="#4D5759"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M49.8705 36.1125H31.4497V50.3516H49.8705V36.1125Z"
                      stroke="#B1EC52"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.0115 36.1125V32.7654H37.3175V36.1125"
                      stroke="#B1EC52"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.4497 42.8147H49.8705"
                      stroke="#B1EC52"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.4746 45.3189V42.8147"
                      stroke="#B1EC52"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.854 45.3189V42.8147"
                      stroke="#B1EC52"
                      strokeWidth="1.63668"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <b>Руководитель:</b> <br /> {data[id].person}
                  </p>
                </div>
                <div className="item">
                  {data[id].investment && (
                    <>
                      <svg
                        width="63"
                        height="62"
                        viewBox="0 0 63 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.874756 12.6597C0.874756 5.8753 6.37457 0.375488 13.1589 0.375488H62.2502V49.4668C62.2502 56.2511 56.7504 61.7509 49.966 61.7509H13.1589C6.37457 61.7509 0.874756 56.2511 0.874756 49.4668V12.6597Z"
                          fill="white"
                        />
                        <path
                          d="M33.4544 45.9508V44.239C33.4544 44.239 36.0221 42.3132 36.0221 39.9595V36.5359"
                          stroke="#4D5759"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.6069 26.2651L22.3274 29.6887C21.112 30.8014 20.6156 31.4005 20.6156 33.1123V45.9508"
                          stroke="#4D5759"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.7598 50.2219V45.9424H35.166V50.2219"
                          stroke="#4D5759"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.6071 32.2564V13.4266C26.6071 12.9726 26.7875 12.5373 27.1085 12.2162C27.4295 11.8952 27.8649 11.7148 28.3189 11.7148H42.0133C42.4673 11.7148 42.9027 11.8952 43.2237 12.2162C43.5447 12.5373 43.7251 12.9726 43.7251 13.4266V34.8241C43.7251 35.2781 43.5447 35.7135 43.2237 36.0345C42.9027 36.3555 42.4673 36.5359 42.0133 36.5359H30.8866"
                          stroke="#B1EC52"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39.4456 11.7063V36.5274"
                          stroke="#B1EC52"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.0392 35.6799L30.8864 28.8328C32.4612 27.2579 34.9091 31.1865 33.0347 33.5316L30.8864 35.6799V38.2476C30.9224 38.7064 30.8586 39.1676 30.6993 39.5993C30.54 40.031 30.289 40.4231 29.9636 40.7485C29.6382 41.0739 29.2462 41.3248 28.8144 41.4841C28.3827 41.6434 27.9215 41.7073 27.4628 41.6712"
                          stroke="#4D5759"
                          strokeWidth="1.88848"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>
                        <b>Инвестиции:</b> <br /> {data[id].investment}
                      </p>
                    </>
                  )}
                </div>
                <div className="item">
                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.721436 13.0352C0.721436 6.25079 6.22125 0.750977 13.0056 0.750977H62.0969V49.8423C62.0969 56.6266 56.5971 62.1264 49.8127 62.1264H13.0056C6.22125 62.1264 0.721436 56.6266 0.721436 49.8423V13.0352Z"
                      fill="white"
                    />
                    <path
                      d="M18.7439 50.5892V40.0159"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7439 50.5892V40.0159"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.9955 50.5972V37.5672H22.7905C23.2122 37.5672 23.6167 37.3998 23.9148 37.1016C24.213 36.8034 24.3805 36.3989 24.3805 35.9772V29.4662C24.3805 28.6039 24.0379 27.7768 23.4282 27.167C22.8184 26.5572 21.9913 26.2146 21.1289 26.2146H16.2476C15.3853 26.2146 14.5582 26.5572 13.9484 27.167C13.3386 27.7768 12.9961 28.6039 12.9961 29.4662V35.9772C12.9961 36.3989 13.1636 36.8034 13.4618 37.1016C13.76 37.3998 14.1644 37.5672 14.5861 37.5672H15.3811V50.5893"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.1915 20.9697C21.4074 19.6392 20.5038 18.3856 19.1733 18.1696C17.8428 17.9536 16.5891 18.8571 16.3731 20.1876C16.1571 21.5181 17.0607 22.7718 18.3912 22.9877C19.7218 23.2037 20.9755 22.3003 21.1915 20.9697Z"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.7582 44.897V34.3235"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.7582 44.897V34.3235"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.0101 44.897V31.8829H35.8051C36.2268 31.8829 36.6313 31.7153 36.9295 31.4171C37.2277 31.1189 37.3951 30.7146 37.3951 30.2929V23.7897C37.3951 22.9266 37.0528 22.0988 36.4433 21.4877C35.8337 20.8767 35.0067 20.5324 34.1436 20.5303H29.2623C28.3992 20.5324 27.5721 20.8767 26.9626 21.4877C26.353 22.0988 26.0107 22.9266 26.0107 23.7897V30.2929C26.0107 30.7146 26.1783 31.1189 26.4765 31.4171C26.7746 31.7153 27.179 31.8829 27.6007 31.8829H28.3957V44.897"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.2101 15.2729C34.426 13.9424 33.5226 12.6888 32.1921 12.4728C30.8616 12.2568 29.6079 13.1603 29.3919 14.4908C29.1759 15.8213 30.0795 17.075 31.41 17.291C32.7406 17.5069 33.9941 16.6034 34.2101 15.2729Z"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.7722 50.5892V40.0159"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.7722 50.5892V40.0159"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M48.0319 50.5972V37.5672H48.8269C49.039 37.5725 49.2501 37.5353 49.4476 37.4578C49.6451 37.3802 49.8251 37.264 49.977 37.1158C50.1288 36.9676 50.2496 36.7906 50.332 36.595C50.4143 36.3995 50.4567 36.1894 50.4567 35.9772V29.4662C50.4546 28.6031 50.1103 27.776 49.4992 27.1664C48.8882 26.5569 48.0603 26.2146 47.1972 26.2146H42.3159C41.4535 26.2146 40.6264 26.5572 40.0166 27.167C39.4069 27.7768 39.0643 28.6039 39.0643 29.4662V35.9772C39.0643 36.1894 39.1067 36.3995 39.189 36.595C39.2714 36.7906 39.3921 36.9676 39.5439 37.1158C39.6958 37.264 39.8758 37.3802 40.0733 37.4578C40.2708 37.5353 40.4819 37.5725 40.694 37.5672H41.489V50.5893"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M47.2166 20.9722C47.4326 19.6416 46.529 18.3879 45.1985 18.1719C43.868 17.956 42.6142 18.8595 42.3983 20.19C42.1823 21.5206 43.0859 22.7742 44.4164 22.9902C45.7469 23.2062 47.0006 22.3027 47.2166 20.9722Z"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <b>Количество участников проекта:</b> {data[id].members}
                  </p>
                </div>
                <div className="item">
                  <svg
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.874756 13.0352C0.874756 6.25079 6.37457 0.750977 13.1589 0.750977H62.2502V49.8423C62.2502 56.6266 56.7504 62.1264 49.966 62.1264H13.1589C6.37457 62.1264 0.874756 56.6266 0.874756 49.8423V13.0352Z"
                      fill="white"
                    />
                    <path
                      d="M19.6423 50.5973V38.0425"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.4521 26.3145V50.5973"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.6423 50.5973V38.0425"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.8244 50.5973V26.3145"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.452 37.1994H13.8151C13.381 37.1994 12.9647 37.027 12.6577 36.7201C12.3508 36.4131 12.1783 35.9967 12.1783 35.5626V25.5124C12.1783 24.6239 12.5307 23.7715 13.1583 23.1424C13.7858 22.5134 14.6371 22.1589 15.5256 22.1567H23.8983C24.7876 22.1589 25.6397 22.5132 26.2686 23.142C26.8974 23.7708 27.2517 24.6231 27.2538 25.5124V35.5626C27.2538 35.9967 27.0814 36.4131 26.7744 36.7201C26.4674 37.027 26.0511 37.1994 25.617 37.1994H23.9801"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.8246 33.8521H15.4521"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.642 18.7765C21.4907 18.7765 22.9894 17.278 22.9894 15.4292C22.9894 13.5805 21.4907 12.0818 19.642 12.0818C17.7933 12.0818 16.2947 13.5805 16.2947 15.4292C16.2947 17.278 17.7933 18.7765 19.642 18.7765Z"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.7174 50.5973V38.0425"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.5274 26.3145V50.5973"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.7174 50.5973V38.0425"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M38.9003 50.5972V40.113"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.5272 37.1994H28.8494C28.4153 37.1994 27.9989 37.027 27.692 36.7201C27.385 36.4131 27.2125 35.9967 27.2125 35.5626V25.5124C27.2125 24.6239 27.565 23.7715 28.1925 23.1424C28.82 22.5134 29.6713 22.1589 30.5599 22.1567H38.9325C39.8211 22.1589 40.6724 22.5134 41.2999 23.1424C41.9274 23.7715 42.2799 24.6239 42.2799 25.5124V26.3962"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.5526 33.8521H30.5274"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.718 18.7765C36.5667 18.7765 38.0654 17.278 38.0654 15.4292C38.0654 13.5805 36.5667 12.0818 34.718 12.0818C32.8693 12.0818 31.3705 13.5805 31.3705 15.4292C31.3705 17.278 32.8693 18.7765 34.718 18.7765Z"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.2618 50.5972H51.4632"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M43.0903 41.3899C47.2533 41.3899 50.6281 38.0152 50.6281 33.8522C50.6281 29.6892 47.2533 26.3145 43.0903 26.3145C38.9274 26.3145 35.5526 29.6892 35.5526 33.8522C35.5526 38.0152 38.9274 41.3899 43.0903 41.3899Z"
                      stroke="#B1EC52"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M43.0905 29.6616V38.0424"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M47.2728 33.8521H38.9003"
                      stroke="#4D5759"
                      strokeWidth="1.88848"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <b>Рабочие места: &nbsp;</b>
                  </p>
                  <p>{data[id].workplaces}</p>
                </div>
              </div>
              {width >= 768 && (
                <div className="codes">
                  <img
                    src={qrCodes[`${id}.png`]}
                    className="qrCode"
                    alt="qr-code"
                  />
                  {["RU_PER", "RU_TAM", "RU_LEN"].indexOf(id) > -1 && (
                    <img
                      src={qrCodes[`${id}2.png`]}
                      className="qrCode"
                      alt="qr-code-second"
                    />
                  )}
                </div>
              )}
            </div>
            {width < 768 && (
              <div className="codes">
                <img
                  src={qrCodes[`${id}.png`]}
                  className="qrCode"
                  alt="qr-code"
                />
                {["RU_PER", "RU_TAM", "RU_LEN"].indexOf(id) > -1 && (
                  <img
                    src={qrCodes[`${id}2.png`]}
                    className="qrCode"
                    alt="qr-code-second"
                  />
                )}
              </div>
            )}
            <div className={cn("content")}>
              {startups && (
                <div className={cn("info-startups")}>{startups}</div>
              )}

              {(partners && partners.length > 1 && (
                <h2>Индустриальные партнеры</h2>
              )) ||
                (partners && <h2>Индустриальный партнер</h2>)}
              {partners}
            </div>
          </div>

        </div>
      </Dialog>
    );
  }
);

export default MainModal;
