import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, Image } from 'react-native';


const PriceListScreen = () => {


    const priceList = [
        {
          id: '1',
          description: 'Acara Universitas Muhammadiyah Makassar',
          satuan: 'Per Hari',
          videoTron: '15,000,000',
          nonVideoTron: '-',
          ppn: '11%',
        },
        {
          id: '2',
          description: 'Acara Wisuda/Pesantren MABA Unismuh Makassar',
          satuan: 'Per Hari',
          videoTron: '30,000,000',
          nonVideoTron: '-',
          ppn: '11%',
        },
        {
          id: '3',
          description: 'Acara Pimpinan Wilayah Muhammadiyah (PWM) dan Pimpinan Wilayah Aisyah (PWA) Sulawesi Selatan',
          satuan: 'Per Hari',
          videoTron: '30,000,000',
          nonVideoTron: '-',
          ppn: '11%',
        },
        {
          id: '4',
          description: 'Acara Fakultas Unismuh Makassar',
          satuan: 'Per Hari',
          videoTron: '15,000,000',
          nonVideoTron: '10,000,000',
          ppn: '11%',
        },
        {
          id: '5',
          description: 'Acara Lembaga Unismuh Makassar',
          satuan: 'Per Hari',
          videoTron: '15,000,000',
          nonVideoTron: '10,000,000',
          ppn: '11%',
        },
        {
          id: '6',
          description: 'Acara HMJ, UKM, BEM, IMM Se Unismuh',
          satuan: 'Per Hari',
          videoTron: '7,000,000',
          nonVideoTron: '5,000,000',
          ppn: '11%',
        },
        {
          id: '7',
          description: 'Acara Sekolah, SD, SMP, SMA, PESMADINA Unismuh',
          satuan: 'Per Hari',
          videoTron: '15,000,000',
          nonVideoTron: '10,000,000',
          ppn: '11%',
        },
        {
          id: '8',
          description: 'Penyewa dari luar Unismuh Makassar',
          satuan: 'Per Hari',
          videoTron: '35,000,000',
          nonVideoTron: '-',
          ppn: '11%',
        },
        {
          id: '9',
          description: 'Manasik Haji / Umroh',
          satuan: 'Per Hari',
          videoTron: '55,000,000',
          nonVideoTron: '-',
          ppn: '11%',
        },
      ];

      return (
        <SafeAreaView style={styles.safeArea}>
          <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={styles.header}>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>UNIVERSITAS MUHAMMADIYAH MAKASSAR</Text>
            </View>

            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
            <Text style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 10,
                textTransform: 'uppercase',
            }}>
                Tarif Pemakaian Fasilitas Gedung Balai Sidang UNISMUH Makassar.
            </Text>
              {priceList.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.title}>{item.description}</Text>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Satuan:</Text>
                    <Text style={styles.value}>{item.satuan}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Video Tron:</Text>
                    <Text style={styles.value}>{item.videoTron === '-' ? 'N/A' : `Rp ${item.videoTron}`}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Non Video Tron:</Text>
                    <Text style={styles.value}>{item.nonVideoTron === '-' ? 'N/A' : `Rp ${item.nonVideoTron}`}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>PPN:</Text>
                    <Text style={styles.value}>{item.ppn}</Text>
                  </View>

                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Lihat Detail</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,

    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
      appBarLogo: {
        width: 45,
        height: 45,
        borderRadius: 17.5,
      },
      container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
      },
      card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      },

      bannerStyle: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderBottomWidth: 0.4,
      },
      bannerTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textTransform: 'uppercase',
      },

      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      label: {
        fontSize: 14,
        color: '#666',
      },
      value: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
      },
      checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      checkboxLabel: {
        fontSize: 14,
        marginLeft: 5,
      },
      button: {
        backgroundColor: Colors.light.tint,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
    });

    export default PriceListScreen;
