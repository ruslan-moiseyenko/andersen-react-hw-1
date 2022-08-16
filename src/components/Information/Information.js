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

  inputs = [
    {
      id: 1,
      name: 'name',
      header: 'Name',
      className: 'name',
      type: 'text',
      placeholder: 'Enter your name',

      pattern: '^[A-ZА-Я][a-zа-я]+$'
    },
    {
      id: 2,
      name: 'surname',
      header: 'Sureame',
      className: 'surname',
      type: 'text',
      placeholder: 'Enter your Surname',

      pattern: '^[A-ZА-Я][a-zа-я]+$'
    },
    {
      id: 3,
      name: 'date',
      header: 'Date of birth',
      className: 'date',
      type: 'date',
      placeholder: 'Enter yoiur date of birth'
    },
    {
      id: 4,
      name: 'phone',
      header: 'Phone number',
      className: 'phone',
      type: 'tel',
      placeholder: '7-7777-77-77'
    },
    {
      id: 5,
      name: 'site',
      header: 'Link to a site',
      className: 'site',
      type: 'url',
      placeholder: 'Enter a link to your site'
    },
    {
      id: 6,
      name: 'stack',
      header: 'Technologies stack',
      className: 'stack',
      type: 'text',
      placeholder: 'Technologies'
    }
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
    this.props.onSubmit(Object.fromEntries(data.entries));
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
        {this.inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={this.state[input.name]}
            onChange={this.handleChange}
          />
        ))}

        <Textarea
          name='about'
          text='About you'
          className='about'
          rows='7'
          placeholder='Here is the place where you can leave a little bit of information about youreself'
          value={this.state.about}
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
