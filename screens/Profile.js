import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Components/CustomButton';
import { auth } from '../firebase';

const Profile = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{
            navigation.replace('Create') 
        })

        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text style ={styles.profileText}>Welcome {auth.currentUser?.email}</Text>
            <CustomButton onSignInPress={handleSignOut} Btext='Log Out'>
               
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customText: {
        color: 'white'
    },

    profileText: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold'
    }
})

export default Profile;
