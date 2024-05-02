import Popup from 'reactjs-popup';
import 'ldrs/ripples';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';

export default function TareaDesc(props){

    const [feedback, setFeedback] = useState('Holiwis');

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{feedback}</Text>
                </View>
            </Page>
        </Document>
      );
      return(
          <>
            <div className="flex justify-between bg-bwhite/[.60] p-5 m-5 rounded-lg text-dpurp">
                <div className="">
                    <h1>{props.tarea.nombre}</h1>
                    <p>{props.tarea.fecha}</p>
                    <p>Proiroidad:{props.tarea.priori}</p>
                    <p>Respuestas: {props.tarea.cantEntre}</p>
                </div>

                <div className={`border-2 border-dpurp ${props.tarea.cantEntre / props.cantAlu > 0.2 ? 'hover:bg-dpurp/30' : ''} flex justify-center p-2 rounded-lg`}>
                    <button disabled={((props.tarea.cantEntre / props.cantAlu) > 0.2) ? false : true } >
                        <p>Obtener Retro</p>
                        <p>{Math.floor(props.tarea.cantEntre / props.cantAlu * 100)}%</p>
                    </button>
                </div>
            </div>
        </>
    )
}