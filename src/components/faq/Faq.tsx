import { ArrowRightOutlined, QuestionCircleFilled, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
function Faq() {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-full mx-auto border-x border-y border-borderPurple font-poppins">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between w-full text-white px-4 py-3 bg-darkPurple rounded-lg"
        >
          <div className='flex items-center gap-2'>
            <QuestionCircleFilled />
            <span>What is "Foundry"?</span>
          </div>
          <div className='flex items-center'>
            <RightOutlined rotate={open ? 270 : 90} />
          </div>
        </button>
        {open && <div className="p-3 bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus consequuntur animi accusamus rem officia praesentium nulla rerum, dolorem nam, quisquam quo eaque et. Asperiores quasi dolorum porro libero eaque. <br /><br /> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus dolorem voluptates doloremque nam, architecto magnam beatae? Iure pariatur temporibus, est dicta corporis nemo sint omnis explicabo sed repellat sit.</div>}
      </div>
    );
}

export default Faq