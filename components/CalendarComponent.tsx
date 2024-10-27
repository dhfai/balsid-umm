import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';


interface Event {
    start: string;
    end: string;
    title: string;
    location: string;
}

const events: Event[] = [
    { start: '2024-10-22', end: '2024-10-25', title: 'Acara Fakultas Unismuh Makassar', location: 'Digunakan Oleh: Fakultas Teknik' },
    { start: '2024-10-15', end: '2024-10-15', title: 'Acara Wisuda/Pesantren MABA Unismuh Makassar', location: 'Digunakan Oleh: Unismuh Makassar' },
    { start: '2024-10-10', end: '2024-10-12', title: 'Penyewa dari luar Unismuh Makassar', location: 'Digunakan Oleh: nama penyewa' }
];



const CalendarComponent = ({markedDates}: any) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventPress = (day: string) => {
    const event = events.find(e => e.start <= day && e.end >= day);
    if (event) {
      setSelectedEvent(event);
    }
  };
  return (
    <>
        <Calendar
            markingType={'period'}
            style={{
                padding: 20,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 5,
                marginBottom: 20,
            }}
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
        />
        {!selectedDate && (
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
        )}

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

    </>
  )
}

export default CalendarComponent


const styles = StyleSheet.create({
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
})
