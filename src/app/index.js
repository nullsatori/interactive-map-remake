import React, { useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/layout";
import { useIdleTimer } from "react-idle-timer";
import MainMap from "../components/main-map";
import ParticipantsMap from "../components/participants-map";
import PartnersMap from "../components/partners-map";
import ResearchMap from "../components/research-map";
import Team from "../components/team";
import PartnersModal from "../components/partners-modal";
import { data } from "./data";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { TableModal } from "../components/table-modal";
import { ResearchModal } from "../components/research-modal";
import { TeamModal } from "../components/team-modal";
import { ResearchPopup } from "../components/research-popup";
import MainModal from "../components/main-modal";
import SecondaryModal from "../components/secondary-modal";

NiceModal.register("PartnersModal", PartnersModal);
NiceModal.register("TableModal", TableModal);
NiceModal.register("ResearchModal", ResearchModal);
NiceModal.register("TeamModal", TeamModal);
NiceModal.register("ResearchPopup", ResearchPopup);
NiceModal.register("MainModal", MainModal);
NiceModal.register("SecondaryModal", SecondaryModal);

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const popup = useModal("ResearchPopup");
  const images = {
    qrCodes: importAll(require.context("../images/qr-codes", false, /\.png$/)),
    mainMapImages: importAll(
      require.context("../images/main-map", false, /\.jpg$/)
    ),
    regions: importAll(require.context("../images/regions", false, /\.svg$/)),
    headerImages: importAll(
      require.context("../images/header", false, /\.png$/)
    ),
    teamImages: importAll(require.context("../images/team", false, /\.jpg$/)),
    partnersImages: importAll(
      require.context("../images/regional-partners", false, /\.png$/)
    ),
  };

  function onIdle() {
    if (location.pathname !== "/") {
      navigate("/");
      window.location.reload();
    } else window.location.reload();
  }

  function importAll(r) {
    let images = {};
    r.keys().map(item => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  useIdleTimer({ onIdle, timeout: 180000 });

  const callbacks = {
    showModal: useCallback((id) => {
      switch (true) {
        case /TableModal/.test(id):
          NiceModal.show("TableModal");
          break;
        case /ResearchModal/.test(id):
          NiceModal.show("ResearchModal", {
            qrCode: images.qrCodes["qr-code-research.png"],
          });
          break;
        case /^PERSON_\d\d?$/gi.test(id):
          NiceModal.show("TeamModal", {
            data: data.team,
            qrCodes: images.qrCodes,
            images: images.teamImages,
            id: id,
          });
          break;
        case /^RU_[A-Z]{2}[A-Z]?\d?_RP$/gi.test(id):
          NiceModal.show("PartnersModal", {
            data: data.partners,
            qrCode: images.qrCodes["PERSON_4.png"],
            images: images.partnersImages,
            id: id,
            regions: images.regions
          });
          break;
        case /^RU_[A-Z]{2}[A-Z]?_RD$/gi.test(id):
          NiceModal.show("ResearchPopup", {
            data: data.research,
            id: id,
          });
          break;
        case /^RU_[A-Z]{2}[A-Z]?$/gi.test(id):
          NiceModal.show("MainModal", {
            data: data.main,
            qrCodes: images.qrCodes,
            images: images.mainMapImages,
            id: id,
            regions: images.regions
          });
          break;
        case /^RU_[A-Z]{2}[A-Z]?_PRED$/gi.test(id):
          NiceModal.show("SecondaryModal", {
            data: data.secondary,
            qrCodes: images.qrCodes,
            images: images.mainMapImages,
            id: id,
            regions: images.regions
          });
          break;
        default:
          return 0;
      }
    }, []),
    closeModal: useCallback(() => {
      popup.hide();
    }, [popup]),

  };

  return (
    <NiceModal.Provider>
      <Routes>
        <Route path={"/*"} element={<Layout images={images.headerImages} />}>
          <Route
            path={""}
            element={
              <MainMap
                showModal={callbacks.showModal}
                qrCodes={images.qrCodes}
                images={images.mainMapImages}
              />
            }
          />
          <Route
            path={"participants"}
            element={<ParticipantsMap qrCodes={images.qrCodes} />}
          />
          <Route
            path={"regional-partners"}
            element={
              <PartnersMap
                showModal={callbacks.showModal}
                qrCodes={images.qrCodes}
              />
            }
          />
          <Route
            path={"research"}
            element={
              <ResearchMap
                qrCodes={images.qrCodes}
                showModal={callbacks.showModal}
                closeModal={callbacks.closeModal}
              />
            }
          />
          <Route
            path={"team"}
            element={
              <Team
                showModal={callbacks.showModal}
                images={images.teamImages}
                qrCodes={images.qrCodes}
              />
            }
          />
        </Route>
      </Routes>
    </NiceModal.Provider>
  );
}

export default React.memo(App);

// todo: отзывчивый header, зум на карте для телефонов