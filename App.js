import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [currentSection, setCurrentSection] = useState('name');


  const data = {
    imageUrl: require('./assets/jp.jpg'),
    name: 'John Paul B. Pambujan',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Rosaurio Almario Elementary School',
      highSchool: 'Raja Soliman Science and Technology High School',
      seniorhighschool: 'Raja Soliman Science and Technology High School',
      college2: 'Global Reciprocap Colleges Caloocan',
    },
    about: 'Hi! I am John Paul B. Pambujan, 22yrs old currently 3rd year student taking BIST in GRC, my favorite things to do is playing online games because playing online game is making me comfortable and happy playing online games is my comfort zone in life because in online games I can do whatever I want to do and I am free to make decisions on how I play the game.',
    game1:
    {
      Name: 'Ragnarok',
      imageSrc: require('./assets/img6.jpg'),
      description: 'Ragnarok Online is a Competetive game that needs a commands for a good team play.'
    },
    game2:
    {
      gameName: 'League of Legends',
      imageSrc: require('./assets/img2.jpeg'),
      description: 'League of Leagends is a 5 v 5 game that needs a everyone in the team to cooperate to do objectives and to win the teamfights to end the game quicker.'
    },
    contact:
    {
      email: 'pambujan.jp@gmail.com',
      description: '09128651758'
    }

  }

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'game1'
        case 'game1':
          return 'game2'
        case 'game2':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college2}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear2}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>Senior High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.seniorhighschool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'game1' && (
            <View>
              <Text style={styles.textHeader}>game #1:</Text>
              <Text style={styles.textHeaderSmall}>{data.game1.gameName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.gameImg} source={data.game1.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.game1.description}</Text>
            </View>
          )}
          {currentSection === 'game2' && (
            <View>
              <Text style={styles.textHeader}>game #2:</Text>
              <Text style={styles.textHeaderSmall}>{data.game2.gametName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.gameImg} source={data.game2.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.game2.description}</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>pambujan.jp@gmail.com</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09128651758</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
    gameImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  },
  borderRed: {
    borderWidth: 1, // border width
    borderColor: 'red', // border color
  }
})


export default App;