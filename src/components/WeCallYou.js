import React, {Component} from 'react';
import './WeCallYou.css';
import axios from 'axios';

class WeCallYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };

        this.handleInputPhone = this.handleInputPhone.bind(this);
        this.handleSendPhone = this.handleSendPhone.bind(this);
    }

    handleInputPhone(ev) {
        const phone = (ev.target.validity.valid) ? ev.target.value : this.state.phone;

        this.setState({ phone });
    }

    handleSendPhone() {
        console.log('send phone:', this.state.phone);
        axios.post('/m.php', {
            phone: '+375' + this.state.phone
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="wcu">
                <div className="wcu-label">We are call you</div>
                <PhoneInput handleChange={this.handleInputPhone}
                            phone={this.state.phone}
                            handleSend={this.handleSendPhone}
                />
            </div>
        )
    }
}

function PhoneInput(props) {
    return <div>
        <div className="wcu-phone-wrapper">
            <input className="wcu-phone-input" type="text"
                   pattern="[0-9]{0,9}"
                   onChange={props.handleChange}
                   value={props.phone}
                   placeholder="your phone"
            />
        </div>
        <button className="wcu-button-send"
                onClick={props.handleSend}
        >
            send
        </button>
    </div>;
}

export default WeCallYou;