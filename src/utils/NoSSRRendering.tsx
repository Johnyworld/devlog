import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const NoSSRRendering = ({ children }: Props) => {
  const [isClientRendering, setClientRendering] = useState(false);

  useEffect(() => {
    setClientRendering(true);
  }, []);

  if (!isClientRendering) {
    return null;
  }

  return <>{children}</>;
};
