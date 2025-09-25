import React from 'react';
import { App as AntdApp, ConfigProvider, theme } from 'antd';

type Props = {
  children: React.ReactNode;
};

export default function AntdAppProvider({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#0A0A2B',
          colorText: '#ffffff',
          borderRadius: 8,
        },
        components: {
          Modal: {
            colorBgElevated: '#0A0A2B',
          },
          Message: {
            colorBgElevated: '#0A0A2B',
          },
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}


