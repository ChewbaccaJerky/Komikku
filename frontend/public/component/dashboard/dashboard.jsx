import React from 'react';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

        console.dir(props);
    }

    componentWillMount(){
        this.props.fetchMangasByPage(1);
    }

    render(){
        return(
            <div className="dashboard">
                <h1>Dashboard</h1>
            </div>
        );
    }
}

export default Dashboard;