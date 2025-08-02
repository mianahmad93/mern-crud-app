import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EnquiryList = ({ enquiryList, fetchData,setFind }) => {

    const DeleteBtn = (id) => {
        axios.delete(`http://localhost:8000/api/enquiry-del/${id}`).then((res) => {
            toast.success('Enquiry Deleted SuccessFully!')

            fetchData()
        }).catch((err) => {
            console.log(err);

        })

    }

    const OnEdit = (id) => {
        setFind(id)
    }



    return (
        <div className='bg-gray-200 p-4'>
            <ToastContainer />
            <h2 className='text-[20px] font-bold mb-4'>Enqury List</h2>
            <div className="overflow-x-auto">
                <Table striped>
                    <TableHead>
                        <TableHeadCell>Sr No</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                        <TableHeadCell>Message</TableHeadCell>
                        <TableHeadCell>
                            Edit
                        </TableHeadCell>
                        <TableHeadCell>
                            Delete
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {
                            enquiryList.map((item, ind) => {
                                return <>
                                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {ind}
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.message}</TableCell>
                                        <TableCell>
                                            <a href="#" onClick={() => OnEdit(item._id)} className="font-medium text-white bg-blue-600 p-2 rounded  dark:text-primary-500">
                                                Edit
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <a href="#" onClick={() => DeleteBtn(item._id)} className="font-medium text-white bg-red-600 p-2 rounded  dark:text-primary-500">
                                                Delete
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                </>
                            })
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default EnquiryList