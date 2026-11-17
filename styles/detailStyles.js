import { StyleSheet } from 'react-native';
import { colors } from './searchStyles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        width: '100%',
        maxWidth: 520,
        alignSelf: 'center',
        padding: 24,
        gap: 12,
    },
    poster: {
        width: '50%',
        maxWidth: 180,
        aspectRatio: 2 / 3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 8,
    },
    title: {
        color: colors.title,
        fontSize: 30,
        fontWeight: '800',
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8,
    },
    secondary: {
        color: colors.muted,
        fontSize: 15,
        lineHeight: 23,
    },
});
