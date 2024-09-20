import React from "react";
import {
  Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';



  function ProfileCard(props: any) : React.JSX.Element {


    const bannerImage = props.bannerImage;
    const profilePhoto = props.profilePhoto;
    const profileName = props.profileName;
    const profileSubtitle = props.profileSubtitle;
    const profileIntro = props.profileIntro;
    



    return (
      <View style={style.outisdeContainer}>
          
            <View style={style.profileCard}>
                <Image style={style.bannerImage} source={require('../../assets/banner.jpg')} />
                <Image style={style.profilePhoto} source={require('../../assets/profilePhoto.jpeg')}/>
                <Text style={style.name}>Johnny Bravo</Text>
                <Text style={style.subtitle}>Whoa, Mama!</Text>
                <Text style={style.introduction}>"Hey there, pretty mama! The name's Johnny Bravo.!!"</Text>

                <View style={style.socialContainer}>
                  <Image style={style.social} source={require('../../assets/fb.png')}></Image>
                  <Image style={style.social} source={require('../../assets/insta.png')}></Image>
                  <Image style={style.social} source={require('../../assets/linkedin.png')}></Image>
                  <Image style={style.social} source={require('../../assets/twitter.png')}></Image>
                </View>
            
            </View>
            
      </View>
    );
  }

  const style = StyleSheet.create({
    outisdeContainer: {
      alignItems: 'center',

    },

    profileCard: {
      alignItems: 'center',
      height:500,
      width: '80%',
      elevation: 20,
      borderRadius: 20,
      backgroundColor: '#FFF0D1',
      resizeMode: 'cover',
      overflow: 'hidden',
    },

    bannerImage: {
      height:180,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,    
    },

    profilePhoto: {
      height:140,
      width: 140,
      borderRadius: 140/2,
      position: 'absolute',
      top: 110,
      borderWidth: 7,
      borderColor: 'white',
      resizeMode: 'cover', 
    },

    name : {
      marginTop : 70,
      fontSize: 30,
      fontWeight: '600',
      fontFamily : 'Pacifico',
      color: '#FF6600',
    },

    subtitle : {
      fontSize: 25,
      fontWeight: '400',
      fontFamily: 'Pacifico',
      color: 'black',
    },

    introduction: {
      fontSize: 22,
      fontFamily: 'sans-serif',
      fontWeight: '400',
    },

    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '80%',
      marginTop: 35,

    },

    social : {
    height: 30,
    width: 30,
    borderRadius: 30/2,
    resizeMode: 'cover',

    },


  }) 

export default ProfileCard;