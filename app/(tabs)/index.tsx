import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar, Platform, TouchableOpacity, Linking } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function DecisionScreen() {

    const [loaded, error] = useFonts({
        'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    const date = new Date();
    const hour = date.getHours();
    let time = '';
    if (hour >= 0 && hour < 10) {
        time = 'Pagi';
    } else if (hour >= 10 && hour < 15) {
        time = 'Siang';
    } else if (hour >= 15 && hour < 18) {
        time = 'Sore';
    } else {
        time = 'Malam';
    }

    const waUrl = `https://wa.me/6285757562962?text=Halo%20Admin%20Saya%20ingin%20menanyakan%20jadwal%20pemakaian%20gedung%20Unismuh%20Makassar`;

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <View style={styles.header}>
                    <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                    <Text style={styles.headerTitle}>UNIVERSITAS MUHAMMADIYAH MAKASSAR</Text>
                </View>

                {/* Card Section */}
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.cardContainer}>
                    <View
                        // colors={[Colors.light.tint, Colors.light.tint]}
                        style={styles.card}
                    >
                        <Text style={styles.cardTitle}>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</Text>
                        <Text style={styles.cardSubtitle}>Aplikasi Balai Sidang Universitas Muhammadiyah Makassar</Text>

                        {/* Overlapping Button */}
                        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(waUrl)}>
                            <Ionicons name="logo-whatsapp" size={30} color={Colors.dark.tint} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* separator */}
                <View style={{ height:2, width: 100, marginLeft: 20, backgroundColor: '#000', marginTop: 40 }}></View>

                <Text style={styles.sectionTitle}>
                    Majelis Pendidikan tinggi pimpinan pusat Muhammadiyah, Universitas Muhammadiyah Makassar
                </Text>
                {/* <Text style={styles.sectionTitle2}>
                    Universitas Muhammadiyah Makassar
                </Text> */}

                <Text style={styles.sectionSubtitle}>
                    Jl. Sultan Alauddin No. 259 Makassar 90231
                </Text>

                <Text style={{
                    fontSize: 25,
                    color: '#333',
                    marginTop: 20,
                    textAlign: 'center',

                    fontFamily: 'Montserrat-Bold',
                }}>
                    بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </Text>
                {/* Informasi Surat Keputusan */}
                <Text style={styles.informasiHeader}>
                    Berdasarkan surat keputusan Rektor Universitas Muhammadiyah Makassar yang di keluarkan pada tanggal 19 September 2024 M/16 Rabiul Awwal 1446 H, berikut adalah tarif pemakaian fasilitas gedung Balai Sidang UNISMUH Makassar.
                </Text>

                {/* List Informasi Surat */}
                <View style={styles.listContainer}>
                    <Text style={styles.listItem}>
                        1. Peraturan Menteri Keuangan Republik Indonesia Nomor 32/PMK/2018 tentang standar biaya masukan tahun anggaran 2019.
                    </Text>
                    <Text style={styles.listItem}>
                        2. Panduan Sistem Pengelolaan Keuangan Perguruan Tinggi Muhammadiyah 2018.
                    </Text>
                    <Text style={styles.listItem}>
                        3. Surat Keputusan Rektor Universitas Muhammadiyah Makassar Nomor: 282 Tahun 1442 H / 2021 M tentang Petunjuk Teknis dan Standard Costing Pengelolaan Keuangan Universitas Muhammadiyah Makassar.
                    </Text>
                    <Text style={styles.listItem}>
                        4. Pedoman Pimpinan Pusat Muhammadiyah Nomor 02/PED/I.0/B/2002 tanggal 24 Jumadil Awwal 1433 H / 16 April 2012 M tentang Perguruan Tinggi Muhammadiyah.
                    </Text>
                    <Text style={styles.listItem}>
                        5. Statuta Universitas Muhammadiyah Makassar Tahun 2013.
                    </Text>
                    <Text style={styles.listFooter}>
                        Memperhatikan: Rapat Pimpinan Universitas pada tanggal 07 Maret 2023.
                    </Text>
                </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 0.4,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    banner: {
        flex: 1,
        backgroundColor: 'white',
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        position: 'relative',
        backgroundColor: Colors.light.tint,
    },
    cardTitle: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        color: Colors.dark.tint
    },
    cardSubtitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: Colors.dark.tint,
        marginTop: 20,
        marginBottom: 40,
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: Colors.light.tint,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: Colors.light.tint,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#333',
        marginTop: 5,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
    },
    sectionTitle2: {
        fontSize: 18,
        color: '#333',
        // marginTop: 5,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Regular',
    },
    informasiHeader: {
        fontSize: 16,
        color: '#666',
        marginTop: 20,
        marginBottom: 5,
        paddingHorizontal: 20,
        textAlign: 'justify',
        fontFamily: 'Montserrat-Regular',
    },
    listContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    listItem: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
    },
    listFooter: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Montserrat-Regular',
        marginTop: 20,
        fontStyle: 'italic',
    },
});
