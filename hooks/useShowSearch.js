import { useEffect, useState } from 'react';
import { searchShows } from '../services/tvmazeApi';

export default function useShowSearch(query) {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
                    setError('Could not load shows. Please try again.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadShows();

        return () => controller.abort();
    }, [query]);

    return { shows, loading, error };
}
