import { useState, useEffect } from 'react';
import { fetchApod, ApodResponse } from '@/services/nasa';

interface UseApodState {
  data: ApodResponse | null;
  loading: boolean;
  error: string | null;
}

export const useApod = (date?: string) => {
  const [state, setState] = useState<UseApodState>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const loadApod = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await fetchApod(date);
        
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : 'Failed to load cosmic data'
          });
        }
      }
    };

    loadApod();

    return () => {
      isMounted = false;
    };
  }, [date]);

  return state;
};