import { StyleSheet } from 'react-native';

export const colors = {
    background: '#101113',
    surface: '#1A1C20',
    input: '#121417',
    text: '#F5F5F0',
    muted: '#A7ADB7',
    border: '#343943',
    primary: '#D4F478',
    onPrimary: '#172005',
    disabled: '#2A2E35',
    onDisabled: '#A7ADB7',
    title: '#F5C518',
};

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    keyboard: {
        flex: 1,
    },
    page: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24,
    },
    content: {
        width: '100%',
        maxWidth: 440,
        alignSelf: 'center',
    },
    title: {
        color: colors.title,
        fontSize: 42,
        fontWeight: '800',
        letterSpacing: -1.4,
        textAlign: 'center',
    },
    subtitle: {
        color: colors.muted,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 8,
    },
    form: {
        marginTop: 32,
        padding: 20,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 20,
    },
    label: {
        color: colors.text,
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 8,
    },
    input: {
        minHeight: 52,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        color: colors.text,
        fontSize: 16,
    },
    button: {
        minHeight: 52,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 12,
    },
    buttonDisabled: {
        backgroundColor: colors.disabled,
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: '700',
    },
});
