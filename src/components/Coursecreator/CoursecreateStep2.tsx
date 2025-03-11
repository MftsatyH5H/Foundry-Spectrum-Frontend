import React, { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { FaUpload } from "react-icons/fa";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info: any) {
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
  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Coursecreatestep2: React.FC = () => {
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [outcomes, setOutcomes] = useState<string[]>([""]);

  const MAX_REQUIREMENTS = 8;
  const MAX_OUTCOMES = 8;

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
          <label htmlFor="" className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white">
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

        {/* Course Cover Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-[Poppins] font-medium text-[14px] leading-[21px] text-white">
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
              <div className="flex flex-col gap-