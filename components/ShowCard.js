import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from '../styles/showCardStyles';

export default function ShowCard({ show, onPress }) {
    const [failedImage, setFailedImage] = useState(null);
    const hasImage = show.image && failedImage !== show.image;

    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={`View details for ${show.name}`}
            onPress={onPress}
            style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
            ]}
        >
            {hasImage ? (
                <Image
                    source={{ uri: show.image }}
                    style={styles.poster}
                    resizeMode="cover"
                    accessible={false}
                    onError={() => setFailedImage(show.image)}
                />
            ) : (
                <View style={[styles.poster, styles.placeholder]}>
                    <Text style={styles.placeholderText}>No poster</Text>
                </View>
            )}

            <View style={styles.body}>
                <Text style={styles.name}>{show.name}</Text>
                <Text style={styles.secondary}>{show.genre}</Text>
                <Text style={styles.secondary}>Rating: {show.rating}</Text>
            </View>
        </Pressable>
    );
}
