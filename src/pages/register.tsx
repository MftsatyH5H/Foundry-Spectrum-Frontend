import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../state/slices/user.slice';
import { toast } from 'react-toastify';
import Footersmall from '../components/footer/footersmall';
import Globalloading from '../components/Loading/Globalloading';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
  country: string;
  profession: string;
  objective: string;
  age: number;
  interests: string;
  education: string;
}


interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: Record<string, string>;
}

const Step1: React.FC<StepProps> = ({ formData, setFormData, errors }) => {
  return (
    <div className='w-[640px]'>
      <form className='flex flex-col gap-[32px]'>
        <div className='flex flex-row gap-2 '>
          <div className='flex flex-col gap-2 w-[50%]'>
            <label className='font-[Poppins] font-medium text-[14px] leading-[21px] text-white'>
              First Name
            </label>
            <input
              type="text"
              placeholder='Your first name'
              className={`w-full rounded-[8px] border ${
                errors.firstName ? 'border-red-500' : 'border-[#505075]'
              } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            {errors.firstName && (
              <p className='text-red-500 text-xs mt-1'>{errors.firstName}</p>
            )}
          </div>
          <div className='flex flex-col gap-2 w-[50%]'>
            <label className='font-[Poppins] font-medium text-[14px] leading-[21px] text-white'>
              Last Name
            </label>
            <input
              type="text"
              placeholder='Your last name'
              className={`w-full rounded-[8px] border ${
                errors.lastName ? 'border-red-500' : 'border-[#505075]'
              } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            {errors.lastName && (
              <p className='text-red-500 text-xs mt-1'>{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Email
          </label>
          <input
            type="email"
            placeholder='Your email address'
            className={`w-full rounded-[8px] border ${
              errors.email ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Phone
          </label>
          <input
            type="tel"
            placeholder='Your phone number'
            className={`w-full rounded-[8px] border ${
              errors.phoneNumber ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-xs mt-1'>{errors.phoneNumber}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Password
          </label>
          <input
            type="password"
            placeholder='Create a password'
            className={`w-full rounded-[8px] border ${
              errors.password ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
          )}
        </div>
              
        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Repeat Password
          </label>
          <input
            type="password"
            placeholder='Confirm your password'
            className={`w-full rounded-[8px] border ${
              errors.repeatPassword ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.repeatPassword}
            onChange={(e) => setFormData({...formData, repeatPassword: e.target.value})}
          />
          {errors.repeatPassword && (
            <p className='text-red-500 text-xs mt-1'>{errors.repeatPassword}</p>
          )}
        </div>
      </form>
    </div>
  );
}

const Step2: React.FC<StepProps> = ({ formData, setFormData, errors }) => {
  const educationOptions = ['Bachelor', 'High School', 'Master', 'Doctorate', 'Other'];
  
  return (
    <div className='w-[640px]'>
      <form className='flex flex-col gap-[32px]'>
        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[21px] text-white'>
            Your Current Job
          </label>
          <input
            type="text"
            placeholder='Your current job title'
            className={`w-full rounded-[8px] border ${
              errors.profession ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.profession}
            onChange={(e) => setFormData({...formData, profession: e.target.value})}
          />
          {errors.profession && (
            <p className='text-red-500 text-xs mt-1'>{errors.profession}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Country
          </label>
          <input
            type="text"
            placeholder='Your country'
            className={`w-full rounded-[8px] border ${
              errors.country ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
          />
          {errors.country && (
            <p className='text-red-500 text-xs mt-1'>{errors.country}</p>
          )}
        </div>
    
        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Objective of joining this platform
          </label>
          <input
            type="text"
            placeholder='Your objective'
            className={`w-full rounded-[8px] border ${
              errors.objective ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.objective}
            onChange={(e) => setFormData({...formData, objective: e.target.value})}
          />
          {errors.objective && (
            <p className='text-red-500 text-xs mt-1'>{errors.objective}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Age
          </label>
          <input
            type="number"
            placeholder='Your age'
            min="18"
            max="100"
            className={`w-full rounded-[8px] border ${
              errors.age ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
          {errors.age && (
            <p className='text-red-500 text-xs mt-1'>{errors.age}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Interests
          </label>
          <input
            type="text"
            placeholder='Your interests'
            className={`w-full rounded-[8px] border ${
              errors.interests ? 'border-red-500' : 'border-[#505075]'
            } py-3 px-4 bg-[#2F2F4F] text-white focus:outline-none focus:border-[#A17ACC]`}
            value={formData.interests}
            onChange={(e) => setFormData({...formData, interests: e.target.value})}
          />
          {errors.interests && (
            <p className='text-red-500 text-xs mt-1'>{errors.interests}</p>
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
            Education
          </h1>
          <div className='flex flex-row gap-[32px] flex-wrap'>
            {educationOptions.map((level) => (
              <div key={level} className='flex flex-row gap-2 items-center'>
                <input 
                  type="radio" 
                  id={level} 
                  name="education" 
                  value={level} 
                  checked={formData.education === level}
                  onChange={() => setFormData({...formData, education: level})}
                  className='peer w-[16px] h-[16px] cursor-pointer rounded-full border border-[#505075] text-white transition-all relative focus:outline-none focus:border-[#A17ACC]'
                />
                <label htmlFor={level} className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
                  {level}
                </label>
              </div>
            ))}
          </div>
          {errors.education && (
            <p className='text-red-500 text-xs mt-1'>{errors.education}</p>
          )}
        </div>
      </form>
    </div>
  )
}

const Redirecting: React.FC = () => {

  return (
      <div className='flex flex-col items-center '>
          <div className='h-[32px] w-[125px]'>
            <img src="/Foundry-yellow.png" alt="Foundry Logo" className='w-full h-full' />
          </div>
          <div className='flex flex-col items-center mt-[16px] py-[16px] gap-[24px]'>
            <div className='flex flex-col items-center gap-[8px]'>
                <h1 className='text-[72px]'>
                  🥳
                </h1>
                <h1 className='font-[agrandir] font-bold text-[24px] text-white leading-[150%]'>
                  Whooa! You're All Set!
                </h1>
                <p className='font-[Poppins] font-normal text-[16px] leading-[150%] text-[#9898B5] text-center '>
                  Everything's perfectly in place! We're sending you to your dashboard where all the awesome benefits await. Time to dive in and have some fun! 🎉
                </p>
            </div>
            <h3 className='font-[Poppins] font-normal text-[14px] text-white leading-[150%]'>Redirecting ...</h3>
            <p className='font-[Poppins] font-normal text-[12px] text-white leading-[150%]'>If you're not redirected automatically, please click here.</p>
          </div>
      </div>
    
  );
}

function Register() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
    country: '',
    profession: '',
    objective: '',
    age: '',
    interests: '',
    education: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const steps = [
    { name: 'Step 1', component: <Step1 formData={formData} setFormData={setFormData} errors={errors} /> },
    { name: 'Step 2', component: <Step2 formData={formData} setFormData={setFormData} errors={errors} /> },
  ];

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.repeatPassword) {
      newErrors.repeatPassword = 'Please confirm your password';
    } else if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.profession.trim()) {
      newErrors.profession = 'Profession is required';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.objective.trim()) {
      newErrors.objective = 'Objective is required';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else {
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
        newErrors.age = 'Age must be between 18 and 100';
      }
    }
    
    if (!formData.interests.trim()) {
      newErrors.interests = 'Interests are required';
    }
    
    if (!formData.education) {
      newErrors.education = 'Education level is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for backend
      const registrationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
        age: parseInt(formData.age, 10),
        profession: formData.profession,
        education: formData.education,
        interest: formData.interests,
        objective: formData.objective
      };
      
      // Dispatch registration action
      await dispatch(registerUser(registrationData) as any);
      
      setIsRegistered(true);

      // Redirect to profile after 3 seconds
      setTimeout(() => {
        navigate('/profile', { replace: true });
      }, 3000);
      

      // Reset form after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        repeatPassword: '',
        country: '',
        profession: '',
        objective: '',
        age: '',
        interests: '',
        education: ''
      });
      
      setCurrentStep(0);
      
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 0 && !validateStep1()) return;
    if (currentStep === 1 && !validateStep2()) return;
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {

      handleRegister();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>

      <div className='min-h-screen flex flex-col'>
        <div className='flex-grow relative'>
          {isRegistered ? (   
            <div className='flex items-center justify-center h-screen'>
                <div className=' max-w-[500px] '>
                <div className="p-[32px] backdrop-blur-[8px] bg-[#00000040] border border-[#2F2F4F] rounded-[16px]">
                  <Redirecting />
                </div>
              </div>
            </div>
          ) : (
        <div className='container mx-auto pt-[64px]'>
          <div className="p-[32px] max-full backdrop-blur-[8px] bg-[#00000040] border border-[#2F2F4F] rounded-[16px] mb-[100px]">
            {isSubmitting && <Globalloading />}
            <div className='flex flex-row gap-[24px] items-center mb-[24px]'>
              <Link to='/' className='hover:opacity-75 transition-opacity'>
                <FaArrowLeft size={32} className='text-foundryyellow' />
              </Link>
              <div className='h-[32px] w-[125px]'>
                <img src="/Foundry-yellow.png" alt="Foundry Logo" className='w-full h-full' />
              </div>
            </div>

            <div className='mb-[24px] gap-[8px] flex flex-col'>
              <h1 className='font-[agrandir] font-medium text-[24px] leading-[36px] text-white'>
                Welcome to your Foundry
              </h1>
              <p className='font-[agrandir] font-normal leading-[30px] text-[18px] text-[#9898B5]'>
                So excited to have you on board
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-[80px] flex flex-col gap-[8px]">
              <div className="w-full h-[12px] bg-[#332052] rounded-[20px]">
                <div
                  className="h-full bg-[linear-gradient(90deg,#A17ACC_0%,#6C2BD9_20.85%)] transition-all duration-300 ease-in-out rounded-[20px]"
                  style={{
                    width: `${progress}%`, 
                  }}
                ></div>
              </div>
              <p className="font-[Poppins] font-extralight text-[16px] leading-[18px] text-[#E4CCFF]">
                We just need some information to help you get the most of your learning time
              </p>
            </div>
            
              {/* Current step component */}
              <div className="rounded-lg mb-6 min-h-64 w-full">
                {isRegistered ? (
                  <Redirecting />
                ) : (
                  steps[currentStep].component
                )}
              </div>


              {/* Navigation buttons - hide when registration is complete */}
          
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0 || isSubmitting}
                    className={`px-5 py-3 flex flex-row items-center justify-center gap-[8px] rounded-lg border border-[#505075] font-[Poppins] text-[16px] font-medium w-[175px] ${
                      currentStep === 0
                        ? 'bg-[#2F2F4F] text-white opacity-[20%] cursor-not-allowed'
                        : 'bg-[#0A0A2B] text-[#9898B5] hover:bg-[#1a1a3a] transition-colors'
                    }`}
                  >
                    <FaArrowLeft size={16} className='text-foundryyellow' />
                    Previous
                  </button>
                  
                  <div className='flex flex-row gap-[24px]'>
                    <button
                      onClick={nextStep}
                      disabled={isSubmitting}
                      className={`px-5 py-3 rounded-lg flex flex-row items-center justify-center gap-[8px] font-[Poppins] text-[16px] font-medium w-[175px] bg-[#291A42] text-foundryyellow hover:bg-[#3a2465] transition-colors ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {currentStep === steps.length - 1 ? (
                        'Register'
                      ) : (
                        <>
                          Next
                          <FaArrowRight size={16} className={`text-foundryyellow`} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
      
          </div>
        </div>
              )}
        <div className='absolute bottom-0 w-full'>

          <Footersmall />
        </div>
        </div>
      </div>
    </>
  );
}

export default Register;