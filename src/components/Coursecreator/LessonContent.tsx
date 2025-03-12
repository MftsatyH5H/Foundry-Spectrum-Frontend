import React, { Component } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
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
  multiple: false,
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

interface LessonContentProps {
  lesson: {
    content: {
      name: string;
      video: null | string;
      assets: null | string;
    };
  };
  updateLessonContent: (content: {
    name: string;
    video: null | string;
    assets: null | string;
  }) => void;
}

interface LessonContentState {
  name: string;
  video: null | string;
  assets: null | string;
}

class LessonContent extends Component<LessonContentProps, LessonContentState> {
  constructor(props: LessonContentProps) {
    super(props);
    this.state = {
      name: props.lesson.content.name,
      video: props.lesson.content.video,
      assets: props.lesson.content.assets,
    };
  }

  componentDidUpdate(prevProps: LessonContentProps) {
    // Check if the lesson content has changed
    if (prevProps.lesson.content !== this.props.lesson.content) {
      this.setState({
        name: this.props.lesson.content.name,
        video: this.props.lesson.content.video,
        assets: this.props.lesson.content.assets,
      });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<LessonContentState, keyof LessonContentState>, () => {
      this.props.updateLessonContent({
        name: this.state.name,
        video: this.state.video,
        assets: this.state.assets,
      });
    });
  };

  handleVideoUpload = (file: File) => {
    this.setState({ video: file.name }, () => {
      this.props.updateLessonContent({
        name: this.state.name,
        video: this.state.video,
        assets: this.state.assets,
      });
    });
  };

  handleAssetsUpload = (file: File) => {
    this.setState({ assets: file.name }, () => {
      this.props.updateLessonContent({
        name: this.state.name,
        video: this.state.video,
        assets: this.state.assets,
      });
    });
  };

  render() {
    const { name, video, assets } = this.state;

    return (
      <div>
        <form action="">
          <div className="flex flex-col gap-[8px] mb-[48px]">
            <h2 className="font-[Poppins] text-[14px] text-white leading-[150%] font-medium">
              Lesson Name
            </h2>
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              className="bg-[#2F2F4F] px-[12px] py-[14px] text-white border border-[#505075] rounded-[8px]"
              placeholder="Lesson Name"
            />
            <span className="font-[Poppins] text-[12px] leading-[14.5px] font-light text-[#909090]">
              We just need some information
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-[Poppins] text-[14px] text-white leading-[150%] font-medium">
                Lesson Video
              </h2>
              <span className="font-[Poppins] text-[12px] leading-[14.5px] font-light text-[#909090]">
                We just need some information
              </span>

              {/* Video Upload Box */}
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
                  beforeUpload={(file) => {
                    this.handleVideoUpload(file);
                    return false; // Prevent default upload
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
                      MP4, GIF Only accepted formats
                    </p>
                  </div>
                </Dragger>
              </ConfigProvider>
            </div>

            {/* Assets Upload Box */}
            <div className="flex flex-col gap-2">
              <h2 className="font-[Poppins] text-[14px] text-white leading-[150%] font-medium">
                Lesson Assets
              </h2>
              <span className="font-[Poppins] text-[12px] leading-[14.5px] font-light text-[#909090]">
                We just need some information
              </span>
              <ConfigProvider
                theme={{
                  token: {
                    colorBorder: "#505075",
                  },
                }}
              >
                <Dragger
                  {...props}
                  className="bg-[#2F2F4F] h-[143px] border-[#505075]"
                  style={{
                    height: "200px",
                  }}
                  beforeUpload={(file) => {
                    this.handleAssetsUpload(file);
                    return false; // Prevent default upload
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
                      PDF, ZIP accepted formats with max size of 50 MB
                    </p>
                  </div>
                </Dragger>
              </ConfigProvider>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LessonContent;