import { AlertCircle, XCircle, Info, CheckCircle } from 'lucide-react';

interface ErrorMessageProps {
  type?: 'error' | 'warning' | 'info' | 'success';
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

export function ErrorMessage({ 
  type = 'error', 
  title, 
  message, 
  action,
  onDismiss 
}: ErrorMessageProps) {
  const config = {
    error: {
      Icon: XCircle,
      bgColor: '#FEF2F2',
      borderColor: '#FCA5A5',
      textColor: '#991B1B',
      iconColor: '#DC2626'
    },
    warning: {
      Icon: AlertCircle,
      bgColor: '#FFFBEB',
      borderColor: '#FCD34D',
      textColor: '#92400E',
      iconColor: '#F59E0B'
    },
    info: {
      Icon: Info,
      bgColor: '#EFF6FF',
      borderColor: '#93C5FD',
      textColor: '#1E40AF',
      iconColor: '#3B82F6'
    },
    success: {
      Icon: CheckCircle,
      bgColor: '#F0FDF4',
      borderColor: '#86EFAC',
      textColor: '#166534',
      iconColor: '#22C55E'
    }
  };

  const { Icon, bgColor, borderColor, textColor, iconColor } = config[type];

  return (
    <div 
      className="rounded-sm border p-4 flex gap-3 animate-fade-in"
      style={{ backgroundColor: bgColor, borderColor }}
      role="alert"
    >
      <div className="flex-shrink-0">
        <Icon size={20} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        {title && (
          <h4 
            className="font-sans text-sm font-medium mb-1"
            style={{ color: textColor }}
          >
            {title}
          </h4>
        )}
        <p 
          className="font-sans text-sm"
          style={{ color: textColor, opacity: 0.9 }}
        >
          {message}
        </p>
        {action && (
          <button
            onClick={action.onClick}
            className="mt-3 inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80 focus-visible-ring"
            style={{ color: iconColor }}
          >
            {action.label} →
          </button>
        )}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity focus-visible-ring"
          style={{ color: textColor }}
          aria-label="Dismiss"
        >
          <XCircle size={16} />
        </button>
      )}
    </div>
  );
}

// Form field error message
export function FieldError({ message }: { message: string }) {
  return (
    <p 
      className="mt-1 text-xs font-sans flex items-center gap-1"
      style={{ color: '#DC2626' }}
      role="alert"
    >
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

// Helper function to get user-friendly error messages
export function getUserFriendlyErrorMessage(error: any): string {
  // Network errors
  if (!navigator.onLine) {
    return "Looks like you're offline. Please check your internet connection and try again.";
  }

  // Common HTTP errors
  const status = error?.response?.status || error?.status;
  switch (status) {
    case 400:
      return "We couldn't process that request. Please check your information and try again.";
    case 401:
      return "Your session has expired. Please sign in again to continue.";
    case 403:
      return "You don't have permission to access this. Please contact support if you think this is an error.";
    case 404:
      return "We couldn't find what you're looking for. It might have been moved or deleted.";
    case 429:
      return "You're going a bit too fast! Please wait a moment and try again.";
    case 500:
      return "Something went wrong on our end. We're working to fix it. Please try again in a few minutes.";
    case 503:
      return "Our service is temporarily unavailable. We'll be back shortly!";
    default:
      return error?.message || "Something unexpected happened. Please try again.";
  }
}
