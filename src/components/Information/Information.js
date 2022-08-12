import React from 'react';
import Buttons from '../Buttons/Buttons';
import './Information.css';

class Info extends React.Component {
    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    };
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <br />
                    <input
                        type='text'
                        placeholder='Enter name'
                        // value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Surname
                    <br />
                    <input
                        type='text'
                        placeholder='Enter Surname'
                        // value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Date of birth
                    <br />
                    <input
                        type='date'
                        placeholder='Enter yoiur date of birth'
                        // value={''}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Phone number
                    <br />
                    <input
                        type='tel'
                        placeholder='+380-675-123-45-67'
                        // value={''}
                        pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Link to a site
                    <br />
                    <input
                        type='url'
                        placeholder='Enter yoiur link to a site'
                        // value={''}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    About yourself
                    <br />
                    <textarea
                        rows='7'
                        placeholder='Here is the place where you can leave a little bit of
                        information about youreself'
                    ></textarea>
                </label>
                <div className='techStack'>
                    <label className='techStack'>
                        Technologies stack
                        <br />
                        <label>
                            JS
                            <input type='checkbox' valiue='JS' />
                        </label>
                        <label>
                            React
                            <input type='checkbox' valiue='React' />
                        </label>
                        <label>
                            Angular
                            <input type='checkbox' valiue='Angular' />
                        </label>
                        <label>
                            HTML
                            <input type='checkbox' valiue='HTML' />
                        </label>
                        <label>
                            CSS
                            <input type='checkbox' valiue='CSS' />
                        </label>
                    </label>
                </div>
                <label>
                    About your last project
                    <br />
                    <textarea
                        rows='7'
                        placeholder='Please describe your last project and your responsibilities'
                    ></textarea>
                </label>
                <div className='form__buttons'>
                    <Buttons text='Save' />
                    <Buttons text='Cansel' />
                </div>
            </form>
        );
    }
}

export default Info;
