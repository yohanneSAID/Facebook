import { View, Text, StyleSheet } from 'react-native';

export default function CommentairePage() {
    return (
        <View style={styles.container}>
            <Text>Bienvenue sur la page de commentaires</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
