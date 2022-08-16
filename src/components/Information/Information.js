import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import styles from './Information.module.css';

class Info extends React.Component {
  state = {
    name: '',
    surname: '',
    date: '',
    phone: '',
    site: '',
    about: '',
    stack: '',
    project: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      surname: '',
      date: '',
      phone: '',
      site: '',
      about: '',
      stack: '',
      project: ''
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <Input
          name='name'
          header='Name'
          className='name'
          type='text'
          placeholder='Enter your name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <Input
          name='surname'
          header='Surname'
          className='surname'
          type='text'
          placeholder='Enter your Surname'
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <Input
          name='date'
          header='Date of birth'
          className='date'
          type='date'
          placeholder='Enter yoiur date of birth'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <Input
          name='phone'
          header='Phone number'
          className='phone'
          type='tel'
          placeholder='7-7777-77-77'
          value={this.state.phone}
          onChange={this.handleChange}
        />

        <Input
          name='site'
          header='Link to a site'
          className='site'
          type='url'
          placeholder='Enter yoiur link to a site'
          value={this.state.site}
          onChange={this.handleChange}
        />
        <Textarea
          name='about'
          text='About you'
          className='about'
          rows='7'
          placeholder='Here is the place where you can leave a little bit of information about youreself'
          value={this.state.about}
          onChange={this.handleChange}
        />

        <Input
          name='stack'
          header='Technologies stack'
          className='stack'
          type='text'
          placeholder='Technologies'
          value={this.state.stack}
          onChange={this.handleChange}
        />

        <Textarea
          name='project'
          text='About your last project'
          className='project'
          rows='7'
          placeholder='Please describe your last project and your responsibilities'
          value={this.state.project}
          onChange={this.handleChange}
        />

        <div className='form__buttons'>
          <Button type='submit' text='Save' />
          <Button type='reset' text='Cancel' />
        </div>
      </form>
    );
  }
}

export default Info;
