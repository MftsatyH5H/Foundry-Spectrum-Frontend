import { ArrowRightOutlined, QuestionCircleFilled, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
function Faq({state}: any) {
    const [open, setOpen] = useState(state || false);

    return (
      <div className="w-full mx-auto border-x border-y border-borderPurple font-poppins">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between w-full text-white p-5 bg-darkPurple rounded-lg"
        >
          <div className='flex items-center gap-2'>
            <QuestionCircleFilled className='w-[16px] h-[16px]' />
            <span className='font-poppins'>What is "Foundry"?</span>
          </div>
          <div className='flex items-center'>
            <RightOutlined rotate={open ? 270 : 90} />
          </div>
        </button>
        {open && <div className="p-5 bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple">
            <div className='flex flex-col gap-[10px]'>
              <span>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</span>
              <span>With that being said, feel free to use this design kit for your open-source projects.</span>
              <span>Find out more information by <span className='text-[#5f358a] cursor-pointer'>Reading the license.</span></span>
            </div>
        </div>}
      </div>
    );
}

export default Faq