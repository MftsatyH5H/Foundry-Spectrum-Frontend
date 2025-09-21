import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { CgCloseR } from "react-icons/cg"
import { toast } from 'react-toastify'
import TestimonialsList from '../components/testimonials/testimonialList'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import HeroSection from '../components/herosection/hero'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import Blogsliderlist from '../components/blogsslider/blogsliderlist'
import PrivateMentorHome from '../components/PrivateMentorHome/PrivateMentorHome'
import Footer from '../components/footer/footer'
import InstructorSliderHome from '../components/InstructorSliderHome/InstructorSliderHome'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'
import LoginFirstStep from '../components/auth/Loginfirststep'
import { verifyOtp, loginUser, fetchUserData } from '../state/slices/user.slice'
import  setAuthHeader  from '../api/setAuthHeader'
function Home() {
  const location = useLocation()
  const [showOtpPopup, setShowOtpPopup] = useState(false)
  const [otpCredentials, setOtpCredentials] = useState<{email: string, password: string} | null>(null)

  useEffect(() => {
    // Check if we should show OTP popup after registration
    if (location.state?.showOtpPopup && location.state?.email && location.state?.password) {
      setOtpCredentials({
        email: location.state.email,
        password: location.state.password
      })
      setShowOtpPopup(true)
      
      // Clear the state to prevent showing popup on page refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false)
    setOtpCredentials(null)
  }
  return (
    <div className='flex flex-col gap-[120px]'>
      {/* Hero Section */}
      <div>
        <HeroSection/>
      </div>
      {/* Courses Section Title */}

      {/* Courses Section */}
      <div className='container mx-auto'>
      <SectionTitle heading='Explore Our Top Courses' subHeading='Courses' description='Discover the best courses for 3D builders and animators.' />
        <Coursecardbiglist />
      </div>
      {/* Private Mentor Services */}
      <div className='container mx-auto'>
        <PrivateMentorHome />
      </div>
      {/* Instructor Section */}
      <div className='container py-[112px] mx-auto'>
        <SectionTitle heading='Our Instractors' subHeading='Tagline' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
        <InstructorSliderHome />

      </div>

      {/* Testimonials Section */}
      <div className='container mx-auto flex flex-col gap-[120px]'>
        <div className='flex font-[agrandir] sticky top-[200px] -z-10 mb-44 flex-col content-center items-center p-[24px] font-bold text-[96px] leading-[96px] gap-0 text-foundryyellow'>
          <span>Real Feedback,</span>
          <span>Real Impact...</span>
        </div>
        <TestimonialsList className="justify-center"/>
      </div>

      {/* Student Gallery Title */}
      <div className='container flex flex-col gap-[32px] mx-auto'>
        <SectionTitle heading='Students Gallery' subHeading='Success Stories' description='Learning the basic structure of the Blueprint visual' />
        <StudentGalleryList />
      </div>
      <div className='container mx-auto'>
        <Blogsliderlist width='!w-[420px]'/>
      </div>
      {/* Blogs Section */}

      {/* Explore More Courses */}
      <div className='container mb-[120px]'>
          <ExploreCoursescard />
      </div>

      {/* OTP Popup for post-registration verification */}
      {showOtpPopup && otpCredentials && (
        <div className="fixed inset-0 z-[2000] flex justify-center items-center bg-[#0A031652] backdrop-blur-[12px]">
          <OTPVerificationPopup 
            email={otpCredentials.email}
            password={otpCredentials.password}
            onClose={handleCloseOtpPopup}
          />
        </div>
      )}
    </div>
  )
}

// Custom OTP Verification Component that starts directly at OTP step
interface OTPVerificationPopupProps {
  email: string;
  password: string;
  onClose: () => void;
}

const OTPVerificationPopup: React.FC<OTPVerificationPopupProps> = ({ email, password, onClose }) => {
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
        // Store token and set header
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);

        // Fetch user data after successful verification
        //@ts-ignore
        await dispatch(fetchUserData());
        onClose();
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
    try {
      await dispatch(loginUser({ email, password }) as unknown as AnyAction);
      setTimeLeft(59);
      setCanResend(false);
      toast.success('OTP sent successfully');
    } catch (err: any) {
      toast.error('Failed to resend OTP');
    }
  };

  const maskEmail = (email: string) => {
    const [username, domain] = email.split('@');
    const maskedUsername = username.length > 2 
      ? username.substring(0, 2) + '*'.repeat(username.length - 2)
      : username;
    return `${maskedUsername}@${domain}`;
  };

  return (
    <div className='w-[640px] bg-[#0A0316F5] border border-[#0A0A2B] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.25)] rounded-[16px] p-[32px] flex flex-col'>
      <div className='flex justify-between items-center mb-[24px]'>
        <div className='h-[32px] w-[125px]'>
          <img src="/Foundry-yellow.png" alt="Foundry Logo" className='w-full h-full' />
        </div>
        <button 
          onClick={onClose}
          className='text-white hover:text-gray-300 transition-colors'
        >
          <CgCloseR size={24} />
        </button>
      </div>
      <div className='flex flex-col mt-[32px]'>
        <h2 className='font-[agrandir] font-bold text-white leading-[150%] text-[24px]'>Email Verification Required</h2>
        <p className='font-[Poppins] font-light text-[16px] leading-[150%] text-[#E4CCFF]'>Complete your registration</p>
        <p className='font-[agrandir] font-normal text-white leading-[150%] text-[20px] my-[32px]'>
          We've sent a One Time Password (OTP) to your email at {maskEmail(email)}. Please enter the 6-digit code to complete your registration.
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
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                className='font-[Poppins] font-medium text-[14px] leading-[150%] text-[#E1FF00] hover:text-[#C7E600] transition-colors'
              >
                Resend OTP
              </button>
            ) : (
              <p className='font-[Poppins] font-normal text-[14px] leading-[150%] text-[#9898B5]'>
                Resend OTP in {timeLeft}s
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading || otp.length !== 6}
            className={`w-full mt-4 py-3 px-6 rounded-lg font-[Poppins] font-medium text-[16px] transition-colors ${
              isLoading || otp.length !== 6
                ? 'bg-[#2F2F4F] text-[#9898B5] cursor-not-allowed'
                : 'bg-[#291A42] text-[#E1FF00] hover:bg-[#3a2465]'
            }`}
          >
            {isLoading ? 'Verifying...' : 'Verify & Complete Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home