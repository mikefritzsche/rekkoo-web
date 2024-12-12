import { useRef, useEffect } from 'react';

const useTitle = () => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;

    const branchName = __GIT_BRANCH__;
    const fullTitle = branchName === 'main'
      ? 'Rekkoo'
      : `Rekkoo::Development [${branchName}]`;

    if (document.title !== fullTitle) {
      document.title = fullTitle;
    }

    return () => {
      document.title = originalTitle.current;
    };
  }, []);
};

export default useTitle;
