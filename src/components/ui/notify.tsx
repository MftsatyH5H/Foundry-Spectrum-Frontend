import React from 'react';
import { App, notification } from 'antd';
import { CheckCircleFilled, InfoCircleFilled, WarningFilled, CloseCircleFilled, LoadingOutlined, CloseOutlined } from '@ant-design/icons';

type NoticeKind = 'success' | 'info' | 'warning' | 'error' | 'loading';

const baseContainerClass =
  'min-h-16 rounded-lg p-1 bg-[#0A0A2B] opacity-100 text-white flex items-start justify-center gap-[10px]';

const shadowStyle = {
  boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A',
} as const;

function getIcon(kind: NoticeKind) {
  switch (kind) {
    case 'success':
      return <CheckCircleFilled className="text-green-400 text-xl" />;
    case 'info':
      return <InfoCircleFilled className="text-blue-400 text-xl" />;
    case 'warning':
      return <WarningFilled className="text-yellow-400 text-xl" />;
    case 'error':
      return <CloseCircleFilled className="text-red-400 text-xl" />;
    case 'loading':
      return <LoadingOutlined className="text-white text-xl" />;
    default:
      return null;
  }
}

export function showNotification(kind: NoticeKind, content: React.ReactNode, duration: number = 3) {
  const body = (
    <div className={baseContainerClass} style={shadowStyle}>
      <div className="flex items-center justify-center">{getIcon(kind)}</div>
      <div className="flex-1 text-sm leading-snug whitespace-normal break-words">{content}</div>
      <button 
        className="flex items-center justify-center text-white hover:text-gray-300 transition-colors p-1"
        onClick={() => notification.destroy()}
      >
        <CloseOutlined className="text-sm" />
      </button>
    </div>
  );

  return notification.open({
    message: null,
    description: body,
    duration,
    placement: 'topRight',
    className: 'p-0 bg-transparent',
    closeIcon: null, // Hide the default close button
  });
}

export function useNotification() {
  const { notification: ctxNotification } = App.useApp();

  function open(kind: NoticeKind, content: React.ReactNode, duration: number = 3) {
    const body = (
      <div className={baseContainerClass} style={shadowStyle}>
        <div className="flex items-center justify-center">{getIcon(kind)}</div>
        <div className="flex-1 text-sm leading-snug whitespace-normal break-words">{content}</div>
        <button 
          className="flex items-center justify-center text-white hover:text-gray-300 transition-colors p-1"
          onClick={() => ctxNotification.destroy()}
        >
          <CloseOutlined className="text-sm" />
        </button>
      </div>
    );

    return ctxNotification.open({
      message: null,
      description: body,
      duration,
      placement: 'topRight',
      className: 'p-0 bg-transparent',
      closeIcon: null, // Hide the default close button
    });
  }

  return {
    open,
    success: (c: React.ReactNode, d?: number) => open('success', c, d),
    info: (c: React.ReactNode, d?: number) => open('info', c, d),
    warning: (c: React.ReactNode, d?: number) => open('warning', c, d),
    error: (c: React.ReactNode, d?: number) => open('error', c, d),
    loading: (c: React.ReactNode, d?: number) => open('loading', c, d),
  };
}


