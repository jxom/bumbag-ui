type TODO = any;

export default (overrides: TODO) => ({
  placement: 'top-end',
  showCountdown: true,
  timeout: 0,
  ...overrides
});
