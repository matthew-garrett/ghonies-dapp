import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { GhonieData } from "./ghonieConfig.ts";
import {
  GhoniesWrapper,
  DisplayGhonie,
  ModalGhonie,
  TraitText,
  TraitContainer,
  ModalContent,
  CustomCloseIcon,
  CloseIconWrapper,
} from "./GhonieViewer.styled";

export const GhonieModal = () => {
  const [open, setOpen] = React.useState(false);
  const [ghonieData, setGhonieData] = React.useState({});

  const handleOpen = (data) => {
    setOpen(true);
    setGhonieData(data);
  };
  const handleClose = () => {
    setOpen(false);
    setGhonieData({});
  };

  return (
    <>
      <GhoniesWrapper>
        {GhonieData.map((data) => (
          <DisplayGhonie
            onClick={() => handleOpen(data)}
            key={data.id}
            src={data.image}
          ></DisplayGhonie>
        ))}
      </GhoniesWrapper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
      >
        <Fade in={open}>
          <ModalContent>
            <CloseIconWrapper onClick={handleClose}>
              <CustomCloseIcon fontSize="large" />
            </CloseIconWrapper>

            <ModalGhonie src={ghonieData?.image} />
            <TraitContainer>
              {ghonieData.traits &&
                ghonieData?.traits.map((data, index) => (
                  <TraitText key={`${data.label}-${ghonieData}`}>
                    {data.label}: {data.value}
                  </TraitText>
                ))}
            </TraitContainer>
          </ModalContent>
        </Fade>
      </Modal>
    </>
  );
};

export default GhonieModal;
