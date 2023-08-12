'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const usePageTransition = () => {
    const router = useRouter();
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        if (typeof window === 'undefined') return; // 이 코드 줄 추가
        const handleRouteChange = () => {
            setAnimationClass('page-enter');
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        if (typeof window === 'undefined') return; // 이 코드 줄 추가
        setAnimationClass('page-exit');
    }, [router.route]);

    return animationClass;
};
