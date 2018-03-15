import React from "react";
import Modal from "react-modal";

import SearchBar from "./search_bar";

const SearchModal = ({showModal, handleCloseModal}) => {

    return(
        <Modal
            isOpen={showModal}>
            <button onClick={handleCloseModal}>x</button>
            <SearchBar />
        </Modal>
    );
};

Modal.setAppElement('#root');
export default SearchModal;