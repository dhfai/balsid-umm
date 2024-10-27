import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconName = "person" | "ban" | "wine" | "warning" | "time" | "flame" | "construct" | "document-text" | "leaf" | "move" | "bulb" | "alert-circle" | "cash" | "calendar" | "checkbox";

const rules: { id: number; text: string; icon: IconName }[] = [
  { id: 1, text: 'Berpakaian rapi dan sopan bagi laki-laki dan untuk perempuan menutup Aurat ( Tidak terbuka ).', icon: 'person' },
  { id: 2, text: 'Dilarang merokok dalam area Gedung dan Kampus.', icon: 'ban' },
  { id: 3, text: 'Dilarang membawa minuman keras dan obat-obatan terlarang didalam area gedung.', icon: 'wine' },
  { id: 4, text: 'Dilarang membawa senjata tajam, senjata api dan sejenisnya.', icon: 'warning' },
  { id: 5, text: 'Waktu gladi dan kegiatan jam 08.00-20.00.', icon: 'time' },
  { id: 6, text: 'Dilarang membawa kompor gas untuk memasak.', icon: 'flame' },
  { id: 7, text: 'Dilarang membawa pulang peralatan milik gedung.', icon: 'construct' },
  { id: 8, text: 'Penyewa wajib mematuhi tata tertib ini dan bertanggung jawab sepenuhnya terhadap penyalahgunaan yang terjadi.', icon: 'document-text' },
  { id: 9, text: 'Menjaga ketertiban dan kebersihan gedung.', icon: 'leaf' },
  { id: 10, text: 'Escalator tidak dijalankan bagi mahasiswa kecuali untuk pimpinan dan pemateri/narasumber yang akan naik/turun ke gedung.', icon: 'move' },
  { id: 11, text: 'Pemakaian listrik akan dikenakan biaya tambahan melebihi pemakaian.', icon: 'bulb' },
  { id: 12, text: 'Barang yang hilang sewaktu acara berlangsung bukan tanggung jawab pengelola gedung.', icon: 'alert-circle' },
  { id: 13, text: 'Penyewa harus membayar DP 50 % dari harga sewa gedung.', icon: 'cash' },
  { id: 14, text: 'Untuk mahasiswa HMJ, UKM, BEM, IMM, KORKOM, dan ORTOM Muhammadiyah wajib melunasi pembayaran 2 hari sebelum acara/kegiatan.', icon: 'calendar' },
  { id: 15, text: 'Tunggakan pembayaran harus dilunasi sebelum melaksanakan kegiatan selanjutnya.', icon: 'checkbox' },
];

export default function RulesList() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={styles.bannerStyle}>
                <Text style={styles.bannerTitle}>
                    Aturan
                </Text>
                <Image source={require('@/assets/images/logo.png')} style={styles.appBarLogo} />
            </View>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
                {rules.map((rule) => (
                    <View key={rule.id} style={styles.card}>
                    <Ionicons name={rule.icon} size={24} color="black" style={styles.icon} />
                    <Text style={styles.text}>{rule.text}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
},
appBarLogo: {
    width: 45,
    height: 45,
    borderRadius: 17.5,
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});
