import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { loginUser, verifyOtp } from '../../state/slices/user.slice';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


interface Step1Props {
  onNext: () => void;
  onCancel: () => void;
  setCredentials: (email: string, password: string) => void;
}

interface Step2Props {
  onCancel: () => void;
  email: string;
  onResend: () => Promise<void>;
}

interface LoginFirstStepProps {
  onClose: () => void;
}

// Step 1 Component - Email and Password
const Step1: React.FC<Step1Props> = ({ onNext, onCancel, setCredentials }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(emailValid);
    
    if (!emailValid || !password) {
      setError(!emailValid ? 'Invalid email format' : 'Password is required');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const resultAction = await dispatch(loginUser({ email, password }) as unknown as AnyAction);
      
      if (loginUser.fulfilled.match(resultAction)) {
        setCredentials(email, password);
        toast.success('OTP sent to your email');
        onNext();
      } else {
        const errorMsg = resultAction.payload?.detail || 'Login failed';
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
        <h2 className='font-[agrandir] font-bold text-white leading-[150%] text-[24px]'>Hello Creative!</h2>
        <p className='font-[Poppins] font-light text-[16px] leading-[150%] text-[#E4CCFF]'>Let's Start new Journey</p>
        <h1 className='font-[agrandir] font-bold text-white leading-[150%] text-[30px] my-[32px]'>Login to your account</h1>
        
        <form onSubmit={handleNext} className='flex flex-col gap-4'>
          <div>
            <label htmlFor="email" className='font-[Poppins] font-medium text-[14px] leading-[150%] text-white'>Email</label>
            <input
              id="email"
              type="email"
              className={`w-full bg-[#2F2F4F] px-3 py-3 mt-1 border ${
                isValidEmail ? 'border-[#505075]' : 'border-red-500'
              } rounded-[8px] font-[Poppins] font-normal text-[14px] leading-[125%] text-[rgb(140,146,161)]`}
              placeholder='Your Registered Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(true);
              }}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className='font-[Poppins] font-medium text-[14px] leading-[150%] text-white'>Password</label>
            <input
              id="password"
              type="password"
              className='w-full bg-[#2F2F4F] px-3 py-3 mt-1 border border-[#505075] rounded-[8px] font-[Poppins] font-normal text-[14px] leading-[125%] text-[rgb(140,146,161)]'
              placeholder='Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          
          <p className='font-[Poppins] text-[14px] leading-[125%] text-[#9898B5] mt-2'>
            New on our platform? <span className='text-foundryyellow'><NavLink to='/register'>Create an account</NavLink></span>
          </p>
          
          <div className='flex justify-end gap-[12px] mt-[24px]'>
            <button type="button" className='py-[10px] text-white border border-[#505075] w-[106px] rounded-lg bg-[#2F2F4F]' onClick={onCancel}>
              Cancel
            </button>
            <button 
              type="submit" 
              className='py-[10px] rounded-lg text-foundryyellow bg-[#291A42] w-[195px] flex justify-center items-center gap-[5px]' 
              disabled={isLoading}
            >
              {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <>Login <FaArrowRight size={12} className='align-middle' /></> }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Step 2 Component - OTP Verification
const Step2: React.FC<Step2Props> = ({ onCancel, email, onResend }) => {
  const [otp, setOtp] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(59);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [canResend, setCanResend] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const resultAction = await dispatch(verifyOtp({ email, otp }) as unknown as AnyAction);
      
      if (verifyOtp.fulfilled.match(resultAction)) {
        const token = resultAction.payload.token;
        localStorage.setItem('jwtToken', token);
        toast.success('Login successful!');
        onCancel();
        navigate('/profile');
      } else {
        const errorMsg = resultAction.payload?.detail || 'Invalid OTP';
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (err: any) {
      setError(err.message || 'Invalid OTP. Please try again.');
      toast.error('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await onResend();
      setTimeLeft(59);
      setCanResend(false);
      toast.success('New OTP sent to your email');
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP');
      toast.error('Failed to resend OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const maskEmail = (email: string): string => {
    if (!email) return '';
    const [name, domain] = email.split('@');
    return `${name.substring(0, 2)}***@${domain}`;
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
        <h2 className='font-[agrandir] font-bold text-white leading-[150%] text-[24px]'>Secure Verification</h2>
        <p className='font-[Poppins] font-light text-[16px] leading-[150%] text-[#E4CCFF]'>Verify your identity</p>
        <p className='font-[agrandir] font-normal text-white leading-[150%] text-[20px] my-[32px]'>
          We've sent a One Time Password (OTP) to your email at {maskEmail(email)}. Please enter the 6-digit code to complete your login.
        </p>
        
        <form onSubmit={handleVerifyOtp} className='flex flex-col gap-4'>
          <div>
            <label htmlFor="otp" className='font-[Poppins] font-medium text-[14px] leading-[150%] text-white'>OTP Code</label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.slice(0, 6))}
              className='w-full bg-[#2F2F4F] px-3 py-3 border border-[#505075] rounded-[8px] font-[Poppins] font-normal text-[14px] leading-[125%] text-[rgb(140,146,161)]'
              placeholder='Enter 6-digit code'
              maxLength={6}
              inputMode='numeric'
            />
            {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
          </div>
          
          <div className='mt-2'>
            <p className='font-[Poppins] text-[14px] leading-[125%] text-[#9898B5]'>
              {canResend ? (
                <span>
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="text-foundryyellow hover:underline focus:outline-none"
                  >
                    Resend OTP
                  </button>
                </span>
              ) : (
                `You can request a new code in 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`
              )}
            </p>
          </div>
          
          <div className='flex justify-end gap-[12px] mt-[24px]'>
            <button type="button" className='py-[10px] text-white border border-[#505075] w-[106px] rounded-lg bg-[#2F2F4F]' onClick={onCancel}>
              Cancel
            </button>
            <button
              type="submit"
              className='py-[10px] rounded-lg text-foundryyellow bg-[#291A42] w-[195px] flex justify-center items-center gap-[5px]'
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> :<>Verify <FaArrowRight size={12} className='align-middle' /> </> }
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
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const nextStep = () => setCurrentStep(1);
  const handleCancel = () => {
    setCurrentStep(0);
    setEmail('');
    setPassword('');
    onClose();
  };

  const setCredentials = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  const handleResendOtp = async () => {
    try {
      await dispatch(loginUser({ email, password }) as unknown as AnyAction);
    } catch (err: any) {
      throw new Error('Failed to resend OTP');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      {currentStep === 0 ? (
        <Step1 onNext={nextStep} onCancel={handleCancel} setCredentials={setCredentials} />
      ) : (
        <Step2 onCancel={handleCancel} email={email} onResend={handleResendOtp} />
      )}
    </div>
  );
};

export default LoginFirstStep;