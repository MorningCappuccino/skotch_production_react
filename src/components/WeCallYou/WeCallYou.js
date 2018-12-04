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
        this.hideBox = this.hideBox.bind(this);
    }

    handleInputPhone(ev) {
        const phone = (ev.target.validity.valid) ? ev.target.value : this.state.phone;

        this.setState({ phone });
    }

    metrics() {
        yaCounter51244735.reachGoal('call_skotch_production');
        ga('send', 'event', 'form_callback', 'submit');
        console.log('ya+ga');
    }

    handleSendPhone() {
        let input = document.querySelector('.wcu-phone-input');

        if (window.location.host === "skotchproduction.by") {
            this.metrics();
        }

        if ( !/[0-9]{9}/.test(input.value) ) {
            input.style.borderColor = '#a53030';
            setTimeout(() => input.style.borderColor = '', 1000);
            return;
        }

        axios.post('/m.php', {
            phone: '+375' + this.state.phone
        })
        .then(function (response) {
            console.log(response);
            if (response.data === 'Success') {
                let btn = document.querySelector('.wcu-button-send');
                btn.style.background = '#61a754';
                btn.style.border = '1px solid #4d8643';
                btn.innerText = 'Скоро перезвоним!';
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    hideBox(ev) {
        let overlay = document.querySelector('.overlay');

        ev.target.parentNode.style.display = 'none';
        overlay.style.display = 'none';
    }

    showBox() {
        let box = document.querySelector('.wcu-box');
        let overlay = document.querySelector('.overlay');

        box.style.display = 'block';
        overlay.style.display = 'block';
    }

    render() {
        return (
            <div className="wcu">
                <div className="wcu-show-btn" onClick={this.showBox}>
                    <div className="wcu-circle">

                    </div>
                </div>
                <div className="wcu-box">
                    <div className="wcu-box-close" onClick={this.hideBox}></div>
                    <div className="wcu-box-label">
                        &mdash;&nbsp;Оставте номер, и
                        мы вам перезвоним
                     </div>
                    <PhoneInput handleChange={this.handleInputPhone}
                                phone={this.state.phone}
                                handleSend={this.handleSendPhone}
                    />
                </div>
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
            Жду звонка!
        </button>
    </div>;
}

export default WeCallYou;