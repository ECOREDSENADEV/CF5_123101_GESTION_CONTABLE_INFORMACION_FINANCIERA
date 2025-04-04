<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de matemática financiera',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave de las matemáticas financieras, incluyendo interés simple y compuesto, tipos de tasas, tablas de amortización, VPN, TIR y la NIIF 13 en la medición del valor razonable.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representa el interés en una operación financiera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor que se cancela por un producto financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El costo de oportunidad de una inversión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor que se paga por utilizar un capital durante un tiempo determinado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La utilidad generada por un activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la característica principal del interés compuesto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se aplica solo a inversiones a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es capitalizable y se acumula al capital para generar nuevos intereses.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'No genera rendimientos adicionales en periodos posteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es igual en todos los periodos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál fórmula se usa para calcular el valor futuro con interés simple?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'VF = VA (1 + n * i).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'VF = VA * (1 - i)^n.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'VF = VA / (1 + i * n).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'VF = VA * n / i.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué tasa se asemeja al interés simple porque no capitaliza?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa efectiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tasa nominal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tasa vencida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tasa interna de retorno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el significado de tasa efectiva?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es la tasa que se convierte en tasa nominal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es la tasa real reconocida en una transacción financiera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es la tasa que no se capitaliza en el tiempo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es la tasa fijada por la entidad financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué herramienta de Excel permite calcular el valor futuro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'VF(tasa;nper;pago;(va);tipo).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'PAGO(tasa;nper;va;vf;tipo).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'TASA(nper;pago;va;vf;tipo).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nper(tasa;pago;va;vf;tipo).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué representa el Valor Presente Neto (VPN)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La tasa de rendimiento de una inversión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El valor futuro de una inversión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La diferencia entre el valor presente de ingresos y egresos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La ganancia real de una inversión sin descuentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué indica un VPN menor a cero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad positiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proyecto no viable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recuperación de inversión sin ganancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indiferencia entre invertir o no.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función de la Tasa Interna de Retorno (TIR)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el valor presente de los flujos futuros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar la máxima tasa que un inversionista aceptaría pagar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar la amortización del préstamo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar la tasa efectiva de una cuenta de ahorros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué concepto define la NIIF 13 como una medición basada en el mercado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valor histórico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valor razonable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Valor neto realizable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valor residual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La tasa anticipada se calcula al final del periodo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La fórmula para hallar el tiempo en una operación de interés compuesto incluye logaritmos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La NIIF 13 se aplica solo a activos financieros y excluye los pasivos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El método francés en tablas de amortización se caracteriza por tener cuotas variables.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una inversión con una TIR menor que la tasa de descuento no es viable.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
