import React from "react";
import Modal from "react-modal";

import SearchBar from "./search_bar";

const SearchModal = ({
    showModal, 
    handleCloseModal, 
    handleSearchChange, 
    searchParams}) => {

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            className={"search-modal"}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.5)"
                },
                content: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "2em",
                    height: "3em",
                    width: "70%",
                    display: "block",
                    float: "right",
                    margin: "4em"

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