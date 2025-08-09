import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Video } from 'expo-av';
import { useRef, useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';




export default function App() {
  const videoRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);

  const handleStatusUpdate = status => {
    if (status.didJustFinish) {
      const count = playCount + 1;
      if (count < 3) {
        videoRef.current.replayAsync();
        setPlayCount(count);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* ****************************** || LOGO FACEBOOK ||*********************************/}
      <View style={styles.fixedTop}>
        <View style={styles.Logo}>
          <Image
            style={styles.imageFacebook}
            source={require('./assets/FacebookLogo.png')}
          />
        </View>

        {/* ****************************** || PREMIèRE LIGNE  ||*********************************/}
        <View style={styles.PremierLigne}>
          <TouchableOpacity style={styles.icone}>
            <AntDesign name="pluscircle" color="#000" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icone}>
            <FontAwesome name="search" color="#000" size={21.5} />
          </TouchableOpacity>

          {/* ***|| messenger with notif ||*******/}
          <TouchableOpacity style={styles.Messenger}>
            <MaterialCommunityIcons name="facebook-messenger" color="black" size={24.5} />
          </TouchableOpacity>
          <View style={styles.badge1}>
            <Text style={styles.badgeText}>7</Text>
          </View>
        </View>
      </View>

      {/* ****************************** || SCROLLVIEW À PARTIR DE SECONDE LIGNE ||*********************************/}

      <View style={styles.SecondeLigne}>
        <TouchableOpacity style={styles.iconeHOME}>
          <Foundation name="home" style={styles.iconStyle} color="#1969ef" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconePLAY}>
          <MaterialCommunityIcons name="television-play" style={styles.iconStyle} color="#64646b" size={29} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeUSER}>
          <Feather name="users" color="#64646b" style={styles.iconStyle} size={26} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeSTORE}>
          <MaterialIcons name="storefront" style={styles.iconStyle} color="#64646b" size={30} />
        </TouchableOpacity>

        {/* ***|| Cloche with notif ||*******/}
        <View style={styles.BellCloche}>
          <TouchableOpacity style={styles.ICONECloche}>
            <Octicons name="bell" color="#64646b" size={24} />
          </TouchableOpacity>
          <View style={styles.badge2}>
            <Text style={styles.badgePlusieurs}>+9</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Menu}>
          <Entypo name="menu" style={styles.iconStyle} color="#64646b" size={30} />
        </TouchableOpacity>
      </View>

      {/* ********************** || LIGNES DE SÉPARATION || ********************** */}
      <View style={styles.ligneFine} />
      <View style={styles.ligneBleue} />

      {/* ************************************ || TROISIÈME LIGNE || ************************************ */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollFeed}>
        <View style={styles.TroisiemeLigne}>
          <View style={styles.Profil}>
            <Image style={styles.image} source={require('./assets/flowers.jpg')} />
          </View>

          <View style={styles.barreQD9}>
            <TouchableOpacity style={styles.QDE9}>
              <Text style={styles.placeholder}>Quoi de neuf ?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.pictureVert}>
            <MaterialIcons name="photo-library" color="#53c281ff" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.ligneGrasse} />

        {/* ************************************ || STORIES || ************************************ */}
        <View style={styles.StoryLigne}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {/* Création Story */}
            <TouchableOpacity style={styles.CreationStory}>
              <Image style={styles.creationStoryIMAGE} source={require('./assets/flowers.jpg')} />
              <View style={styles.plusCircle}>
                <AntDesign name="pluscircle" size={30} color="#1976d2" />
              </View>
              <Text style={styles.creationTexte}>Créer une story</Text>
            </TouchableOpacity>

            {/* Stories différentes avec avatars uniques */}
            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/majunga.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/girl.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Yohanne</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/aes.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/S1.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Nati</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/sun.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/flowers.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Mira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/coco.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/S1.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Lana</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/sunset.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/girl.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Selma</Text>
              <Text style={styles.StoryNom}>Selma</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/sea.jpg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/S1.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Yohanne</Text>
              <Text style={styles.StoryNom}>Ahlem</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.LesStories}>
              <Image style={styles.storiesImages} source={require('./assets/JB.jpeg')} />
              <View style={styles.avatarWrapper}>
                <Image source={require('./assets/B.png')} style={styles.decorativeCircle} />
                <Image source={require('./assets/girl.jpg')} style={styles.avatarImage} />
              </View>
              <Text style={styles.StoryNom}>Jabari </Text>
              <Text style={styles.StoryNom}> Elie</Text>

            </TouchableOpacity>
          </ScrollView>
        </View>


        <View style={styles.ligneGrasse2} />

        {/* ************ || PUBLICATION AVEC VIDÉO || ************ */}
        <View style={styles.postContainer}>
          {/* En-tête auteur */}
          <View style={styles.postProfil}>
            <Image source={require('./assets/girl.jpg')} style={styles.postAvatar} />

            <View style={styles.profilContent}>
              <View style={styles.nomLigne}>
                <Text style={styles.postCompte} numberOfLines={2}>Maman Gâteau</Text>
                <MaterialIcons name="verified" color="#1976d2" size={16} style={styles.certifIcon} />
              </View>

              <View style={styles.profilActions}>
                <Text style={styles.Suivre}>Suivre</Text>
              </View>

              <Text style={styles.postDate}>Il y a 2 heures</Text>
            </View>

            <View style={styles.profilIcons}>
              <Entypo name="dots-three-horizontal" color="#64646b" size={24} />
              <Octicons name="x" color="#64646b" size={30} />
            </View>
          </View>



          {/* Texte de description */}
          <Text style={styles.postText}>
            Délicieux goûter, simple et rapide à faire chez soi! 😍
          </Text>

          {/* Vidéo */}
          <Video
            ref={videoRef}
            source={require('./assets/cook.mp4')}
            style={styles.postVideo}
            useNativeControls
            resizeMode="cover"
            shouldPlay={true}
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                const count = playCount + 1;
                if (count < 3) {
                  videoRef.current.replayAsync();
                  setPlayCount(count);
                }
              }
            }}
          />

          {/* Réactions */}
          <View style={styles.postFooter}>
            <Text style={styles.reactions}> 2 394</Text>
            <Text style={styles.reactions}> 46 commentaires  • </Text>
            <Text style={styles.reactions}> 12 M vues</Text>
            <View style={styles.ligneFine} />
            <AntDesign name="like2" color="#000" size={24} />
            <EvilIcons name="comment" color="black" size={24} />
            <MaterialCommunityIcons name="share-outline" color="#000" size={24} />

          </View>

          <View style={styles.ligneGrasse} />
        </View>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, // ✅ ne pas centrer, pour laisser ScrollView se gérer seul

  fixedTop: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingHorizontal: 16,
  },

  Logo: {
    top: 2,
    marginTop: -23,
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
  },

  imageFacebook: {
    width: 127,
    height: 128,
    resizeMode: 'contain',
  },

  /**********************| BADGE NOTIFICATION  |******************* */
  badge1: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 14,
    height: 16,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },

  /**********************|| BADGE NOTIFICATION PLUSIEURS ||******************* */
  badge2: {
    position: 'absolute',
    top: -7,
    right: -7,
    backgroundColor: 'red',
    borderRadius: 13,              // valeur très haute pour toujours arrondir
    paddingHorizontal: 4.5,          // largeur dynamique
    paddingVertical: 2,            // finesse verticale
    minWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgePlusieurs: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    lineHeight: 11,                // évite les sauts de ligne
    textAlign: 'center',
  },


  /************************************************************||LES LIGNES||*********************************************************** */
  /*******************|| PREMIER LIGNE||********************** */

  PremierLigne: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    gap: 21,
  },

  /*******************|| SECONDE LIGNE||********************** */
  SecondeLigne: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    gap: 36,
    left: -11,
  },

  iconStyle: {
    fontSize: 27,              // taille unifiée
    textAlignVertical: 'center',
    marginTop: -3,              // ajuste verticalement selon le rendu
  },



  /*******************||  LIGNE  FINE ||********************** */
  ligneFine: {
    height: 2,
    backgroundColor: '#d8dbdd',
    width: '100%',
    marginTop: -5,
    marginBottom: -2,
    alignSelf: 'center',
  },

  ligneBleue: {
    height: 3,
    width: '14%',
    backgroundColor: '#007bff',
    borderRadius: 1,
    marginLeft: 12,
    marginBottom: 8,
    left: -8,

  },

  /*******************||  LIGNE  GRASSE ||********************** */
  ligneGrasse: {
    height: 4.1,
    backgroundColor: '#c4c8caff',
    width: '100%',
    marginVertical: 12,
    borderRadius: 2,
    alignSelf: 'center',
  },
  ligneGrasse2: {
    height: 4.1,
    backgroundColor: '#c4c8caff',
    width: '100%',
    marginVertical: 10,
    borderRadius: 2,
    alignSelf: 'center',
  },
  /**************************************************|| TROISIèME LIGNE||******************************************************* */
  TroisiemeLigne: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 3, // ou plus selon espacement
    marginHorizontal: 12,
  },

  /****************| BARRE DE PENSé |************ */
  barreQD9: {
    width: '70%',
    marginTop: -1.5,
  },

  QDE9: {
    backgroundColor: 'white',
    borderRadius: 22,
    paddingVertical: 5.3,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
    borderWidth: 1.6,         // épaisseur de la bordure
    borderColor: '#d0d3d4ff',   // couleur noire
  },
  placeholder: {
    color: 'black',
    fontSize: 16,
    marginLeft: 3,
  },
  pictureVert: {
    top: 8,
    left: 13,
  },

  /****************| PROFIL |************ */
  Profil: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
    resizeMode: 'contain',

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
  },
  /***************************************************************************************************** */

  /******************************************|| LIGNES STORIES ||************************************* */
  CreationStory: {
    width: 100,
    height: 189,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#d0d3d4ff',
    marginRight: 7,
  },

  creationStoryIMAGE: {
    width: '100%',
    height: 95,
    resizeMode: 'cover',
  },

  plusCircle: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 2,
  },

  creationTexte: {
    fontSize: 12,
    color: '#222',
    marginTop: 30,
    textAlign: 'center',
    fontWeight: "bold",

  },

  StoryLigne: {
    marginTop: 2,
    paddingLeft: 17,
    flexDirection: 'row',

  },

  storiesImages: {
    width: 100,
    height: 189,
    borderRadius: 15,
    resizeMode: 'cover',
    zIndex: 1,
    marginRight: 7,
    position: 'relative', //important 
    zIndex: 1,
  },

  /**********************| AVATAR STORY|******************* */
  avatarWrapper: {
    position: 'absolute',
    top: 8,
    left: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, //   Il contrôle l’ordre d’empilement des composants dans l’interface.
    // Un zIndex plus élevé met l’élément devant les autres.
    // Un zIndex plus faible le met derrière les autres.
  },
  StoryNom: {
    marginTop: -30,
    zIndex: 2,
    color: 'white',
    left: 20,
    margin: -15,
  },
  decorativeCircle: {
    width: 112,
    height: 112,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2, // au-dessus du fond
  },

  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 24,
    resizeMode: 'cover',
  },

  scrollFeed: {
    paddingTop: 0,
  },
  /*******************************| PUBLICATION VIDéO + CERTIFICATION + SUIVRE|************************************ */
  postContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 8.5,

  },
  scrollContainer: {
    paddingLeft: 1,

  }, postProfil: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },

  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  profilContent: {
    flex: 1,
  },

  nomLigne: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  certifIcon: {
    marginLeft: 4,
  },

  postCompte: {
    fontWeight: 'bold',
    fontSize: 14,
    flexShrink: 1,
  },

  profilActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -3,
    gap: 10,
  },

  Suivre: {
    color: '#1976d2',
    fontWeight: 'bold',

  },

  postDate: {
    fontSize: 11,
    color: '#777',
    marginTop: -2,
  },

  profilIcons: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    marginRight: 10,
    marginTop: -9,
  },


  postVideo: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    backgroundColor: '#000',
    marginBottom: 20,
  },

  postFooter: {
    marginTop: 10,
  },

  reactions: {
    fontSize: 12,
    color: '#555',
  },

});
