// src/services/errorHandler.ts
export const handleApiError = (error: any) => {
  if (error.response) {
    console.error('API error:', error.response.data.message || 'Unknown error');
  } else {
    console.error('Network error:', error.message);
  }
};
