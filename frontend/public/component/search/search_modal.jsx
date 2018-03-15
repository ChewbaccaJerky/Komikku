import React from "react";
import Modal from "react-modal";

import SearchBar from "./search_bar";

const SearchModal = ({showModal, handleCloseModal, handleSearchChange}) => {

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}>
            <button onClick={handleCloseModal}>X</button>
            <SearchBar handleSearchChange={handleSearchChange} handleCloseModal={handleCloseModal}/>
        </Modal>
    );
};

Modal.setAppElement('#root');
export default SearchModal;