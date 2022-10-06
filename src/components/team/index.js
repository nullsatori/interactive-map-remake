import { motion } from "framer-motion";
import { Zoom } from "@mui/material";
import React from "react";
import "./style.scss";
function Team({ openModal, images, qrCodes }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="team"
    >
      <div className="row">
        <Zoom in={true} timeout={700}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__1")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_1.jpg"]}
              alt="PERSON_1"
              draggable={false}
            />
            <p>Сапрыкин Юрий </p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={800}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__2")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_2.jpg"]}
              alt="PERSON_2"
              draggable={false}
            />
            <p>Сибирский Юрий</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={900}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__3")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_3.jpg"]}
              alt="PERSON_3"
              draggable={false}
            />
            <p>Макаров Олег</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1000}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__4")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_4.jpg"]}
              alt="PERSON_4"
              draggable={false}
            />
            <p>Шагиахметова Айгуль</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1100}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__5")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_5.jpg"]}
              alt="PERSON_5"
              draggable={false}
            />
            <p>Алимов Антон </p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1200}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__12")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_12.jpg"]}
              alt="PERSON_12"
              draggable={false}
            />
            <p>Корякин Айыллаан </p>
          </div>
        </Zoom>
      </div>
      <div className="row">
        <Zoom in={true} timeout={1300}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__6")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_6.jpg"]}
              alt="PERSON_6"
              draggable={false}
            />
            <p>Демидова Екатерина</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1400}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__7")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_7.jpg"]}
              alt="PERSON_7"
              draggable={false}
            />
            <p>Труфанов Антон</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1500}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__8")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_8.jpg"]}
              alt="PERSON_8"
              draggable={false}
            />
            <p>Черкашин Дмитрий</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1600}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__9")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_9.jpg"]}
              alt="PERSON_9"
              draggable={false}
            />
            <p>Шевякова Юлия</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1700}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__10")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_10.jpg"]}
              alt="PERSON_10"
              draggable={false}
            />
            <p>Ястина Екатерина</p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1800}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__11")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_11.jpg"]}
              alt="PERSON_11"
              draggable={false}
            />
            <p>Ветрик Яна </p>
          </div>
        </Zoom>
      </div>
      <div className="row">
        <Zoom in={true} timeout={1900}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => openModal("PERSON__13")}
          >
            <img
              style={{ backgroundColor: "grey", width: "250", height: "250" }}
              src={images["PERSON_13.jpg"]}
              alt="PERSON_13"
              draggable={false}
            />
            <p>Махаева Мария</p>
          </div>
        </Zoom>
      </div>
    </motion.div>
  );
}

export default React.memo(Team);
