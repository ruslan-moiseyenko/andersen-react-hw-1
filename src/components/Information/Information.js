import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import './Information.module.css';

class Info extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <Input header='Name' type='text' placeholder='Enter your name' />

        <Input header='Surname' type='text' placeholder='Enter your Surname' />
        <Input
          header='Date of birth'
          type='date'
          placeholder='Enter yoiur date of birth'
        />
        <Input
          header='Phone number'
          type='tel'
          placeholder='+380-678-123-456'
        />

        <Input
          header='Link to a site'
          type='url'
          placeholder='Enter yoiur link to a site'
        />
        <Textarea text='About you' rows='7' 
        placeholder='Here is the place where you can leave a little bit of information about youreself' />
        

        <Input
          header='Technologies stack'
          type='text'
          placeholder='Technologies'
        />

        <Textarea 
          text='About your last project' 
          rows='7' 
          placeholder='Please describe your last project and your responsibilities'/>
          
        <div className='form__buttons'>
          <Button type='submit' text='Save' />
          <Button type='reset' text='Cancel' />
        </div>
      </form>
    );
  }
}

export default Info;
