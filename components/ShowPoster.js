import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/detailStyles';

export default function ShowPoster({ image }) {
    const [failedImage, setFailedImage] = useState(null);
    const hasImage = image && failedImage !== image;

    if (!hasImage) {
        return (
            <View style={styles.poster}>
                <Text style={styles.secondary}>No poster</Text>
            </View>
        );
    }

    return (
        <Image
            source={{ uri: image }}
            style={styles.poster}
            resizeMode="cover"
            accessible={false}
            onError={() => setFailedImage(image)}
        />
    );
}
