import { motion } from "framer-motion";
import { Zoom } from "@mui/material";
import React from "react";
import "./style.scss";


function Team({ showModal, images }) {


  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="team"
    >

        <Zoom in={true} timeout={700}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => showModal("PERSON_1")}
          >
            <img
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
            onClick={() => showModal("PERSON_2")}
          >
            <img
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
            onClick={() => showModal("PERSON_3")}
          >
            <img
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
            onClick={() => showModal("PERSON_4")}
          >
            <img
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
            onClick={() => showModal("PERSON_5")}
          >
            <img
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
            onClick={() => showModal("PERSON_12")}
          >
            <img
              src={images["PERSON_12.jpg"]}
              alt="PERSON_12"
              draggable={false}
            />
            <p>Корякин Айыллаан </p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1300}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => showModal("PERSON_6")}
          >
            <img
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
            onClick={() => showModal("PERSON_7")}
          >
            <img
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
            onClick={() => showModal("PERSON_8")}
          >
            <img
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
            onClick={() => showModal("PERSON_9")}
          >
            <img
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
            onClick={() => showModal("PERSON_10")}
          >
            <img
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
            onClick={() => showModal("PERSON_11")}
          >
            <img
              src={images["PERSON_11.jpg"]}
              alt="PERSON_11"
              draggable={false}
            />
            <p>Ветрик Яна </p>
          </div>
        </Zoom>
        <Zoom in={true} timeout={1900}>
          <div
            className="person"
            tabIndex={0}
            role="button"
            onClick={() => showModal("PERSON_13")}
          >
            <img
              src={images["PERSON_13.jpg"]}
              alt="PERSON_13"
              draggable={false}
            />
            <p>Махаева Мария</p>
          </div>
        </Zoom>
    </motion.div>
  );
}

export default React.memo(Team);
