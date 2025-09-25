import React from 'react';
import { App, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

type PopupOptions = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  showCancel?: boolean;
};

const containerClass = 'rounded-lg bg-[#0A0A2B] p-4 text-white';
const shadowStyle = {
  boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A',
} as const;

export function showPopup(options: PopupOptions) {
  const { title, content, okText = 'OK', cancelText = 'Cancel', onOk, onCancel, showCancel = true } = options;

  return Modal.confirm({
    icon: <ExclamationCircleFilled className="text-blue-400" />,
    title: <div className="text-white">{title}</div>,
    content: (
      <div className={containerClass} style={shadowStyle}>
        {content}
      </div>
    ),
    okText,
    cancelText,
    okCancel: showCancel,
    onOk,
    onCancel,
    centered: true,
    className: 'custom-popup-modal',
    okButtonProps: { className: 'bg-blue-600 hover:bg-blue-500' },
    cancelButtonProps: { className: 'border-slate-600 text-white' },
  });
}

export function usePopup() {
  const { modal } = App.useApp();

  function confirm(options: PopupOptions) {
    const { title, content, okText = 'OK', cancelText = 'Cancel', onOk, onCancel, showCancel = true } = options;

    return modal.confirm({
      icon: <ExclamationCircleFilled className="text-blue-400" />,
      title: <div className="text-white">{title}</div>,
      content: (
        <div className={containerClass} style={shadowStyle}>
          {content}
        </div>
      ),
      okText,
      cancelText,
      okCancel: showCancel,
      onOk,
      onCancel,
      centered: true,
      className: 'custom-popup-modal',
      okButtonProps: { className: 'bg-blue-600 hover:bg-blue-500' },
      cancelButtonProps: { className: 'border-slate-600 text-white' },
    });
  }

  return { confirm };
}


