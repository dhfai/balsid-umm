import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Linking, TouchableOpacity, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Appbar, Checkbox, Modal, Portal, Provider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '@/constants/Colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import CalendarComponent from '@/components/CalendarComponent';



SplashScreen.preventAutoHideAsync();

interface Event {
  start: string;
  end: string;
  title: string;
  location: string;
}

interface InstansiOption {
  label: string;
  value: string;
  price: number;
  ppn: string;
  videoTron: number;
}

const events: Event[] = [
  { start: '2024-10-22', end: '2024-10-25', title: 'Acara Fakultas Unismuh Makassar', location: 'Digunakan Oleh: Fakultas Teknik' },
  { start: '2024-10-15', end: '2024-10-15', title: 'Acara Wisuda/Pesantren MABA Unismuh Makassar', location: 'Digunakan Oleh: Unismuh Makassar' },
  { start: '2024-10-10', end: '2024-10-12', title: 'Penyewa dari luar Unismuh Makassar', location: 'Digunakan Oleh: nama penyewa' }
];

const instansiOptions: InstansiOption[] = [
  { label: 'Acara Universitas Muhammadiyah Makassar', value: 'Acara Universitas Muhammadiyah Makassar', price: 15000000, ppn: '11%', videoTron: 0 },
  { label: 'Acara Wisuda/Pesantren MABA Unismuh Makassar', value: 'Acara Wisuda/Pesantren MABA Unismuh Makassar', price: 30000000, ppn: '11%', videoTron: 0 },
  { label: 'Acara PWM dan PWA Sulawesi Selatan', value: 'Acara Pimpinan Wilayah Muhammadiyah (PWM) dan Pimpinan Wilayah Aisyah (PWA) Sulawesi Selatan', price: 15000000, ppn: '11%', videoTron: 0 },
  { label: 'Acara Fakultas Unismuh Makassar', value: 'Acara Fakultas Unismuh Makassar', price: 15000000, ppn: '11%', videoTron: 10000000 },
  { label: 'Acara Lembaga Unismuh Makassar', value: 'Acara Lembaga Unismuh Makassar', price: 15000000, ppn: '11%', videoTron: 10000000 },
  { label: 'Acara HMJ, UKM, BEM, IMM Se Unismuh', value: 'Acara HMJ, UKM, BEM, IMM Se Unismuh', price: 7000000, ppn: '11%', videoTron: 5000000 },
  { label: 'Acara Sekolah, SD, SMP, SMA, PESMADINA Unismuh', value: 'Acara Sekolah, SD, SMP, SMA, PESMADINA Unismuh', price: 15000000, ppn: '11%', videoTron: 10000000 },
  { label: 'Penyewa dari luar Unismuh Makassar', value: 'Penyewa dari luar Unismuh Makassar', price: 30000000, ppn: '11%', videoTron: 0 },
];

