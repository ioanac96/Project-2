import React from 'react';

class Input extends React.Component {
    validationType(type, value) {
        if(type === "email"){
            const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if(value === '') {
                return true;
            }
            else if(value.match(format)){
                return true;
            }
            else {
                return false;
            }
        }
    }

    render() {
        const classs = this.validationType(this.props.id, this.props.value);
        return (
            // <input value={this.props.value} type={this.props.type} id={this.props.id}  placeholder={this.props.placeholder} onChange={this.props.onChange} className={ classs === true ? "correct-format" : "incorrect-format"}/>
            <input {...this.props} className={ classs === true ? "correct-format" : "incorrect-format"}/>
        )
    }
}

export default Input;

