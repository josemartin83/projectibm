import React from 'react';

export class Home extends React.Component{
    viewStudents(){
        this.props.history.push('/view');
    }
    createStudents(){
        this.props.history.push('/create');
    }
    render() {
        return(<div className="container"><div>
                <button onClick={()=>this.createStudents()} className="btn btn-Success"> Create Case Study</button>
                <button onClick={()=>this.viewStudents()} className="btn btn-Success"> View Case Study</button>
            </div></div>
        );
    }
}
