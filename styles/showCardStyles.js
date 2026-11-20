import { StyleSheet } from 'react-native';
import { colors } from './searchStyles';

export default StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        backgroundColor: colors.surface,
    },
    pressed: {
        opacity: 0.8,
    },
    poster: {
        width: 72,
        height: 108,
        borderRadius: 8,
        backgroundColor: colors.input,
    },
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    placeholderText: {
        color: colors.muted,
        fontSize: 12,
        textAlign: 'center',
    },
    body: {
        flex: 1,
        gap: 6,
    },
    name: {
        color: colors.text,
        fontSize: 17,
        fontWeight: '700',
    },
    secondary: {
        color: colors.muted,
        fontSize: 14,
    },
});
