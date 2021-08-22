module.exports = {
  siteUrl: process.env.VERCEL_ENV === 'production' ? 'https://bumbag.style' : process.env.VERCEL_URL,
  generateRobotsTxt: process.env.VERCEL_ENV === 'production',
};
