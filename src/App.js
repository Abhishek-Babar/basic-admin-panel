import logo from './logo.svg';
import "./App.css";
import "./components/Row/main.css";
import { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Row from "./components/Row"
import Search from './components/search';
import Details from './components/details';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fetchData: [],
            loader: true,
            details: [],
            display: false
        }
    }

    componentDidMount() {
        axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then(res => this.setState({ data: res.data, fetchData: res.data, loader: false }));
    }
    fetchData = (e) => {
        const filter = this.state.fetchData.filter((item) => {
            if (item.firstName.toLowerCase().includes(e.target.value) ||
                item.lastName.toLowerCase().includes(e.target.value) ||
                item.email.toLowerCase().includes(e.target.value) ||
                item.phone.toLowerCase().includes(e.target.value)
            ) {
                return item;
            }
        })
        this.setState({ data: filter });
    }
    detailsFetch = (event) => {
        let data = this.state.fetchData.find(item => item.id === parseInt(event.currentTarget.id))
        this.setState({ details: data , display: true}, function () {
            console.log(this.state.click)
        })
    }
    render() {

        return (
            <div id="app">
                {this.state.loader ?
                    <div id="overlay">
                        <img src="./img/preloader.gif" alt="Preloader icon" ></img>
                    </div> : ""}

                <main>

                    <div id="table-section">

                        < Search loadNames={this.fetchData} />

                        <div id="table-wrapper">

                            <div id="table-headers">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="column1">Id</th>
                                            <th className="column2">FirstName</th>
                                            <th className="column3">LastName</th>
                                            <th className="column4">Email</th>
                                            <th className="column5">Phone</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div id="table-data">
                                <table>
                                    <tbody>
                                        {this.state.data.map((item) => (
                                            <Row personData={item} showDetails={this.detailsFetch} />
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                    <div id="info-wrapper">
                        <h1>Details</h1>
                        <p>Click on a table item to get detailed information</p>
                        {this.state.display ? <Details details={this.state.details} /> : ""}
                    </div>
                    
                </main>
            </div>

        );
    }
}
export default App;
