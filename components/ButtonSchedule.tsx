import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ButtonSchedule = () => {
    const openModal: boolean = true;
    const waUrl = `https://wa.me/6285757562962?text=Halo%20Admin%20Saya%20ingin%20menanyakan%20jadwal%20pemakaian%20gedung%20Unismuh%20Makassar`;

  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
    }}>
        <TouchableOpacity
            onPress={openModal}
            style={{
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
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: Colors.dark.tint,
                    marginRight: 10,
                }}>
                    Cek Tarif
                </Text>
                <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    style={{
                        marginLeft: -5,
                        marginTop: 5,
                    }}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => Linking.openURL(waUrl)}
            style={{
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
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Ionicons
                    name="logo-whatsapp"
                    size={24}
                    color="black"
                />
            </View>
        </TouchableOpacity>
    </View>

  )
}

export default ButtonSchedule
