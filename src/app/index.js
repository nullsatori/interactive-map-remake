import React, { useCallback, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/layout";
import { useIdleTimer } from "react-idle-timer";
import MainMap from "../components/main-map";
import ParticipantsMap from "../components/participants-map";
import PartnersMap from "../components/partners-map";
import ResearchMap from "../components/research-map";
import Team from "../components/team";
import PartnersModal from "../components/partners-map-modal";
import { data } from "./data";
import NiceModal from "@ebay/nice-modal-react";
import { TableModal } from "../components/table-modal";
import { ResearchModal } from "../components/research-modal";

function App() {
  function onIdle() {
    if (location.pathname !== "/") navigate("/");
  }

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  NiceModal.register("PartnersModal", PartnersModal);
  NiceModal.register("TableModal", TableModal);
  NiceModal.register("ResearchModal", ResearchModal);

  const qrCodes = importAll(
    require.context("../images/qr-codes", false, /\.png$/)
  );
  const mainMapImages = importAll(
    require.context("../images/main-map", false, /\.jpg$/)
  );
  const headerImages = importAll(
    require.context("../images/header", false, /\.png$/)
  );
  const teamImages = importAll(
    require.context("../images/team", false, /\.jpg$/)
  );
  const partnersImages = importAll(
    require.context("../images/regional-partners", false, /\.png$/)
  );

  const navigate = useNavigate();
  const location = useLocation();

  useIdleTimer({ onIdle, timeout: 180000 });

  const callbacks = {
    showModal: useCallback((id) => {
      console.log(id);
      switch (id) {
        case "TableModal":
          NiceModal.show("TableModal");
          break;
        case "ResearchModal":
          NiceModal.show("ResearchModal", {
            qrCode: qrCodes["qr-code-research.png"],
          });
          break;
        case id.match(/PERSON_\d]/gi):
          NiceModal.show("TeamModal", {
            data: data.team,
            qrCodes: qrCodes,
            images: teamImages,
            id: id,
          })
        case id.match(/RU_[A-Z]{2}[A-Z]?\d?_RP/gi)[0]:
          NiceModal.show("PartnersModal", {
            data: data.partners,
            qrCode: qrCodes["qr-code-person4.png"],
            images: partnersImages,
            id: id,
          });
          break;
      }
    }, []),
    openSideBar: useCallback(() => {}, []),
  };

  return (
    <>
      <NiceModal.Provider>
        <Routes>
          <Route path={"/*"} element={<Layout images={headerImages} />}>
            <Route
              path={""}
              element={
                <MainMap
                  showModal={callbacks.showModal}
                  openSideBar={callbacks.openSideBar}
                  qrCodes={qrCodes}
                  images={mainMapImages}
                />
              }
            />
            <Route
              path={"participants"}
              element={<ParticipantsMap qrCodes={qrCodes} />}
            />
            <Route
              path={"regional-partners"}
              element={
                <PartnersMap
                  showModal={callbacks.showModal}
                  qrCodes={qrCodes}
                />
              }
            />
            <Route
              path={"research"}
              element={
                <ResearchMap
                  qrCodes={qrCodes}
                  showModal={callbacks.showModal}
                />
              }
            />
            <Route
              path={"team"}
              element={
                <Team
                  openModal={callbacks.openModal}
                  images={teamImages}
                  qrCodes={qrCodes}
                />
              }
            />
          </Route>
        </Routes>
      </NiceModal.Provider>
    </>
  );
}

export default React.memo(App);
