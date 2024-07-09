import React, { useState } from 'react';
import axios from 'axios';

const ReferPopup = ({ url, refer, setRefer }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData);
            console.log('Response:', response.data);
            setRefer(false); 
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className={`fixed inset-0 z-30 flex items-center justify-center ${refer ? 'block' : 'hidden'}`}>
            <form onSubmit={handleSubmit} className='bg-blue-400 w-[700px] h-[600px] rounded-xl p-10 relative'>
                <div className='flex flex-col justify-center items-center'>
                    <p onClick={() => setRefer(false)} className='cursor-pointer absolute top-4 right-4 text-2xl font-bold'>x</p>
                    <h2 className='mt-4 text-3xl font-bold'>Referral Form</h2>
                    <div className='flex flex-col justify-center items-start mt-4 space-y-2'>
                        <label htmlFor="name">Name:</label>
                        <input onChange={handleChange} type="text" id="name" name="name" className='rounded-lg w-[350px] h-[30px] border-2 border-black bg-col5'/>
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="text" id="email" name="email" className='rounded-lg w-[350px] h-[30px] border-2 border-black bg-col5'/>
                        <label htmlFor="phone">Phone:</label>
                        <input onChange={handleChange} type="text" id="phone" name="phone" className='rounded-lg w-[350px] h-[30px] bg-col5 border-2 border-black'/>
                        <label htmlFor="message">Message:</label>
                        <textarea onChange={handleChange} id="message" name="message" className='rounded-lg w-[350px] h-[80px] bg-col5 border-2 border-black'></textarea>
                    </div>
                    <button className='bg-col2 px-[16px] py-[8px] rounded-md text-white border inline-block w-[236px] h-[64px] mt-4'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ReferPopup;
