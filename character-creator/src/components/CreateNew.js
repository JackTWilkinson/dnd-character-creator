import React, {Component} from "react";
import Card from "react-bootstrap/Card";

export default class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            race: 1
        }

    }

    render() {
        //TODO fix db query method let race = queryFiveDB(this.state.race, 'races');

        return (
            <>
                <h1>Choose a Race and a Character Name</h1>
                <hr/>
                <form className="new-form">
                    <input type="text" placeholder="Enter Characters name here"/>
                    <div className="race-form">
                        <div className="race-card">
                            <Card style={{width: '18rem'}}>
                                <Card.Img/>
                                <Card.Body>
                                    <Card.Title>Race Name</Card.Title>
                                    <Card.Header>Race Bonus</Card.Header>
                                    <Card.Text>
                                        Test Formatting.
                                    </Card.Text>

                                    <Card.Header>Size</Card.Header>
                                    <Card.Text>
                                        Second Line of test formatting
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}