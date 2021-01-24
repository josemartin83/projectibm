import React from 'react';
import Axios from 'axios';



export class View extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: ''};
        this.componentDidMount = this.componentDidMount.bind(this);

    }
    //call this on page load

    componentDidMount() {
        Axios.get("http://localhost:3001/get-all").then((res)=>{
            this.setState({data:res.data});
            console.log(res.data)
        });
    }

    render() {
        return(<div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th> Student Name</th>
                            <th>Age</th>
                            <th>Degree</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from(this.state.data).map((val)=>{
                            return(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.degree}</td>
                                </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
