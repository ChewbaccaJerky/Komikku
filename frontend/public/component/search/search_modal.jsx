import React from "react";
import Modal from "react-modal";

import SearchBar from "./search_bar";

const SearchModal = ({showModal, handleCloseModal, handleSearchChange, searchParams}) => {

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            style={{
                content: {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    border: "none",
                    borderRadius: "2em"
                }
            }}>
            <SearchBar 
                handleSearchChange={handleSearchChange} 
                handleCloseModal={handleCloseModal}
                searchParams={searchParams}/>
        </Modal>
    );
};

Modal.setAppElement('#root');
export default SearchModal;