import React, { useState } from "react";
import Modal from "react-modal";
import { GameMovie } from "../../redux/slices/games/gamesTypes";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import * as S from "./style";

Modal.setAppElement("#root");

interface Props {
   trailer: GameMovie;
}

const GameTrailer = ({ trailer }: Props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);

   return (
      <>
         <S.TrailerContainer>
            <S.TrailerCover src={trailer.preview} />
            <S.TrailerTitle>
               <S.IconContainer>
                  <MdOutlinePlayCircleFilled
                     size={80}
                     style={{ marginRight: "10px", cursor: "pointer" }}
                     onClick={openModal}
                  />
               </S.IconContainer>
               <S.TrailerName>{trailer.name}</S.TrailerName>
            </S.TrailerTitle>
         </S.TrailerContainer>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Game Trailer"
            style={{
               content: {
                  display: "Flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  background: "black",
               },
            }}
         >
            <S.CloseButton onClick={closeModal}>Close</S.CloseButton>
            <video autoPlay controls width="100%">
               <source src={trailer.data.max} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </Modal>
      </>
   );
};

export default GameTrailer;
