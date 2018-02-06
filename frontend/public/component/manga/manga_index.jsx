import React from 'react';

class MangaIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = { mangas: props.mangas, page: props.page };
    }

    componentWillMount(){
        this.props.fetchMangasByPage(this.props.page);
    }

    render(){
        return(
            <div className="manga-index">
                <h1>MangaIndex</h1>
            </div>
        );
    }
}

export default MangaIndex;