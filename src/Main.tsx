import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  import ProfileCard from "./components/ProfileCard";

  const passedbannerImage = "../../assets/banner.jpg"
  const passedprofilePhoto = "../../assets/profilePhoto.jpeg";
  const passedprofileName = "Johnny Bravo";
  const passedprofileSubtitle = "Whoa, mama!";
  const passedprofileIntro = "Hey there, pretty mama! The name's Johnny Bravo.!!"


  function Main() : React.JSX.Element {
    return (
            <View>
              <ProfileCard bannerImage={passedbannerImage} profilePhoto={passedprofilePhoto} profileName={passedprofileName} profileSubtitle={passedprofileSubtitle} profileIntro={passedprofileIntro}/>
            </View>

    );
  }

  const style = StyleSheet.create({
    container:{

    },
    item: {
        
    },
  }) 

export default Main;