import React, { useState } from "react";
import Modal from "react-modal";
import { GameMovie } from "../../redux/slices/games/gamesTypes";

Modal.setAppElement("#root");

interface Props {
   trailer: GameMovie;
}

const GameTrailer = ({ trailer }: Props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);

   return (
      <div>
         <button onClick={openModal}>Watch Trailer</button>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Game Trailer"
            style={{
               content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  maxHeight: "80vh",
               },
            }}
         >
            <video controls width="100%">
               <source src={trailer.data.max} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <button onClick={closeModal}>Close</button>
         </Modal>
      </div>
   );
};

export default GameTrailer;
