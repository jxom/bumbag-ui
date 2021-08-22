const NoopComponent = ({ children }) => children;
const useNoop = () => null;

export const Toast = NoopComponent;
export const ToastContext = NoopComponent;
export const ToastManager = NoopComponent;
export const ToastProvider = NoopComponent;
export const useToasts = useNoop;
