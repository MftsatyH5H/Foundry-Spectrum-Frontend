import React, { useState } from 'react';
import Coursecreatestep1 from '../components/Coursecreator/CoursecreateStep1';
import CourseCreator from '../components/Coursecreator/CoursecreateStep3';
import Coursecreatestep2 from '../components/Coursecreator/CoursecreateStep2';
import Footersmall from './../components/footer/footersmall';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {Link} from 'react-router-dom';

interface Step {
  name: string;
  component: JSX.Element;
}

const CreateCourse: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps: Step[] = [
    { name: 'Step 1', component: <Coursecreatestep1 /> },
    { name: 'Step 2', component: <Coursecreatestep2 /> },
    { name: 'Step 3', component: <CourseCreator /> },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Correct progress calculation
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className='container mx-auto'>
      <div className="p-[32px] max-full backdrop-blur-[8px] bg-[#00000040] border border-[#2F2F4F] rounded-[16px]">
        <div className='flex flex-row gap-[24px] items-center mb-[24px]'>
            <Link to='/'>
              <FaArrowLeft size={32} className='text-foundryyellow' />
            </Link>
          <div className='h-[32px] w-[125px]'>
            <img src="/Foundry-yellow.png" alt="" className='w-full h-full' />
          </div>
        </div>

        <div className='mb-[24px]'>
          <h1 className='font-[agrandir] font-bold text-[24px] leading-[36px] text-white'>
            Adding New Course
          </h1>
          <p className='font-[agrandir] font-normal leading-[30px] text-[20px] text-[#9898B5]'>
            We just need some information in 2 min to help you get the most of your learning time
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-[80px]">
          <div className="w-full h-[12px] bg-[#332052] rounded-[20px]">
            <div
              className="h-full bg-[linear-gradient(90deg,#A17ACC_0%,#6C2BD9_20.85%)] transition-all duration-300 ease-in-out rounded-[20px]"
              style={{
                width: `${progress}%`, 
              }}
            ></div>
          </div>
        </div>
        {/* Progress bar */}

        {/* Current step component */}
        <div className="rounded-lg mb-6 min-h-64 w-full">
          {steps[currentStep].component}
        </div>
        {/* Current step component */}

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-5 py-3 flex flex-row items-center justify-center gap-[8px] rounded-lg border border-[#505075] font-[Poppins] text-[16px] font-medium w-[175px] ${
              currentStep === 0
                ? 'bg-[#2F2F4F] text-white opacity-[20%] cursor-not-allowed'
                : 'bg-[#0A0A2B] text-[#9898B5]'
            }`}
          >
            <FaArrowLeft size={16} className='text-foundryyellow' />
            Previous
          </button>
          <div className='flex flex-row gap-[24px]'>
            <button
              onClick={() => {}}
              className={`px-5 py-3 rounded-lg flex flex-row items-center justify-center gap-[8px] font-[Poppins] text-[16px] font-medium w-[175px] bg-[#2F2F4F] text-white border border-[#505075]  ${
                currentStep === steps.length - 1 ? '' : 'hidden'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => {}}
              className={`px-5 py-3 rounded-lg flex flex-row items-center justify-center gap-[8px] font-[Poppins] text-[16px] font-medium w-[175px] bg-[#2F2F4F] text-white border border-[#505075]`}
            >
              Save & Close
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`px-5 py-3 rounded-lg flex flex-row items-center justify-center gap-[8px] font-[Poppins] text-[16px] font-medium w-[175px] bg-[#291A42] text-foundryyellow`}
            >
              Next
              <FaArrowRight size={16} className={`text-foundryyellow`} />
            </button>
          </div>
        </div>
      </div>
      <Footersmall />
    </div>
  );
};

export default CreateCourse;