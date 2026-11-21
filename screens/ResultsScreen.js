import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useShowSearch from '../hooks/useShowSearch';
import styles from '../styles/resultStyles';
import { colors } from '../styles/searchStyles';
import ShowCard from '../components/ShowCard';

export default function ResultsScreen({ navigation, route }) {
    const { query } = route.params;
    const { shows, loading, error,retry } = useShowSearch(query);

    const results = shows.map((show) => ({
        id: show.id,
        name: show.name,
        genre: show.genres.join(', ') || 'Not available',
        rating:
            show.rating.average != null
                ? `${show.rating.average} / 10`
                : 'Not rated',
        language: show.language || 'Not available',
        status: show.status || 'Not available',
        summary: show.summary
            ? show.summary.replace(/<[^>]*>/g, '')
            : 'No description available.',
        image: show.image?.medium ?? null,
    }));

    return (
        <SafeAreaView
            style={styles.screen}
            edges={['left', 'right', 'bottom']}
        >
            <FlatList
                data={results}
                keyExtractor={(show) => String(show.id)}
                contentContainerStyle={styles.list}
                ListHeaderComponent={
                    <View>
                        <Text accessibilityRole="header" style={styles.title}>
                            Results for “{query}”
                        </Text>

                        <Text style={styles.preview}>
                            {loading
                                ? 'Searching for shows…'
                                : error
                                    ? 'Search unavailable'
                                    : `${results.length} shows found`}
                        </Text>
                    </View>
                }
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator
                            size="large"
                            color={colors.title}
                            accessibilityLabel="Loading shows"
                        />
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.secondary}>
                                {error || 'No shows found. Go back and try another title.'}
                            </Text>

                            {error ? (
                                <Pressable
                                    accessibilityRole="button"
                                    onPress={retry}
                                    style={({ pressed }) => [
                                        styles.retryButton,
                                        pressed && styles.retryButtonPressed,
                                    ]}
                                >
                                    <Text style={styles.retryButtonText}>Retry</Text>
                                </Pressable>
                            ) : null}
                        </View>
                    )
                }
                renderItem={({ item }) => (
                    <ShowCard
                        show={item}
                        onPress={() => navigation.navigate('Details', { show: item })}
                    />
                )}
            />
        </SafeAreaView>
    );
}
