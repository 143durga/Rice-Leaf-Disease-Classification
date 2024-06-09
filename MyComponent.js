import React, { useEffect } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

const MyComponent = () => {
  useEffect(() => {
    let isMounted = true;

    // Example async operation
    const asyncOperation = async () => {
      const result = await fetch('some-url');
      if (isMounted) {
        // Perform state update or other operations
      }
    };

    asyncOperation();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <DropzoneArea
        onChange={(files) => {
          // Handle file changes
        }}
      />
    </div>
  );
};

export default MyComponent;
