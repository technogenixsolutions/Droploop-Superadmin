import React from 'react';

import { Progress } from '@/components/ui/progress';

export default function ProgressComponents() {
  const [progressed, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progressed} className="h-6 w-full" />;
}
