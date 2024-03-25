"use client";
import Script from 'next/script'
import Main from "../componet/Main/Main";
import "./page.global.css";
import Popup from "@/componet/Popup/Popup";
import Tooltip from "@/componet/Popup/Tooltip/Tooltip";
import { useState } from "react";

export default function Home() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleOverlayClose = (e) => {
    if (e.target.classList.contains("popup_opened")) closePopup();
  };

  function closePopup() {
    setIsOpenPopup(false);
    setIsTooltipOpen(false);
  }

  return (
    <>
      <Main openPopup={() => setIsOpenPopup(true)} />
      <Popup
        handleOverlayClose={handleOverlayClose}
        isOpenPopup={isOpenPopup}
        closePopup={() => closePopup()}
        setIsTooltipOpen={setIsTooltipOpen}
      />
      <Tooltip
        handleOverlayClose={handleOverlayClose}
        isTooltipOpen={isTooltipOpen}
        closePopup={() => closePopup()}
      />
    </>
  );
}
