import {useCallback, useEffect, useState} from "react";


export function useScrollDetection(minOffset: number): boolean {
    const [isScrolled, setIsScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setIsScrolled(
            document.body.scrollTop > minOffset ||
            document.documentElement.scrollTop > minOffset
        );
    }, [minOffset])

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    return isScrolled;
}
