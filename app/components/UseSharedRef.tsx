
import { useRef } from 'react';

const useSharedRef = () => {
    const sharedRef = useRef(null);
    return sharedRef;
};

export default useSharedRef;
