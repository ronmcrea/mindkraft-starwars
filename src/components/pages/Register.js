import React from 'react'
import '../styles/Register.css'
import Sponsor from '../../../src/components/assets/sponsor-bg.mp4'

export const Register = () => {

  const show = () => {
    document.getElementById("organization").style.display = "flex";
    document.getElementById("organization-input").style.display = "flex";
  }

  const hide = () => {
    document.getElementById("organization").style.display = "none";
    document.getElementById("organization-input").style.display = "none";
  }

  return (
    <div className='reg'>
      
    <div id='register-background-video'>
      <video className='sponsorbg'  src={Sponsor} autoPlay loop muted/>
    </div>
    <h2 style={{fontFamily : 'starjedi-outline', letterSpacing: '5px'}}>Register</h2>
    <div className='form-container'>
      <form>
        <label>Name: </label>
        <input type='text' id='name' className='text-box' required></input><br></br><br></br>
        <label>Email: </label>
        <input type='email' id='email' className='text-box' required></input><br></br><br></br>
        <label>Phone Number: </label>
        <input type='tel' id='phone' className='text-box' required></input><br></br><br></br>
        <div style={{display: 'flex', flexDirection: 'row', width:'100%', alignItem: 'center'}}>
        <label style={{paddingRight:'12%'}}>organization: </label>
        <div style={{paddingRight:'12%'}}><label>Karunya </label><input type='radio' id='org' name='org' onClick={hide}></input></div><div><label>other </label><input type='radio' id='org' name='org' onClick={show}></input></div><br></br><br></br></div>
        <label className='organization' id='organization'>Name of organization:</label>
        <input type='text' className='text-box organization' id='organization-input' ></input><br></br><br></br>
        <label>Department: </label>
        <input type='text' id='department' className='text-box' required></input><br></br><br></br>
        <label for="year">Year:</label>
        <select className='text-box' id="year">
          <option value="B_I">Bachelor Degree First Year</option>
          <option value="B_II">Bachelor Degree Second Year</option>
          <option value="B_III">Bachelor Degree Third Year</option>
          <option value="B_IV">Bachelor Degree Fourth Year</option>
          <option value="M_I">Master Degree First Year</option>
          <option value="M_II">Master Degree Second Year</option>
        </select><br></br><br></br>
        <label>City: </label>
        <input type='text' id='city' className='text-box' required></input><br></br><br></br>
        <label>State: </label>
        <input type='text' id='state' className='text-box' required></input><br></br><br></br>
        <label>Address: </label>
        <textarea id='city' className='text-area' required></textarea><br></br><br></br>
        <div style={{display: 'flex', flexDirection: 'row', width:'100%', alignItem: 'center'}}>
        <label>Receipt:  </label><div><input type='file' id='org' name='org' required></input></div><div className='register-button-conatiner'><a href='https://eduserve.karunya.edu/Online/ExternalEvents.aspx' className='register-button-conatiner' target='_blank'><input type='button' value='  Pay  '  className='register-button'></input></a></div><br></br><br></br></div><br></br><br></br>
        <div className='button-container'>
        <input type='button' className='register-button' value='Register'></input>
        </div>
      </form>
    </div>
    </div>
  )
}
