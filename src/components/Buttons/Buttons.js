import React from 'react';

class Buttons extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
    };

    render() {
        return (
            <button type='submit' onSubmit={this.handleSubmit}>
                {this.props.text}{' '}
            </button>
        );
    }
}

export default Buttons;
