(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0125":function(e,a,t){e.exports=t.p+"img/imagen4.00390486.png"},"01f0":function(e,a,t){e.exports=t.p+"media/end-game-fail.8344f3d3.mp3"},1529:function(e,a,t){"use strict";t("d8a8")},"15d8":function(e,a,t){},4298:function(e,a,t){"use strict";t.r(a);var A=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},s=[],r=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col"},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray px-4 pb-4 pt-4 px-md-5"},[e.respuestas.length!==e.preguntas.length?a("div",{staticClass:"d-flex justify-content-end mb-2"},[a("div",{staticClass:"form-check form-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.audioEnabled,expression:"audioEnabled"}],staticClass:"form-check-input",attrs:{id:"switchCheckAudio",type:"checkbox"},domProps:{checked:Array.isArray(e.audioEnabled)?e._i(e.audioEnabled,null)>-1:e.audioEnabled},on:{change:function(a){var t=e.audioEnabled,A=a.target,s=!!A.checked;if(Array.isArray(t)){var r=null,o=e._i(t,r);A.checked?o<0&&(e.audioEnabled=t.concat([r])):o>-1&&(e.audioEnabled=t.slice(0,o).concat(t.slice(o+1)))}else e.audioEnabled=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"switchCheckAudio"}},[e._v("¿Audio?")])])]):e._e(),e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas,"mensaje-aprobado":e.cuestionario.mensaje_final_aprobado,"mensaje-reprobado":e.cuestionario.mensaje_final_reprobado,"titulo-aprobado":e.cuestionario.titulo_aprobado,"titulo-reprobado":e.cuestionario.titulo_reprobado,"porcentaje-aprobadas":e.porcentajeAprobadas,"preguntas-count":e.preguntas.length,"total-preguntas-base":e.cuestionario.preguntas.length},on:{reiniciar:e.onReiniciar}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected,"numero-pregunta":e.preguntaSelectedIdx+1},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},o=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-auto"},[a("img",{attrs:{src:t("8da0"),alt:""}})])}],i=(t("14d9"),t("0643"),t("2382"),t("a573"),t("d7b0")),n=t.n(i),c=t("884b"),q=t.n(c),u=t("8cc8"),d=t.n(u),l=t("fe00"),p=t.n(l),m=t("01f0"),b=t.n(m),g=function(){var e=this,a=e._self._c;return a("div",[a("h3",{staticClass:"mb-4 pb-4"},[a("strong",[e._v(e._s(e.numeroPregunta)+". "),a("span",{domProps:{innerHTML:e._s(e.pregunta.texto)}})])]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,A){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":A!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-1"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-1"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)},C=[],f={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0},numeroPregunta:{type:Number,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(a=>({...a,correcta:e===a.id&&a.esCorrecta,incorrecta:e===a.id&&!a.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},v=f,h=(t("a6ca"),t("2877")),x=Object(h["a"])(v,g,C,!1,null,"23f9e8e2",null),j=x.exports,_=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[a("span",{staticClass:"lh-1"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")])]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("div",{staticClass:"py-4"}):9===e.respuestasLength?a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Verificar")]),a("i",{staticClass:"fas fa-arrow-right"})]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},E=[],y=(t("4e3e"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}}),S=y,I=(t("83e1"),Object(h["a"])(S,_,E,!1,null,"500024ea",null)),w=I.exports,R=function(){var e=this,a=e._self._c;return a("div",{staticClass:"row align-items-center justify-content-around"},[a("div",{staticClass:"col-lg-5"},[(e.aprobado,a("img",{staticClass:"mx-auto d-none d-lg-block",attrs:{src:t("a46c"),alt:""}}))]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("div",{staticClass:"circle-container mb-4"},[a("svg",{staticClass:"circle",attrs:{viewBox:"0 0 36 36"}},[a("defs",[a("linearGradient",{attrs:{id:"progressGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[a("stop",{attrs:{offset:"0%","stop-color":"#00FF00"}}),a("stop",{attrs:{offset:"50%","stop-color":"#FFFF00"}}),a("stop",{attrs:{offset:"100%","stop-color":"#FF0000"}})],1)],1),a("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}}),a("path",{staticClass:"circle-progress",attrs:{"stroke-dasharray":e.currentPercentage+", 100",d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}})]),a("div",{staticClass:"percentage-text"},[e._v(" "+e._s(Math.round(e.porcentajeAprobadas))+"% ")])]),e.aprobado?[a("h3",[e._v(e._s(e.tituloAprobado))]),a("p",{staticClass:"mb-0 text-center"},[e._v(" "+e._s(e.mensajeAprobado)+" ")])]:[a("h3",[e._v(e._s(e.tituloReprobado))]),a("p",{staticClass:"mb-0 text-center"},[e._v(" "+e._s(e.mensajeReprobado)+" ")])],a("hr",{staticClass:"w-100"}),a("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))]),e.totalPreguntasBase>=e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5 mt-3",on:{click:function(a){return e.$emit("reiniciar")}}},[a("span",[e._v("Volver a intentarlo")])]):e._e()],2)])])},L=[],B={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0},mensajeAprobado:{type:String,default:"¡Excelente! Ha superado la actividad."},mensajeReprobado:{type:String,default:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."},tituloAprobado:{type:String,default:"¡BUEN TRABAJO!"},tituloReprobado:{type:String,default:"VUELVE A INTENTARLO"},porcentajeAprobadas:{type:Number,required:!0},totalPreguntasBase:{type:Number,required:!0},preguntasCount:{type:Number,required:!0}},data(){return{currentPercentage:0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}},mounted(){this.animateProgress()},methods:{animateProgress(){const e=1500,a=performance.now(),t=A=>{const s=(A-a)/e;s>1?this.currentPercentage=this.porcentajeAprobadas:(this.currentPercentage=s*this.porcentajeAprobadas,requestAnimationFrame(t))};requestAnimationFrame(t)}}},M=B,F=(t("1529"),Object(h["a"])(M,R,L,!1,null,"a124ac0c",null)),V=F.exports,P={name:"Actividad",components:{ActividadPregunta:j,ActividadBarraAvance:w,ActividadResultados:V},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0,audioEnabled:!0,totalPreguntasOriginales:0}),computed:{preguntas(){const e=10,{preguntas:a}=this.cuestionario;if(!a)return[];const t=this.shuffle(a),A=t.length>=e?t.slice(0,e):t;return console.log("preguntasSeleccionadas",A,"preguntasBarajadas",t),A.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]},porcentajeAprobadas(){if(0===this.respuestas.length)return 0;const e=this.respuestas.filter(e=>e.esCorrecta).length;return Math.round(e/this.respuestas.length*100)}},methods:{shuffle(e){for(let a=e.length-1;a>0;a--){const t=Math.floor(Math.random()*(a+1));[e[a],e[t]]=[e[t],e[a]]}return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e},e?this.reproducirSonido(q.a):this.reproducirSonido(d.a)},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1?(this.preguntaSelectedIdx+=1,this.reproducirSonido(n.a)):this.finalizarPrueba()},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1,this.$emit("reiniciar")},reproducirSonido(e){if(this.audioEnabled){const a=new Audio(e);a.play()}},finalizarPrueba(){const e=this.preguntas.length,a=this.respuestas.filter(e=>e.esCorrecta).length,t=a/e*100;t>=70?this.reproducirSonido(p.a):this.reproducirSonido(b.a)}}},k=P,D=(t("8d22"),Object(h["a"])(k,r,o,!1,null,"179d8075",null)),N=D.exports,H={name:"ActividadDidactica",components:{Actividad:N},data:()=>({cuestionario:{tema:"Fundamentos de matemática financiera",titulo:"Cuestionario",introduccion:"<b> Objetivo:</b> Identificar los conceptos clave de las matemáticas financieras, incluyendo interés simple y compuesto, tipos de tasas, tablas de amortización, VPN, TIR y la NIIF 13 en la medición del valor razonable.",barajarPreguntas:!0,titulo_aprobado:"¡BUEN TRABAJO!..",titulo_reprobado:"VUELVA A INTENTARLO..",preguntas:[{id:1,texto:"¿Qué representa el interés en una operación financiera?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"El valor que se cancela por un producto financiero.",esCorrecta:!1},{id:"b",texto:"El costo de oportunidad de una inversión.",esCorrecta:!1},{id:"c",texto:"El valor que se paga por utilizar un capital durante un tiempo determinado.",esCorrecta:!0},{id:"d",texto:"La utilidad generada por un activo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál es la característica principal del interés compuesto?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Se aplica solo a inversiones a corto plazo.",esCorrecta:!1},{id:"b",texto:"Es capitalizable y se acumula al capital para generar nuevos intereses.",esCorrecta:!0},{id:"c",texto:"No genera rendimientos adicionales en periodos posteriores.",esCorrecta:!1},{id:"d",texto:"Es igual en todos los periodos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Cuál fórmula se usa para calcular el valor futuro con interés simple?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"VF = VA (1 + n * i).",esCorrecta:!0},{id:"b",texto:"VF = VA * (1 - i)^n.",esCorrecta:!1},{id:"c",texto:"VF = VA / (1 + i * n).",esCorrecta:!1},{id:"d",texto:"VF = VA * n / i.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué tasa se asemeja al interés simple porque no capitaliza?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Tasa efectiva.",esCorrecta:!1},{id:"b",texto:"Tasa nominal.",esCorrecta:!0},{id:"c",texto:"Tasa vencida.",esCorrecta:!1},{id:"d",texto:"Tasa interna de retorno.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Cuál es el significado de tasa efectiva?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Es la tasa que se convierte en tasa nominal.",esCorrecta:!1},{id:"b",texto:"Es la tasa real reconocida en una transacción financiera.",esCorrecta:!0},{id:"c",texto:"Es la tasa que no se capitaliza en el tiempo.",esCorrecta:!1},{id:"d",texto:"Es la tasa fijada por la entidad financiera.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué herramienta de Excel permite calcular el valor futuro?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"VF(tasa;nper;pago;(va);tipo).",esCorrecta:!0},{id:"b",texto:"PAGO(tasa;nper;va;vf;tipo).",esCorrecta:!1},{id:"c",texto:"TASA(nper;pago;va;vf;tipo).",esCorrecta:!1},{id:"d",texto:"Nper(tasa;pago;va;vf;tipo).",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué representa el Valor Presente Neto (VPN)?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"La tasa de rendimiento de una inversión.",esCorrecta:!1},{id:"b",texto:"El valor futuro de una inversión.",esCorrecta:!1},{id:"c",texto:"La diferencia entre el valor presente de ingresos y egresos.",esCorrecta:!0},{id:"d",texto:"La ganancia real de una inversión sin descuentos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué indica un VPN menor a cero?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Rentabilidad positiva.",esCorrecta:!1},{id:"b",texto:"Proyecto no viable.",esCorrecta:!0},{id:"c",texto:"Recuperación de inversión sin ganancia.",esCorrecta:!1},{id:"d",texto:"Indiferencia entre invertir o no.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál es la función de la Tasa Interna de Retorno (TIR)?",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Medir el valor presente de los flujos futuros.",esCorrecta:!1},{id:"b",texto:"Identificar la máxima tasa que un inversionista aceptaría pagar.",esCorrecta:!0},{id:"c",texto:"Determinar la amortización del préstamo.",esCorrecta:!1},{id:"d",texto:"Evaluar la tasa efectiva de una cuenta de ahorros.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué concepto define la NIIF 13 como una medición basada en el mercado?",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Valor histórico.",esCorrecta:!1},{id:"b",texto:"Valor razonable.",esCorrecta:!0},{id:"c",texto:"Valor neto realizable.",esCorrecta:!1},{id:"d",texto:"Valor residual.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:11,texto:"La tasa anticipada se calcula al final del periodo.",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:12,texto:"La fórmula para hallar el tiempo en una operación de interés compuesto incluye logaritmos.",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:13,texto:"La NIIF 13 se aplica solo a activos financieros y excluye los pasivos.",imagen:t("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:14,texto:"El método francés en tablas de amortización se caracteriza por tener cuotas variables.",imagen:t("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:15,texto:"Una inversión con una TIR menor que la tasa de descuento no es viable.",imagen:t("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}})},Q=H,T=Object(h["a"])(Q,A,s,!1,null,null,null);a["default"]=T.exports},"564c":function(e,a,t){},"6a9b":function(e,a,t){e.exports=t.p+"img/imagen2.f77e513a.png"},"83e1":function(e,a,t){"use strict";t("15d8")},"884b":function(e,a,t){e.exports=t.p+"media/success.7ee5a5c2.mp3"},"8cc8":function(e,a,t){e.exports=t.p+"media/fail.a3e9634d.mp3"},"8d22":function(e,a,t){"use strict";t("564c")},"8da0":function(e,a,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,a,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},a6ca:function(e,a,t){"use strict";t("e7ae")},b3a4:function(e,a,t){e.exports=t.p+"img/imagen1.6fc4daf1.png"},b70f:function(e,a,t){e.exports=t.p+"img/imagen3.a42ba05c.png"},d7b0:function(e,a){e.exports="data:audio/mpeg;base64,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"},d8a8:function(e,a,t){},e7ae:function(e,a,t){},fe00:function(e,a,t){e.exports=t.p+"media/end-game-success.3b2668a8.mp3"}}]);
//# sourceMappingURL=actividad.6918fef9.js.map