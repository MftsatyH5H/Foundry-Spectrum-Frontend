import React, { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FaUpload } from "react-icons/fa";
import { message, Upload } from "antd";
const { Dragger } = Upload;

interface UploadChangeInfo {
  file: {
    status: "uploading" | "done" | "error";
    name: string;
  };
  fileList: any[];
}

interface UploadProps {
  name: string;
  multiple: boolean;
  action: string;
  onChange: (info: UploadChangeInfo) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CoursecreateStep2: React.FC = () => {
  // Separate states for Requirements and Outcomes
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [outcomes, setOutcomes] = useState<string[]>([""]);

  // Constants for limits
  const MAX_REQUIREMENTS = 8;
  const MAX_OUTCOMES = 8;

  // Handlers for Requirements
  const handleAddRequirement = () => {
    if (requirements.length >= MAX_REQUIREMENTS) {
      message.warning(`You can only add up to ${MAX_REQUIREMENTS} requirements.`);
      return;
    }
    setRequirements([...requirements, ""]);
  };

  const handleRemoveRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...requirements];
    newRequirements[index] = value;
    setRequirements(newRequirements);
  };

  // Handlers for Outcomes
  const handleAddOutcome = () => {
    if (outcomes.length >= MAX_OUTCOMES) {
      message.warning(`You can only add up to ${MAX_OUTCOMES} outcomes.`);
      return;
    }
    setOutcomes([...outcomes, ""]);
  };

  const handleRemoveOutcome = (index: number) => {
    const newOutcomes = outcomes.filter((_, i) => i !== index);
    setOutcomes(newOutcomes);
  };

  const handleOutcomeChange = (index: number, value: string) => {
    const newOutcomes = [...outcomes];
    newOutcomes[index] = value;
    setOutcomes(newOutcomes);
  };

  return (
    <div className="w-[640px]">
      <form action="" className="flex flex-col gap-[32px] w-full">
        {/* Overview Section */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white"
          >
            Intro Video
          </label>
          <p className="font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]">
            We just need some information
          </p>
          <ConfigProvider
            theme={{
              token: {
                colorBorder: "#505075",
                colorPrimaryHover: "#505075",
              },
            }}
          >
            <Dragger
              {...props}
              className="bg-[#2F2F4F] h-[143px] border-[#505075]"
              style={{
                height: "200px",
              }}
            >
              <div className="flex flex-col gap-4">
                <p className="flex justify-center">
                  <FaUpload size={20} className="text-[#9898B5]" />
                </p>
                <p className="font-[Poppins] font-semibold text-[14px] text-[#9898B5]">
                  Click to upload or drag and drop
                </p>
                <p className="font-[Poppins] font-normal text-[12px] text-[#9898B5]">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </Dragger>
          </ConfigProvider>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white"
          >
            Course Cover
          </label>
          <p className="font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]">
            We just need some information
          </p>
          <ConfigProvider
            theme={{
              token: {
                colorBorder: "#505075",
                colorPrimaryHover: "#505075",
              },
            }}
          >
            <Dragger
              {...props}
              className="bg-[#2F2F4F] h-[143px] border-[#505075]"
              style={{
                height: "200px",
              }}
            >
              <div className="flex flex-col gap-4">
                <p className="flex justify-center">
                  <FaUpload size={20} className="text-[#9898B5]" />
                </p>
                <p className="font-[Poppins] font-semibold text-[14px] text-[#9898B5]">
                  Click to upload or drag and drop
                </p>
                <p className="font-[Poppins] font-normal text-[12px] text-[#9898B5]">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </Dragger>
          </ConfigProvider>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white"
          >
            Overview
          </label>
          <textarea
            name=""
            id=""
            className="rounded-[8px] px-4 py-3 bg-[#2F2F4F] border border-[#505075] w-full h-[163px] text-white"
            placeholder="Write text here ..."
          />
          <p className="font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]">
            A note for extra info
          </p>
        </div>

        {/* Requirements Section */}
        <div className="flex flex-col gap-2">
          <h1 className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white">
            Requirements
          </h1>
          <p className="font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]">
            We just need some information in 2 min to help you got the most of
            your learning time
          </p>
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-[10px] w-full"
            >
              <input
                type="text"
                placeholder="Requirement"
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="bg-[#2F2F4F] px-4 py-3 border border-[#505075] w-[510px] rounded-[8px] text-white"
              />
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="border border-[#5F358A] text-[#5F358A] text-[14px] leading-[21px] font-medium font-[Poppins] rounded-lg px-[35px] py-[12px]"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddRequirement}
            className="rounded-lg py-2 px-3 bg-[#332052] text-[#E1FF00] font-[Poppins] font-medium text-[14px] leading-[21px] w-[140px] mt-[20px]"
          >
            + Add More
          </button>
        </div>

        {/* Outcomes Section */}
        <div className="flex flex-col gap-2">
          <h1 className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white">
            Outcome
          </h1>
          <p className="font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]">
            We just need some information in 2 min to help you got the most of
            your learning time
          </p>
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-[10px] w-full"
            >
              <input
                type="text"
                placeholder="Outcome"
                value={outcome}
                onChange={(e) => handleOutcomeChange(index, e.target.value)}
                className="bg-[#2F2F4F] px-4 py-3 border border-[#505075] w-[510px] rounded-[8px] text-white"
              />
              <button
                type="button"
                onClick={() => handleRemoveOutcome(index)}
                className="border border-[#5F358A] text-[#5F358A] text-[14px] leading-[21px] font-medium font-[Poppins] rounded-lg px-[35px] py-[12px]"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddOutcome}
            className="rounded-lg py-2 px-3 bg-[#332052] text-[#E1FF00] font-[Poppins] font-medium text-[14px] leading-[21px] w-[140px] mt-[20px]"
          >
            + Add More
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoursecreateStep2;