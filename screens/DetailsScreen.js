import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/detailStyles';

export default function DetailsScreen({ route }) {
    const { show } = route.params;

    return (
        <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.poster}>
                    <Text style={styles.secondary}>Poster</Text>
                </View>

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