const getMarkedDates = (events: Event[]): { [key: string]: any } => {
  const marked: { [key: string]: any } = {};

  events.forEach(event => {
    const { start, end } = event;

    if (start === end) {
      marked[start] = { selected: true, color: 'lightblue', textColor: 'black' };
    } else {
      let currentDate = new Date(start);
      const lastDate = new Date(end);

      while (currentDate <= lastDate) {
        const formattedDate = currentDate.toISOString().split('T')[0];

        if (formattedDate === start) {
          marked[formattedDate] = { startingDay: true, color: 'lightblue', textColor: 'black' };
        } else if (formattedDate === end) {
          marked[formattedDate] = { endingDay: true, color: 'lightblue', textColor: 'gray' };
        } else {
          marked[formattedDate] = { color: 'lightblue' };
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  });

  return marked;
};

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedInstansi, setSelectedInstansi] = useState<string | null>(null);
  const [instansiPrice, setInstansiPrice] = useState<string | null>(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [videoTron, setvideoTron] = useState<string | null>(null);
  //   Fonts
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
  const markedDates = getMarkedDates(events);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleInstansiSelect = (value: string | null) => {
    if (value) {
      const selectedOption = instansiOptions.find(option => option.value === value);
      if (selectedOption) {
        const price = selectedOption.price.toLocaleString('id-ID');
        const video = selectedOption.videoTron.toLocaleString('id-ID');
        setSelectedInstansi(value);
        setInstansiPrice(price);
        setvideoTron(video);
      }
    } else {
      setSelectedInstansi(null);
      setInstansiPrice(null);
    }
  };

  const handleCheckout = () => {
    if (selectedDate && selectedInstansi && instansiPrice) {
        const event = events.find(e => e.start <= selectedDate && e.end >= selectedDate);
        if (event) {
          alert('Tanggal sudah ada event, silahkan pilih tanggal lain.');
          return;
        }


      const message = `Boking Penyewaan Balai Sidang \nInstasi: ${selectedInstansi}\nTanggal: ${selectedDate}\nHarga per hari: ${instansiPrice}`;
      const url = `https://wa.me/6285757562962?text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    } else {
      alert('Pilih Jenis Penerimaan/Tarif Layanan dan Tanggal Terlebih Dahulu.');
    }
  };

  const handleEventPress = (day: string) => {
    const event = events.find(e => e.start <= day && e.end >= day);
    if (event) {
      setSelectedEvent(event);
    }
  };

  const waUrl = `https://wa.me/6285757562962?text=Halo%20Admin%20Saya%20ingin%20menanyakan%20jadwal%20pemakaian%20gedung%20Unismuh%20Makassar`;

  return (
    <SafeAreaView style={styles.safeArea}>
        <Provider>
            <View style={styles.container}>
                <View style={styles.bannerStyle}>
                    <Text style={styles.bannerTitle}>
                        Jadwal Pemakaian Gedung
                    </Text>
                    <Image source={require('@/assets/images/logo.png')} style={styles.appBarLogo} />
                </View>
                <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={styles.wrapper}>
                    {/* <Calendar
                        markingType={'period'}
                        style={styles.calendar}
                        markedDates={markedDates}
                        onDayPress={(day: { dateString: any; }) => {
                        const date = day.dateString;
                        setSelectedDate(date);
                        handleEventPress(date);
                        }}
                        renderArrow={(direction: 'left' | 'right') => (
                        <Ionicons
                            name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
                            size={24}
                            color="black"
                        />
                        )}
                    /> */}
                    <CalendarComponent markedDates={markedDates} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={openModal}
                            style={styles.bookButton}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Cek Tarif</Text>
                                <Ionicons
                                    name="chevron-forward"
                                    size={24}
                                    color="white"
                                    style={styles.icon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(waUrl)}
                            style={styles.bookButtonWa}
                        >
                            <View style={styles.buttonContent}>
                                <Ionicons
                                    name="logo-whatsapp"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>


                        {/* {!selectedDate && (
                            <View>
                                {events.map(event => (
                                    <View key={event.start} style={styles.eventCard}>
                                        <View style={{
                                            backgroundColor: Colors.light.tint,
                                            padding: 15,
                                            borderRadius: 15,
                                            alignItems: 'center',
                                        }}>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    textTransform: 'uppercase',
                                                    fontFamily: 'Montserrat-Bold',
                                                    color: Colors.dark.tint,
                                                }}
                                            >
                                                {event.start.split('-')[1].replace('01', 'Jan').replace('02', 'Feb').replace('03', 'Mar').replace('04', 'Apr').replace('05', 'May').replace('06', 'Jun').replace('07', 'Jul').replace('08', 'Aug').replace('09', 'Sep').replace('10', 'Oct').replace('11', 'Nov').replace('12', 'Dec')}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontFamily: 'Montserrat-Bold',
                                                    color: Colors.dark.tint,
                                                }}
                                            >{event.start.split('-')[2]}</Text>
                                        </View>
                                        <View
                                            style={{
                                                marginLeft: 10,
                                            }}
                                        >
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventLocation}>{event.location}</Text>
                                            <Text style={styles.eventDate}>{`Tanggal: ${event.start} - ${event.end}`}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )} */}


                    {selectedEvent && (
                        <View style={styles.eventCard}>
                            <View style={{
                                backgroundColor: Colors.light.tint,
                                padding: 15,
                                borderRadius: 15,
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        textTransform: 'uppercase',
                                        fontFamily: 'Montserrat-Bold',
                                        color: Colors.dark.tint,
                                    }}
                                >
                                    {selectedDate?.split('-')[1].replace('01', 'Jan').replace('02', 'Feb').replace('03', 'Mar').replace('04', 'Apr').replace('05', 'May').replace('06', 'Jun').replace('07', 'Jul').replace('08', 'Aug').replace('09', 'Sep').replace('10', 'Oct').replace('11', 'Nov').replace('12', 'Dec')}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontFamily: 'Montserrat-Bold',
                                        color: Colors.dark.tint,
                                    }}
                                >{selectedDate?.split('-')[2]}</Text>
                            </View>
                            <View
                                style={{
                                    marginLeft: 10,
                                }}
                            >
                                <Text style={styles.eventTitle}>{selectedEvent.title}</Text>
                                <Text style={styles.eventLocation}>{selectedEvent.location}</Text>
                                <Text style={styles.eventDate}>{`Tanggal: ${selectedEvent.start} - ${selectedEvent.end}`}</Text>
                            </View>
                        </View>
                    )}


                    <Portal>
                        <Modal visible={isModalVisible} onDismiss={closeModal} contentContainerStyle={styles.modalContainer}>
                            <DropDownPicker
                                open={dropDownOpen}
                                value={selectedInstansi}
                                items={instansiOptions.map(option => ({ label: option.label, value: option.value }))}
                                setOpen={setDropDownOpen}
                                setValue={setSelectedInstansi}
                                onChangeValue={handleInstansiSelect}
                                placeholder="Jenis Penerimaan/Tarif Layanan"
                                style={styles.dropdown}
                                listMode='MODAL'
                            />
                            <Calendar
                                markingType={'simple'}
                                onDayPress={(day: { dateString: React.SetStateAction<string | null>; }) => setSelectedDate(day.dateString)}
                                markedDates={{
                                    [selectedDate || '']: { selected: true, color: 'lightblue', textColor: 'black' }
                                }}
                                style={styles.calendar}
                                renderArrow={(direction: 'left' | 'right') => (
                                    <Ionicons
                                        name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
                                        size={24}
                                        color="black"
                                    />
                                )}
                            />
                            {instansiPrice && (
                                <View>
                                    <Text style={styles.priceText}>Harga per hari: Rp {instansiPrice}</Text>
                                    <Text style={styles.priceText}>Video Tron: Rp {videoTron}</Text>
                                </View>
                            )}

                            <TouchableOpacity
                                onPress={handleCheckout}
                                style={styles.bookButton2}
                            >
                                <View style={styles.buttonContent}>
                                    <Text style={styles.buttonText}>Cek Harga Sekarang di</Text>
                                    <Ionicons
                                        name="logo-whatsapp"
                                        size={24}
                                        color="green"
                                        style={styles.icon}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </Portal>
                    </View>
                </ScrollView>
            </View>
            </Provider>
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
  },
  wrapper: {
    padding: 20,
  },
  calendar: {
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: Colors.dark.tint,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    elevation: 2,
  },
  eventTitle: {
    // fontSize: 14,
    paddingRight: 50,
    fontFamily: 'Montserrat-Bold'
},
eventLocation: {
    fontSize: 14,
    paddingRight: 50,
    color: 'gray',
    fontFamily: 'Montserrat-Regular'
},
eventDate: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Montserrat-Regular'
  },
  bookButton: {
    backgroundColor: Colors.light.tint,
    // padding: 15,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButton2: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    // width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark.tint,
    marginRight: 10,
  },
  icon: {
    marginLeft: -5,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bookButtonWa: {
    backgroundColor: 'lightgreen',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
