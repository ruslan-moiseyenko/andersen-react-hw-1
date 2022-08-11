import React from 'react';

class Info extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type='text'
                        placeholder='Enter name'
                        value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Surname
                    <input
                        type='text'
                        placeholder='Enter Surname'
                        value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Date of birth
                    <input
                        type='date'
                        placeholder='Enter yoiur date of birth'
                        value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Phone number
                    <input
                        type='tel'
                        placeholder='Enter yoiur phone number'
                        value={''}
                        pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Link to a site
                    <input
                        type='text'
                        placeholder='Enter yoiur link to a site'
                        value={''}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    About yourself
                    <input
                        type='text'
                        placeholder='Tell us about yourself'
                        value={''}
                        onChange={this.handleChange}
                    />
                </label>

                <button type='submit'>Sign up as </button>
            </form>
        );
    }
}

export default Info;
