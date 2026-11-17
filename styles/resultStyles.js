import { StyleSheet } from 'react-native';
import { colors } from './searchStyles';

export const resultsHeaderOptions = {
    headerStyle: { backgroundColor: colors.surface },
    headerTintColor: colors.text,
    headerTitleStyle: { color: colors.title },
};

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    list: {
        padding: 20,
        paddingBottom: 32,
        gap: 12,
    },
    title: {
        color: colors.title,
        fontSize: 28,
        fontWeight: '800',
    },
    preview: {
        color: colors.muted,
        fontSize: 14,
        marginTop: 6,
        marginBottom: 8,
    },
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
    poster: {
        width: 64,
        height: 88,
        borderRadius: 8,
        backgroundColor: colors.input,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBody: {
        flex: 1,
        gap: 5,
    },
    showName: {
        color: colors.text,
        fontSize: 17,
        fontWeight: '700',
    },
    secondary: {
        color: colors.muted,
        fontSize: 14,
    },
});
