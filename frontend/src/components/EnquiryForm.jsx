import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EnquiryForm = ({ fetchData, find }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: '', _id: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const saveEnquiry = async (e) => {
        e.preventDefault();


        if (formData._id) {

            await axios.put(`http://localhost:8000/api/enquiry-update/${formData._id}`, formData)
                .then((res) => {
                    toast.success("Updated Data SuccessFully!")
                    setFormData({ name: '', email: '', phone: '', message: '', _id: '' })
                    fetchData()
                })

        } else {
            try {
                await axios.post('http://localhost:8000/api/enquiry-insert', formData)
                toast.success('Data Send SuccessFully!')
                setFormData({ name: '', email: '', phone: '', message: '' })
                fetchData()
            } catch (error) {
                console.log('Error', error);
            }

        }
    }





    useEffect(() => {
        if (find) {
            axios.get(`http://localhost:8000/api/enquiry-find/${find}`).then((res) => {

                setFormData(res.data.enquiry)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [find])
    return (
        <div>
            <div>
                <div className="bg-gray-200 p-4">
                    <h2 className='text-[20px] font-bold'>Enqury Form</h2>
                    <form action="" onSubmit={saveEnquiry}>
                        <div className="py-3 text-left">
                            <Label htmlFor='name' className='text-[20px]'>Your Name</Label>
                            <TextInput type="text" onChange={handleChange} value={formData.name} name='name' placeholder="Enter Your Name" required className='border-none bg-none' />
                        </div>
                        <div className="py-3 text-left">
                            <Label htmlFor='email' className='text-[20px]'>Your Email</Label>
                            <TextInput type="email" onChange={handleChange} value={formData.email} name='email' placeholder="Enter Your Email" required className='border-none bg-none' />
                        </div>
                        <div className="py-3 text-left">
                            <Label htmlFor='phone' className='text-[20px]'>Your Phone</Label>
                            <TextInput type="text" onChange={handleChange} value={formData.phone} name='phone' placeholder="Enter Your Phone" required className='border-none bg-none' />
                        </div>
                        <div className="py-3 text-left">
                            <Label htmlFor='message' className='text-[20px]'>Your Message</Label>
                            <Textarea placeholder="Message..." onChange={handleChange} value={formData.message} name='message' required rows={4} />
                        </div>

                        <div className="py-3">
                            <Button type="submit" className='w-[100%] bg-black'>{formData._id ? 'Update' : 'Save'}</Button>
                        </div>
                    </form>
                </div>


                <ToastContainer />
            </div>
        </div>
    )
}

export default EnquiryForm;