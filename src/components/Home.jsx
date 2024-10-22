import React, { useRef, useState } from "react";
import { PiPrinterBold } from "react-icons/pi";
import { useReactToPrint } from "react-to-print";

function Home() {
  // date
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  // state
  const [name, setName] = useState('John Deo')
  const [domain, setDomain] = useState('example.com.np')
  const [pNS, setPNS] = useState('ns01.nameserver.com')
  const [sNS, setSNS] = useState('ns02.nameserver.com')
  const [address, setAddress] = useState('Street 123, Anywhere')
  const [email, setEmail] = useState('john@gmail.com')
  const [phone, setPhone] = useState('9840000000')

  //handle state change
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleDomainChange = (e) => {
    setDomain(e.target.value)
  }
  const handlePNSChange = (e) => {
    setPNS(e.target.value)
  }
  const handleSNSChange = (e) => {
    setSNS(e.target.value)
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  // print the document
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className="h-auto w-full flex justify-center flex-wrap gap-4 md:gap-7">
      <div className="no-print h-auto px-3 py-4 w-full  md:w-[27%] shadow-md flex flex-col gap-2">
        <InputField type="text" title="Name" placeholder="Enter your fullname" length="50" onChange={handleNameChange} />
        <InputField type="text" title="Domain Name" placeholder="example.com.np" length="50" onChange={handleDomainChange}/>
        <InputField type="text" title="Primary Name Server" placeholder="ns01.nameserver.com" length="60" onChange={handlePNSChange}/>
        <InputField type="text" title="Secondary Name Server" placeholder="ns02.nameserver.com" length="60" onChange={handleSNSChange}/>
        <InputField type="text" title="Address" placeholder="Enter your address" length="100" onChange={handleAddressChange}/>
        <InputField type="text" title="Email" placeholder="Enter your email address" length="80" onChange={handleEmailChange}/>
        <InputField type="number" title="Phone Number" placeholder="Enter your phone number" length="10" onChange={handlePhoneChange}/>
        <div onClick={handlePrint} className=" hidden h-10 w-full md:flex justify-center items-center flex-row gap-1 bg-emerald-300 cursor-pointer hover:rounded-sm">
          <PiPrinterBold /> 
          <button>PRINT</button>  
        </div>
      </div>
      <div className="no-shadow h-auto w-full flex flex-col md:w-[67%] shadow-md">
        <div ref={contentRef} className="h-full w-full px-5 py-4 flex justify-center flex-col ">
          <div className="flex justify-end">Date: {day} {month} {year}</div>
          <div className="flex justify-start">To,<br />The Hostmaster,<br />Mercantile Communication Pvt. Ltd.<br />Durbar Marg, Kathmandu</div><br />
          <div className="flex justify-center font-semibold">Subject: .np Domain Registration</div><br />
          <div className="flex justify-start">Dear Sir/Madam,</div><br />
          <div className="flex justify-start">I am writing this letter to request you to kindly register a {domain} domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter. I would be very glad if you approve my domain registration request.</div><br />
          <div className="flex justify-start">Thank you very much for consideration. I look forward to hearing from you soon.</div><br />
          <div className="flex justify-start">Domain name: {domain} <br />Primary Name Server: {pNS} <br />Secondary Name Server: {sNS}</div><br />
          <div className="flex justify-start">Sincerely,<br/>Name: {name}<br/>Address: {address}<br/>Email: {email}<br/>Phone: {phone}</div><br />
        </div>
        <div onClick={handlePrint} className="no-print h-10 w-full flex justify-center items-center flex-row gap-1 bg-emerald-300 cursor-pointer hover:rounded-sm md:hidden">
          <PiPrinterBold /> 
          <button>PRINT</button>  
        </div>
      </div>
    </div>
  );
}

export default Home;


const InputField = ({ title, type, placeholder, length, onChange}) => {
  return (
    <div className="w-full h-auto flex justify-center flex-col gap-1">
      <p className="text-gray-700">{title}</p>
      <input type={type} placeholder={placeholder} maxLength={length} className="h-9 w-full border-2 px-2 py-1 border-gray-600 outline-none text-gray-500 rounded-sm" onChange={(e)=>onChange(e)}/>
    </div>
  );
}
