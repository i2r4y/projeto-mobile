import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const Header = () => {
    const larguraTela = Dimensions.get('window').width;

    return (
        <View style={[styles.container, {width: larguraTela}]}>

           <View style={styles.containerMenu}>
             <View style={styles.menu}>
                <Image
                    style={styles.styleMenu}
                    source={require("../../assets/menu.png")}
                />
            </View>

            <View style={styles.logo}>
                <Image
                    style={styles.styleLogo}
                    source={require("../../assets/logo.png")}
                />
            </View>

            <View style={styles.lupa}>
                <Image
                    style={styles.styleLupa}
                    source={require("../../assets/lupa.png")}
                />
            </View>
           </View>

            <View style={styles.banner}>
                <Image
                    style={styles.styleBanner}
                    source={require("../../assets/banner.png")}
                
                />

            </View>

       
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
        
    },
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        // paddingRight: 30,

    },

    styleMenu: {
        width: 30,
        height: 60
    },

    styleLogo: {
        width: 110,
        height: 45
    },
    styleLupa: {
        width: 26,
        height: 26
    },

  styleBanner: {
    width: 390,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
    padding:90,
    alignItems: 'center',
  },

})