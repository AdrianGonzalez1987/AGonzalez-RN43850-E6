import { StyleSheet, Text, View, Modal, Button} from 'react-native'
import * as React from 'react'
import { BlurView } from 'expo-blur'

export default function Msn({
    isModalOpen,
    setIsModalOpen,
    children,
    
}) 
{
     ////visible = {keywordError}
  return (
    <>

        <Modal
           
            visible = {isModalOpen}
            transparent = {true}
        > 
       

       
            <View  style={styles.containerMsn}> 
             <BlurView intensity={200} style={styles.containerMsnPri}>
                <View style={styles.modalMsn}> 
                   {children}
                        <Text style={styles.modText}>
                            ESCRIBA LETRAS O NUMEROS
                        </Text>
 
                        <Button 
                            style={styles.modBot}
                            title= 'OK' 
                            onPress={() => setIsModalOpen(!setIsModalOpen)}
                        />
                </View>
             </BlurView>
                
            
            </View>
          
        </Modal>

      
       
    
        
    </>
  )

}

const styles = StyleSheet.create({
    containerMsnPri:{
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        backgroundColor:'#F4EBBB',
    },
    containerMsn:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        opacity:10
    },
    modalMsn:{
        backgroundColor:'#F4EBBB',
        shadowColor: '#9CCBCD',
        width: 200,
        height: 90,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity:0.1,
        borderRadius : 8,
        shadowRadius: 8,
        elevation: 10,
        
    },
    modText: {
        textAlign: 'center',
        padding: 6
    },
    modBot: {
        margin:9,
        width:20,
        height:20
    }
})

