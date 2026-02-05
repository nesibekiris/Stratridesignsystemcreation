interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

export function LoadingState({ size = 'md', message, fullScreen = false }: LoadingStateProps) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div 
        className={`${sizes[size]} border-t-transparent rounded-full animate-spin`}
        style={{ borderColor: '#184A5A', borderTopColor: 'transparent' }}
        role="status"
        aria-label="Loading"
      />
      {message && (
        <p 
          className="font-sans text-sm animate-pulse"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#FEFBF8' }}
      >
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-12">{spinner}</div>;
}

// Inline loading spinner for buttons
export function ButtonLoadingSpinner() {
  return (
    <div 
      className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
      style={{ borderColor: 'currentColor', borderTopColor: 'transparent' }}
      role="status"
      aria-label="Loading"
    />
  );
}

// Skeleton loader for content
export function SkeletonLoader({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded"
          style={{ 
            backgroundColor: '#E8E4DF',
            width: i === lines - 1 ? '60%' : '100%'
          }}
        />
      ))}
    </div>
  );
}
