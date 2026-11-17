import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles, { colors } from '../styles/searchStyles';

export default function SearchScreen({ onSearch }) {
    const [title, setTitle] = useState('');
    const query = title.trim();
    const canSearch = query.length > 0;

    function submitSearch() {
        if (canSearch) {
            onSearch(query);
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.page}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.content}>
                        <Text accessibilityRole="header" style={styles.title}>
                            ShowFinder
                        </Text>
                        <Text style={styles.subtitle}>
                            Find information about TV shows.
                        </Text>

                        <View style={styles.form}>
                            <Text style={styles.label}>TV show title</Text>
                            <TextInput
                                accessibilityLabel="TV show title"
                                style={styles.input}
                                placeholder="Enter a show name…"
                                placeholderTextColor={colors.muted}
                                value={title}
                                onChangeText={setTitle}
                                returnKeyType="search"
                                onSubmitEditing={submitSearch}
                            />

                            <Pressable
                                accessibilityRole="button"
                                accessibilityState={{ disabled: !canSearch }}
                                disabled={!canSearch}
                                onPress={submitSearch}
                                style={({ pressed }) => [
                                    styles.button,
                                    !canSearch && styles.buttonDisabled,
                                    pressed && styles.buttonPressed,
                                ]}
                            >
                                <Text style={[styles.buttonText, !canSearch && styles.buttonTextDisabled]}>
                                    Search
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
