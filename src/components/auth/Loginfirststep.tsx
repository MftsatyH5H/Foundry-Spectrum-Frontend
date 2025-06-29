import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { userType } from '../../static/userType.enum';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../state/slices/user.slice';
// Define types for props
interface Step1Props {
  onNext: () => void;
  onCancel: () => void;
  setEmail: (email: string) => void;
}

interface Step2Props {
  onCancel: () => void;
  email: string;
}

interface LoginFirstStepProps {
  onClose: () => void;
}

// Step 1 Component
const Step1: React.FC<Step1Props> = ({ onNext, onCancel, setEmail }) => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true); 

  const handleNext = () => {

    if (validateEmail(inputEmail)) {
      setEmail(inputEmail); 
      onNext(); 
    } else {
      setIsValidEmail(false); 
    }
  };

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };

  return (
    <div className='w-[640px] bg-[#0A0316F5] border border-[#0A0A2B] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.25)] rounded-[16px] p-[32px] flex flex-col'>
      <div className='flex flex-row justify-between border-b-[1px] border-foundryyellow pb-[36px]' style={{
        borderImageSource: "linear-gradient(90deg, #141315 0%, #E1FF00 16.5%, #E1FF00 86.5%, #020103 100%)",
        borderImageSlice: 1
      }}>
        <div className='h-24px w-[94px]'>
          <img src="/Foundry-yellow.png" alt="Foundry" className='w-full h-full' />
        </div>
        <button className='p-[1px] border border-foundryyellow text-foundryyellow rounded-[8px]' onClick={onCancel}>
          <IoIosClose size={20} />
        </button>
      </div>
      <div className='flex flex-col mt-[32px]'>
        <h2 className='font-[agrandir] font-bold text-white leading-[150%] text-[24px]'>Hello Creative !</h2>
        <p className='font-[Poppins] font-light text-[16px] leading-[150%] text-[#E4CCFF]'>Let's Start new Journey</p>
        <h1 className='font-[agrandir] font-bold text-white leading-[150%] text-[30px] my-[32px]'>Login to your account</h1>
        <form action="" className='flex flex-col gap-2'>
          <label htmlFor="" className='font-[Poppins] font-medium text-[14px] leading-[150%] text-white'>Email</label>
          <input
            type="email"
            className={`bg-[#2F2F4F] px-3 py-3 border ${
              isValidEmail ? 'border-[#505075]' : 'border-red-500 text-red-500'
            } rounded-[8px] font-[Poppins] font-normal text-[14px] leading-[125%] align-middle text-[rgb(140,146,161)]`}
            placeholder='Your Registered Email'
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value);
              setIsValidEmail(true); 
            }}
            required
          />
          {!isValidEmail && (
            <p className='text-red-500 text-sm mt-1'>Invalid email format. Please enter a valid email address.</p>
          )}
          <p className='font-[Poppins] text-[14px] leading-[125%] align-middle text-[#9898B5]'>New on our platform? <span className='text-foundryyellow'><NavLink to='/'>Create an account</NavLink></span></p>
          <div className='flex justify-end gap-[12px] mt-[32px]'>
            <button type="button" className='py-[10px] text-white border border-[#505075] w-[106px] rounded-lg bg-[#2F2F4F]' onClick={onCancel}>Cancel</button>
            <button type="button" className='py-[10px] rounded-lg text-foundryyellow bg-[#291A42] w-[195px] flex justify-center items-center gap-[5px]' onClick={handleNext}>
              Login <FaArrowRight size={12} className='align-middle' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Step 2 Component
const Step2: React.FC<Step2Props> = ({ onCancel, email }) => {
  const [timeLeft, setTimeLeft] = useState<number>(59); 

  // Mask the email (e.g., "mo***@gmail.com")
  const maskedEmail = email ? `${email.split('@')[0].substring(0, 2)}***@${email.split('@')[1]}` : '';

  useEffect(() => {
    if (timeLeft === 0) return; 

    // Set up the timer interval
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formattedTime = `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

  return (
    <div className='w-[640px] bg-[#0A0316F5] border border-[#0A0A2B] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.25)] rounded-[16px] p-[32px] flex flex-col'>
      <div className='flex flex-row justify-between border-b-[1px] border-foundryyellow pb-[36px]' style={{
        borderImageSource: "linear-gradient(90deg, #141315 0%, #E1FF00 16.5%, #E1FF00 86.5%, #020103 100%)",
        borderImageSlice: 1
      }}>
        <div className='h-24px w-[94px]'>
          <img src="/Foundry-yellow.png" alt="Foundry" className='w-full h-full' />
        </div>
        <button className='p-[1px] border border-foundryyellow text-foundryyellow rounded-[8px]' onClick={onCancel}>
          <IoIosClose size={20} />
        </button>
      </div>
      <div className='flex flex-col mt-[32px]'>
        <h2 className='font-[agrandir] font-bold text-white leading-[150%] text-[24px]'>Hello Creative !</h2>
        <p className='font-[Poppins] font-light text-[16px] leading-[150%] text-[#E4CCFF]'>Let's Start new Journey</p>
        <p className='font-[agrandir] font-normal text-white leading-[150%] text-[20px] my-[32px]'>
          We send you an One Time Password "OTP" to your email address "{maskedEmail}", please add this 6 digits code to allow access to your profile
        </p>
        <form action="" className='flex flex-col gap-2'>
          <label htmlFor="" className='font-[Poppins] font-medium text-[14px] leading-[150%] text-white'>OTP</label>
          <input type="text" className='bg-[#2F2F4F] px-3 py-2 border border-[#505075] rounded-[8px] font-[Poppins] font-normal text-[14px] leading-[125%] align-middle text-[rgb(140,146,161)]' placeholder='Input text' />
          <p className='font-[Poppins] text-[14px] leading-[125%] align-middle text-[#9898B5]'>You can resend the code after <span className='text-white'>{formattedTime}</span></p>
          <div className='flex justify-end gap-[12px] mt-[32px]'>
            <button type="button" className='py-[10px] text-white border border-[#505075] w-[106px] rounded-lg bg-[#2F2F4F]' onClick={onCancel}>Cancel</button>
            <button type="button" className='py-[10px] rounded-lg text-foundryyellow bg-[#291A42] w-[195px] flex justify-center items-center gap-[5px]'>
              Confirm <FaArrowRight size={12} className='align-middle' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Login Component
const LoginFirstStep: React.FC<LoginFirstStepProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();

  const nextStep = () => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCancel = () => {
    if (onClose && typeof onClose === 'function') {
      onClose(); 
    } else {
      console.error('onClose is not a function');
    }
  };

  const steps = [
    { name: 'Step 1', component: <Step1 onNext={nextStep} onCancel={handleCancel} setEmail={setEmail} /> },
    { name: 'Step 2', component: <Step2 onCancel={handleCancel} email={email} /> },
  ];

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#0a031600] backdrop-blur-[12px]">
      {steps[currentStep].component}
    </div>
  );
};

export default LoginFirstStep;