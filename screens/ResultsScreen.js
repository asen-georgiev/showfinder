import {FlatList, Pressable, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/resultStyles';

const previewShows = [
    { id: 'office-us', name: 'The Office (US)', genre: 'Comedy', rating: '8.5 / 10' },
    { id: 'office-uk', name: 'The Office (UK)', genre: 'Comedy', rating: '8.1 / 10' },
    { id: 'office-au', name: 'The Office (Australia)', genre: 'Comedy', rating: 'Not rated' },
];

export default function ResultsScreen({ navigation, route }) {
    const { query } = route.params;

    return (
        <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
            <FlatList
                data={previewShows}
                keyExtractor={(show) => show.id}
                contentContainerStyle={styles.list}
                ListHeaderComponent={
                    <View>
                        <Text accessibilityRole="header" style={styles.title}>
                            Results for “{query}”
                        </Text>
                        <Text style={styles.preview}>Layout preview · Sample shows</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable
                        accessibilityRole="button"
                        style={styles.card}
                        onPress={() => navigation.navigate('Details', { show: item })}
                    >
                        <View style={styles.poster}>
                            <Text style={styles.secondary}>Poster</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.showName}>{item.name}</Text>
                            <Text style={styles.secondary}>{item.genre}</Text>
                            <Text style={styles.secondary}>Rating: {item.rating}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </SafeAreaView>
    );
}
