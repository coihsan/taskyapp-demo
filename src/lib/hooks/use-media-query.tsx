"use client"

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string){
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
      const matchQueryList = window.matchMedia(query);
      function handleChange(e: { matches: boolean | ((prevState: boolean) => boolean); }) {
        setMatches(e.matches);
      }
      matchQueryList.addEventListener("change", handleChange);
    }, [query]);
    return matches;
}