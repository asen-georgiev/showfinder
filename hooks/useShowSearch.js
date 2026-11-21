import { useCallback, useEffect, useState } from 'react';
import { searchShows } from '../services/tvmazeApi';

export default function useShowSearch(query) {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [attempt, setAttempt] = useState(0);

    const retry = useCallback(() => {
        setAttempt((previous) => previous + 1);
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        async function loadShows() {
            setLoading(true);
            setError('');
            setShows([]);

            try {
                const results = await searchShows(query, controller.signal);

                if (!controller.signal.aborted) {
                    setShows(results);
                }
            } catch {
                if (!controller.signal.aborted) {
                    setError('Could not load shows. Check your connection and try again.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadShows();

        return () => controller.abort();
    }, [query, attempt]);

    return { shows, loading, error, retry };
}
