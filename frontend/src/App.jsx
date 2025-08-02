import React, { useEffect, useState } from 'react'
// import './App.css';
import EnquiryForm from './components/EnquiryForm';
import EnquiryList from './components/EnquiryList';
import axios from 'axios';


function App() {
  const [find, setFind] = useState(null);

  const [enquiryList, setEnquiryList] = useState([]);


  const fetchData = () => {
    try {
      axios.get('http://localhost:8000/api/enquiry-list').then((resp) => {
        // console.log(resp.data);
        setEnquiryList(resp.data.enquiry)
      })
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-10 px-2">
        <EnquiryForm fetchData={fetchData} find={find}  />
        <EnquiryList fetchData={fetchData} enquiryList={enquiryList} setFind={setFind} />
      </div>
    </>
  )
}

export default App
