import React from 'react';
import { App, message } from 'antd';
import { CheckCircleFilled, InfoCircleFilled, WarningFilled, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';

type MessageKind = 'success' | 'info' | 'warning' | 'error' | 'loading';

const baseContainerClass =
  'w-[320px] h-16 rounded-lg p-1 bg-[#0A0A2B] opacity-100 text-white flex items-center gap-[10px]';

const shadowStyle = {
  boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A',
} as const;

function getIcon(kind: MessageKind) {
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

export function showMessage(kind: MessageKind, content: React.ReactNode, duration: number = 3) {
  const body = (
    <div className={baseContainerClass} style={shadowStyle}>
      <div className="shrink-0">{getIcon(kind)}</div>
      <div className="truncate text-sm leading-snug">{content}</div>
    </div>
  );

  return message.open({
    type: kind === 'loading' ? undefined : (kind as Exclude<MessageKind, 'loading'>),
    content: body,
    duration,
    className: 'p-0 bg-transparent',
  });
}

export function useMessage() {
  const { message: ctxMessage } = App.useApp();

  function open(kind: MessageKind, content: React.ReactNode, duration: number = 3) {
    const body = (
      <div className={baseContainerClass} style={shadowStyle}>
        <div className="shrink-0">{getIcon(kind)}</div>
        <div className="truncate text-sm leading-snug">{content}</div>
      </div>
    );

    return ctxMessage.open({
      type: kind === 'loading' ? undefined : (kind as Exclude<MessageKind, 'loading'>),
      content: body,
      duration,
      className: 'p-0 bg-transparent',
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


