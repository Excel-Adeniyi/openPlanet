// import React from 'react';
import { useState } from 'react';
import './styles/styles.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { useScheduleModal } from '../../state_management/zustand/schedule_modal_store';
export default function ScheduleModal() {
 const {showModal, toggleModal}:any = useScheduleModal()
  const phoneNumber = '+2347078080312';
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    date: '',
    location: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue: string = e.target.value;

    setFormInput((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));

    // console.log(inputName)
  };
  const handleSubmit = () => {
    if (
      formInput.name !== '' &&
      formInput.email !== '' &&
      formInput.date !== '' &&
      formInput.location
    ) {
      const message =
        '*Name:*' +
        ' ' +
        formInput.name +
        ' ' +
        '\n' +
        ' ' +
        '*Email:*' +
        ' ' +
        formInput.email +
        ' ' +
        '\n' +
        ' ' +
        '*Location:*' +
        ' ' +
        formInput.location +
        ' ' +
        '\n' +
        ' ' +
        '*Date:*' +
        ' ' +
        formInput.date;
      const getencodeUri = encodeURI(message);
      setFormInput({ name: '', date: '', email: '', location: '' });
      window.location.href = `https://wa.me/${phoneNumber}?text=${getencodeUri}`;
    }
    // console.log(formInput)
  };
  const today = new Date().toISOString().split("T")[0]; 
  return (
    <div className={`overall_container ${showModal ? 'block' : 'hidden'} `}>
      <div className='schedule_container px-5'>
        <div className='flex justify-center'>
          <div className='schedule_card'>
            <div className='my-5 mx-5'>
              <div className='flex justify-end text-2xl text-white' >
                <IoMdCloseCircle onClick={() => toggleModal()}/>
              </div>
              <div className='font-cormorantBold text-white'>
                Appointment Form
              </div>
              <div className='my-5 font-cormorantBold'>
                <label className='text-white'>Name</label>
                <div>
                  {' '}
                  <input
                    name='name'
                    placeholder=''
                    className='w-full bg-white border-2 rouned-lg focus:outline-none focus:border-slate=400'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='my-5 font-cormorantBold'>
                <label className='text-white'>Email</label>
                <div>
                  <input
                    name='email'
                    placeholder=''
                    type='email'
                    className='w-full bg-white border-2 rouned-lg focus:outline-none focus:border-slate=400'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='my-5 font-cormorantBold'>
                <label className='text-white'>Location</label>
                <div>
                  {' '}
                  <input
                    type='text'
                    // placeholder='select appointment date'
                    name='location'
                    className='w-full bg-white border-2 rouned-lg text-black focus:outline-none focus:border-slate=400'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='my-5 font-cormorantBold'>
                <label className='text-white'>Appointment Date</label>
                <div>
                  {' '}
                  <input
                    type='date'
                    placeholder='select appointment date'
                    name='date'
                    min={today}
                    className='w-full bg-white border-2 rouned-lg text-black focus:outline-none focus:border-slate=400'
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='flex justify-center text-white font-cormorantBold'>
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className='bg-black'
                >
                  Submit Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
