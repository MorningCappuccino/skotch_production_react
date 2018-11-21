import React, {Component} from 'react';
import './WeCallYou.css';

class WeCallYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };

        this.handleInputPhone = this.handleInputPhone.bind(this);
    }

    handleInputPhone(ev) {
        const phone = (ev.target.validity.valid) ? ev.target.value : this.state.phone;

        this.setState({ phone });
    }

    render() {
        return (
            <div className="wcu">
                <div className="wcu-label">We are call you</div>
                <PhoneInput handleChange={this.handleInputPhone} phone={this.state.phone}/>
            </div>
        )
    }
}

function PhoneInput(props) {
    return <div>
        <input type="text"  pattern="[0-9]{0,9}" onInput={props.handleChange} value={props.phone} />
    </div>;
}

export default WeCallYou;