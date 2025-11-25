import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';
import { useEffect } from 'react';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  useProfileStore.subscribe(state => {
    console.log('CHANGED', JSON.stringify(state, null, 2));
    console.log('CHANGED --> ' + state.name);
  });

  useEffect(() => {
    console.log('Cambio detectado');
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text>----------------------------</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Hikari no Tohure' })}
      >
        <Text>Change Name</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Tohure', 'tohure@xgoogle.com')}
      >
        <Text>Reset Name</Text>
      </Pressable>
    </View>
  );
};
