export const getApiUrl = () => {
  const isDev = process.env.NODE_ENV === 'development';
  return isDev ? 'http://localhost:3000/' : 'https://reno-scca-web-nextjs.vercel.app/';
};