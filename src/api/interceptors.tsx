import React from 'react';
import axios from 'axios';
import { showNotification } from '../components/ui';

function extractBackendErrorMessage(error: any): string {
  const fallback = 'Request failed. Please try again.';
  if (!error) return fallback;
  const response = error.response;
  if (!response) return error.message || fallback;

  const data = response.data;
  if (!data) return response.statusText || fallback;

  if (typeof data === 'string') return data;
  if (data.message && typeof data.message === 'string') return data.message;
  if (data.error && typeof data.error === 'string') return data.error;
  if (data.detail && typeof data.detail === 'string') return data.detail;

  try {
    return JSON.stringify(data);
  } catch (_) {
    return fallback;
  }
}

export function registerAxiosInterceptors() {
  axios.interceptors.response.use(
    (res) => res,
    (error) => {
      const msg = extractBackendErrorMessage(error);
      showNotification('error', (
        <div className="text-sm break-words">{msg}</div>
      ), 4);
      return Promise.reject(error);
    },
  );
}


