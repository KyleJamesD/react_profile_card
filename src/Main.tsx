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
import ProfileCardProps from "./components/ProfileCardProps";
import ProfileCardObject from "./components/ProfileCardObject";

const profileData = {
  bannerImage: require('../assets/banner.jpg'),
  profilePhoto: require('../assets/profilePhoto.jpeg'),
  profileName: 'Johnny Bravo',
  profileSubtitle: 'Whoa, mama!',
  profileIntro: "Hey there, pretty mama! The name's Johnny Bravo!",
};

  const passedbannerImage = require("../assets/banner.jpg");
  const passedprofilePhoto = require("../assets/profilePhoto.jpeg");
  const passedprofileName = "Johnny Bravo";
  const passedprofileSubtitle = "Whoa, mama!";
  const passedprofileIntro = "Hey there, pretty mama! The name's Johnny Bravo.!!"


  function Main() : React.JSX.Element {
    return (
      <ScrollView>
            <View>
              <ProfileCard/>
              <ProfileCardProps
                bannerImage={passedbannerImage}
                profilePhoto={passedprofilePhoto}
                profileName={passedprofileName}
                profileSubtitle={passedprofileSubtitle}
                profileIntro={passedprofileIntro}
                />
                <ProfileCardObject {...profileData}/>

            </View>
        </ScrollView>
    );
  }

  const style = StyleSheet.create({
    container:{

    },
    item: {
        
    },
  }) 

export default Main;