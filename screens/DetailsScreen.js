import { ScrollView, Text,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/detailStyles';
import ShowPoster from '../components/ShowPoster';

export default function DetailsScreen({ route }) {
    const { show } = route.params;

    return (
        <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <ShowPoster key={show.id} image={show.image} />
                <Text accessibilityRole="header" style={styles.title}>
                    {show.name}
                </Text>
                <Text style={styles.secondary}>Rating: {show.rating}</Text>
                <Text style={styles.secondary}>Genre: {show.genre}</Text>
                <Text style={styles.secondary}>Language: {show.language ?? '—'}</Text>
                <Text style={styles.secondary}>Status: {show.status ?? '—'}</Text>

                <Text accessibilityRole="header" style={styles.sectionTitle}>
                    Description
                </Text>
                <Text style={styles.secondary}>
                    {show.summary ?? 'Description will be available once live search is connected.'}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
