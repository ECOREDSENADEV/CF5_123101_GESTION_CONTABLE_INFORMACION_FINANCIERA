<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Matemáticas financieras

    .row.mb-5
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")
      .col-lg-11
        p.mb-0 El objetivo del presente componente es el análisis de la fundamentación y aplicación de las matemáticas financieras; para lo cual se fortalecerán las habilidades y competencias en el manejo y aplicación de tasas de interés, tablas de amortización, herramientas de Excel y criterios del valor razonable. Logrando de esta manera adquirir destrezas en el área contable y financiera para su desempeño en el ámbito empresarial. 
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto
    
    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1(data-aos="fade-left")
        p Es el campo de las matemáticas que aplica un ente económico para el análisis, la valoración de los mercados financieros y el valor del dinero en el tiempo, mediante la aplicación de cálculos aritméticos. 
        p Es una herramienta muy importante en el ámbito empresarial, la cual ha tomado fuerza con la implementación de las Normas Internacionales de Información Financiera. Su finalidad es contribuir en la toma de decisiones de forma útil, transparente y confiable sobre los proyectos, inversiones, rentabilidad y amortización de deudas. 

    
        .bg-color-15.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 De acuerdo con la convergencia de Normas Internacionales de Información Financiera, mediante la expedición de la Ley 1314 de 2009, se presentan cambios en la valoración de los instrumentos financieros, donde se tiene en cuenta los criterios de medición de costo amortizado y valor razonable, utilizando el método de interés efectivo.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tasas de interés
    
    p.mb-4 Antes de abordar el tipo de tasas de interés, los invito a analizar los conceptos básicos con el fin de avanzar significativamente en las temáticas que le permitan desarrollar esta unidad.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Interés
              p Es el valor que se cancela por utilizar un capital durante un periodo determinado, teniendo en cuenta las condiciones acordadas entre deudor y acreedor. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Valor Presente (VP)
              p Es el valor actual (VA) de la inversión, denominado también capital inicial. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tiempo (n)
              p Periodo en el cual se lleva a cabo en la operación financiera. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Diagrama flujo de caja
              p Esquema gráfico que representa el capital invertido (el valor final en un tiempo determinado y tasa acordada.) 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Valor Futuro (VF)
              p Es el valor final de la inversión, teniendo en cuenta los intereses generados en un periodo determinado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tasa de interés (i)
              p Interés que genera el capital inicial en un periodo dado.    

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Interés simple
    
    p.mb-5 Es el interés que se genera en un periodo determinado. Se calcula sobre el capital inicial y no es capitalizable; es decir, no se acumula con el capital para originar nuevos intereses.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 1:</b> Carolina invierte hoy $12.000.000 en una cuenta que paga el 9% simple anual, ¿qué cantidad podrá retirar dentro de 3 años?
        .bg-color-16.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Para desarrollar el ejercicio, es importante tener en cuenta los datos suministrados; por ello, no olvide analizar la información y observar que se tiene la necesidad de hallar el valor futuro, mediante el interés simple. Recordemos que este no capitaliza como sucede en el interés compuesto.
        p La fórmula que debe usarse es:
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
        .bg-color-16.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b> Carolina con una inversión inicial de $12.000.000 recibirá $15.240.000, dentro de tres años aplicando interés simple.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 2:</b> Andrés recibirá en 10 meses $35.000.000, correspondientes a una inversión realizada. Si la tasa de interés que le están pagando es del 2,5% mensual, ¿Cuál es el valor inicial de la inversión, aplicando el tipo de interés simple?
        .bg-color-1.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") De acuerdo con el análisis, se observa que se debe determinar el valor presente o actual de la inversión realizada, utilizando el tipo de interés compuesto; por lo tanto, se usará la siguiente fórmula: 
        p La fórmula que debe usarse es:
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/15.svg", data-aos="zoom-in")
        .bg-color-1.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b> Respuesta: Para obtener un monto de $35.000.000 durante 10 meses a la tasa del 2,5% de invertir $28.000.000. 
  
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Interés compuesto
    
    p.mb-5 Interés generado en un periodo de tiempo, con la característica especial de ser capitalizable; es decir, se acumula, con el capital, presentando un interés mayor al final del periodo. 

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 1:</b> Carolina invierte hoy $12.000.000 en una cuenta que paga el 9% compuesto anual, ¿qué cantidad podrá retirar dentro de 3 años?
        .bg-color-8.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El enunciado anterior refleja la necesidad de hallar el valor futuro, teniendo en cuenta que se conoce el valor inicial de la inversión y se desea saber el valor final dentro de 3 años. Recuerde que la tasa de interés se manejará en decimales para efectos de su cálculo.
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/16.svg", data-aos="zoom-in")
        .bg-color-8.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b> Carolina con una inversión inicial de $12.000.000 recibirá $15.540.348, dentro de tres años aplicando interés compuesto.

    p.mb-4 Así mismo se puede obtener el Valor Futuro (VF), utilizando la fórmula financiera de Excel llamada VF, la cual se presenta a continuación:

    div.tarjeta.bg-color-8.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3.mb-lg-0
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Cálculo del valor futuro (VF) en función financiera de Exce
          figure
            img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in", alt=" Ventana de argumentos de función en Excel para calcular el valor futuro (VF) de una inversión, con campos para ingresar tasa de interés, número de periodos (Nper), pago periódico, valor actual (Va) y tipo de vencimiento. Incluye una breve descripción de cada parámetro.")
          
        .col-lg-6.mb-3.mb-lg-0
          p <b>VF(tasa;nper;pago;(va);tipo),</b> teniendo en cuenta que:
          ul.lista-ul--color.mb-5
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tasa:</b> es la tasa de interés del período acordado.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Nper:</b> es el número total de períodos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Pago:</b> es el pago efectuado en cada período.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Va:</b> es el valor actual o suma total del valor de una serie de pagos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tipo:</b> es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
          p Es importante señalar que, para realizar los cálculos en Excel, debe estar registrada información, con el fin de ser tomada de cada una de las celdas y de esta manera refleje la formulación para su respectiva interpretación.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 2:</b> Andrés recibirá en 10 meses $35.000.000, correspondientes a una inversión realizada. Si la tasa de interés que le están pagando es del 2,5% mensual, ¿Cuál es el valor inicial de la inversión, aplicando el tipo de interés compuesto? 
        .bg-color-1.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") De acuerdo con el análisis, se observa que se debe determinar el valor presente o actual de la inversión realizada, utilizando el tipo de interés compuesto; por lo tanto, se usará la siguiente fórmula: 
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/19.svg", data-aos="zoom-in")
        .bg-color-1.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b>  para obtener un monto de $35.000.000 durante 10 meses, a la tasa del 2,5%, debe invertir $27.341.944,06. 
    
    p.mb-4 También se puede obtener el Valor Actual (VA), utilizando la fórmula financiera de Excel llamada VA, la cual se presenta a continuación:

    div.tarjeta.bg-color-1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3.mb-lg-0
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span  Cálculo del valor actual (VA) en función financiera de Excel
          figure
            img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in", alt="Ventana de argumentos de función en Excel para calcular el valor actual (VA) de una inversión, con campos para ingresar tasa, número de periodos (Nper), pago periódico, valor futuro (Vf) y tipo de vencimiento")
          
        .col-lg-6.mb-3.mb-lg-0
          p <b>VA(tasa;nper;pago;(vf);tipo),</b> teniendo en cuenta que:
          ul.lista-ul--color.mb-5
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tasa:</b> es la tasa de interés del período acordado.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Nper:</b>  es el número total de períodos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Pago:</b> es el pago efectuado en cada período.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Vf:</b> Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tipo:</b> es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/23.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 3:</b> María realiza una inversión por valor de $ 750.000, por un periodo de 3 años. Al finalizar el tiempo le entregan $ 868.219. ¿Cuál es la tasa de interés compuesto aplicada? Una vez despejada la fórmula principal, se utilizará la siguiente: 
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
        .bg-color-10.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b>  la tasa aplicada en la inversión es del 5% anual.
    
    div.tarjeta.bg-color-10.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3.mb-lg-0
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span  Cálculo de la tasa de interés en función financiera de Excel
          figure
            img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in", alt="Ventana de argumentos de función en Excel para calcular la tasa de interés por periodo de un préstamo o inversión, con campos para ingresar número de periodos (Nper), pago periódico, valor actual (Va), valor futuro (Vf) y tipo de vencimiento.)")
          
        .col-lg-6.mb-3.mb-lg-0
          p <b>Tasa(nper;pago;va;(vf);tipo),</b> teniendo en cuenta que:
          ul.lista-ul--color.mb-5
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Nper:</b>  es el número total de períodos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Pago:</b> es el pago efectuado en cada período.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Va:</b> es el valor actual o suma total del valor de una serie de pagos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Vf:</b> Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tipo:</b> es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 4:</b> Sofía realiza un préstamo de $2.000.000, Al final del período paga $3.443.143, la tasa cobrada es del 2,5% mensual. Hallar el tiempo del préstamo.  Teniendo en cuenta la fórmula principal, se realiza el proceso para despejarla; por ende, se utilizará la siguiente:
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src="@/assets/curso/tema1/25.svg", data-aos="zoom-in")
        .bg-color-16.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") <b>Respuesta:</b>  El tiempo del préstamo es de 22 meses.

    div.tarjeta.bg-color-16.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3.mb-lg-0
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Cálculo del número de periodos (Nper) en función financiera de Excel
          figure
            img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in", alt="Ventana de argumentos de función en Excel para calcular el número de pagos de una inversión, con campos para ingresar tasa de interés, pago periódico, valor actual (Va), valor futuro (Vf) y tipo de vencimiento.")
          
        .col-lg-6.mb-3.mb-lg-0
          p <b>Nper(nper;pago;va;(vf);tipo),</b> teniendo en cuenta que:
          ul.lista-ul--color.mb-5
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Nper:</b>  es el número total de períodos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Pago:</b> es el pago efectuado en cada período.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Va:</b> es el valor actual o suma total del valor de una serie de pagos.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Vf:</b> Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li.mb-3.d-flex
              i.fas.fa-chevron-right.bg-color-17
              p.mb-0 <b>Tipo:</b> es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Tasa nominal, periódica y efectiva
    
    p.mb-5 Para aplicar adecuadamente las matemáticas financieras en los diferentes hechos económicos que se presentan en una empresa, surge la necesidad de identificar los conceptos y políticas para realizar los cálculos aritméticos. En el desarrollo de este proceso, es importante diferenciar las tasas de interés nominal, efectiva y periódica, las cuales pueden presentarse de forma anticipada o vencida; por lo tanto, a continuación, se relacionan las siguientes definiciones:

    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo=" Tasa nominal")
            p.mb-0 Tasa que se genera en un periodo de tiempo y que no capitaliza; por lo tanto, se dice que se asemeja al interés simple. (Vidaurri, 2017)
          div(titulo="Tasa efectiva")
            p.mb-0 Tasa que efectivamente se reconoce en la transacción financiera. Es capitalizable en el periodo de tiempo, haciendo referencia al interés compuesto. (Vidaurri, 2017).
          div(titulo="Tasa periódica")
            p.mb-0 Hace referencia al periodo de capitalización en el cual se realiza la operación financiera, la cual puede ser: diaria, mensual, bimestral, trimestral, cuatrimestral, semestral, anual, etc. (Vidaurri, 2017).
    
    h3.bg-color-4.tarjeta.p-3.mb-5  Tasa anticipada y vencida

    p.mb-4 Como se había mencionado, las tasas de interés se presentan de forma anticipada o vencida. A continuación se relaciona el significado de cada una:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.order-2.ps-0
                figure
                  img(src='@/assets/curso/tema1/29.svg', alt='')
              .col-lg.order-1.mb-3.mb-lg-0.align-content-center.pe-0
                div.bg-color-1.p-4
                  ul.lista-ul--color.mb-0.mt-2
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 <b>Anticipada (A):</b> se calcula el interés de forma anticipada en el respectivo periodo. (Vidaurri, 2017)
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 <b>Vencida (V):</b> se calcula el interés de forma vencida en el periodo. (Vidaurri, 2017)
        
        p.mb-5 Para aplicar los tipos de tasas de interés es importante conocer los periodos de capitalización, que se reconocen de la siguiente manera:
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/30.png', alt='')
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Frecuencias de capitalización y sus respectivas abreviaturas
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-6.text-center Frecuencia de capitalización 
                    th.bg-color-6.text-center  Abreviatura
                    th.bg-color-6.text-center  Capitalización anual
                tbody
                  tr.bg-color-18
                    td.text-center 1
                    td.text-center A
                    td.text-center Anual
                  tr.bg-color-white
                    td.text-center 12
                    td.text-center M
                    td.text-center Mensual
                  tr.bg-color-18
                    td.text-center 6
                    td.text-center B
                    td.text-center Bimestral
                  tr.bg-color-white
                    td.text-center 4
                    td.text-center T
                    td.text-center Trimestral
                  tr.bg-color-18
                    td.text-center 3
                    td.text-center C
                    td.text-center Cuatrimestral
                  tr.bg-color-white
                    td.text-center 2
                    td.text-center S
                    td.text-center Semestral
                  tr.bg-color-18
                    td.text-center 24
                    td.text-center Q
                    td.text-center Quincenal
                  tr.bg-color-white
                    td.text-center 365
                    td.text-center D
                    td.text-center Diaria
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Equivalencia de tasas

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Hace referencia a la igualdad que debe existir entre el periodo de capitalización y el periodo de tiempo; para ejemplarizar, si la tasa se presenta de forma trimestral, el periodo debe darse de igual manera. Por lo tanto, de acuerdo con la operación se realizará la conversión de tasas con el fin de lograr su equivalencia (Vidaurri, 2017).
    
        .cajon.color-secundario.bg-color-1.p-4.mb-4
          p.mb-0 Para profundizar en la temática, recuerde explorar en la biblioteca del Servicio Nacional de Aprendizaje (SENA), donde encuentra libros de apoyo. A continuación se relaciona el libro Matemáticas Financieras, que fue utilizado para la definición de los conceptos anteriormente expuestos, para su revisión:
        a.anexo.mb-4.mb-lg-0(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3788" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Vidaurri, Hector. (2017). Matemáticas Financieras. Cengage Learning. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Fórmulas
      
    .row
      .col-lg-8.mb-5.mb-lg-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Conversión de Tasa Efectiva a Tasa Efectiva en periodos diferentes") 
            figure.mt-3.mb-3
              img(src="@/assets/curso/tema1/33.svg", data-aos="zoom-in")
            p <b>Ejemplo:</b> convertir el 8% Efectivo Mensual (EF) a Efectivo Semestral (ES).
            h5 i<sub>e</sub> = ((1+0,08) (12/2)) – 1
            h5 i<sub>e</sub> = 58, 69% Efectivo semestral (ES)
          div(numero="2" titulo="Conversión de Tasa Efectiva a Tasa Efectiva en periodos diferentes") 
            figure.mt-3.mb-3
              img(src="@/assets/curso/tema1/33-1.svg", data-aos="zoom-in")
            p <b>Ejemplo:</b> se tiene una tasa del 24% Efectiva Anual (EA), realizar la conversión a nominal mensual equivalente.
            h5 j = ((1+ 0,24 ) (1/12)   -1 ) * 12
            h5 j = 21,71% Nominal Mensual (NM)
          div(numero="3" titulo="Conversión de Tasa Nominal vencida a Efectiva") 
            figure.mt-3.mb-3
              img(src="@/assets/curso/tema1/33-2.svg", data-aos="zoom-in")
            p <b>Ejemplo:</b> Se tiene una tasa del 24% nominal anual mes vencido, hallar la tasa efectiva anual.
            h5 i<sub>e</sub> = (1+ 0,24/12 ) (12/1)  -1 
            h5 i<sub>e</sub> = 26,82% Efectiva Anual (EA) 
          div(numero="4" titulo="Conversión de tasa nominal anticipada a efectiva") 
            figure.mt-3.mb-3
              img(src="@/assets/curso/tema1/33-3.svg", data-aos="zoom-in")
            p <b>Ejemplo:</b> convertir el 23% Nominal anual trimestral anticipada (NATA) a efectiva anual.
            h5 i<sub>e</sub> = (1-( 0,23/4 ) )(- 4/1)  -1 
            h5 i<sub>e</sub> = 26,72% Efectiva Anual (EA) 
          div(numero="5" titulo="Conversión de tasa nominal a otra tasa nominal") 
            p Para convertir una tasa nominal a otra nominal, simplemente se multiplica o divide dependiendo de las condiciones. Una forma de realizar la conversión es, primero, hallar la Nominal anual, y después, dividir en el periodo al cual se quiere llegar.
            p.mb-2 Pasos:
            ol.lista-ol--cuadro.ms-4
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 1
                | Hallar la tasa anual.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                | Luego, hallar el periodo buscado.
            p <b>Ejemplo:</b> se tiene una tasa 12% Nominal Trimestral (NT), se solicita hallar la tasa Nominal Anual (NA).
            h5.ms-3.mb-0 n = 12 * 4
            h5.ms-3 n = 48% Nominal Anual (NA)
            p.mb-0 Se multiplica por cuatro (4), teniendo en cuenta que son los trimestres de un año.
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Tablas de amortización
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/34.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto.mb-2
            i.fas.fa-quote-left
            h4.text-regular Es una matriz que presenta las cuotas periódicas de un préstamo, teniendo en cuenta el capital inicial, los intereses generados y el abono que se realiza, conforme al acuerdo entre deudor y acreedor 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Meza, 2017).

    p.mb-4 Para elaborar la tabla de amortización, es importante analizar los siguientes conceptos:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/35.svg', alt='Texto que describa la imagen')

          h3.text-center Tasa (i)
          p Porcentaje que se aplica al valor de la deuda, teniendo en cuenta la igualdad entre el periodo de capitalización y periodo de tiempo.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/36.svg', alt='Texto que describa la imagen')

          h3.text-center Capital prestado (C<sub>0</sub>)
          p Valor del préstamo, este se tiene en cuenta para determinar la cuota junto con las condiciones pactadas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/37.svg', alt='Texto que describa la imagen')
          h3.text-center Periodicidad (n)
          p Tiempo acordado para cancelar la deuda, se define en número de cuotas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/38.svg', alt='Texto que describa la imagen')
          h3.text-center Cuota periódica constante (a)
          p Corresponde al valor de la cuota fija.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.align-items-start.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p <b>Ejemplo 1:</b>  la siguiente tabla de amortización presenta el método francés, donde se establece la cuota fija en el periodo de pago acordado1
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La empresa Supercueros SAS, realiza un préstamo por valor de $ 12.000.000, a una tasa del 1,7% EM, por un periodo de tiempo de 6 meses.
        .row.justify-content-center
          .col-lg-9
            .titulo-sexto.color-acento-contenido
                h5 Tabla 2.
                span Condiciones de un préstamo con tasa mensual
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-6.text-center Concepto 
                    th.bg-color-6.text-center  Valor
                    th.bg-color-6.text-center  Frecuencia
                tbody
                  tr.bg-color-18
                    td.text-center PRÉSTAMO
                    td.text-center $12.000.000
                    td.text-center - 
                  tr.bg-color-white
                    td.text-center TASA
                    td.text-center 1,70%
                    td.text-center Mensual
                  tr.bg-color-18
                    td.text-center PERIODO
                    td.text-center 6
                    td.text-center -

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/39.png', alt='')
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Tabla de amortización para un préstamo a seis meses
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center No 
                th.bg-color-6.text-center CUOTA
                th.bg-color-6.text-center INTERÉS
                th.bg-color-6.text-center AMORTIZACIÓN
                th.bg-color-6.text-center SALDO
            tbody
              tr.bg-color-white
                td.text-center 0
                td.text-center -
                td.text-center -
                td.text-center -
                td.text-center $ 12.000.000 
              tr.bg-color-18
                td.text-center 1
                td.text-center $ 2.120.671,37
                td.text-center $ 204.000 
                td.text-center $ 1.916.671,37
                td.text-center $ 10.083.329 

              tr.bg-color-white
                td.text-center 2
                td.text-center $ 2.120.671,37
                td.text-center $ 171.417 
                td.text-center $ 1.949.254,78
                td.text-center $ 8.134.074 

              tr.bg-color-18
                td.text-center 3
                td.text-center $ 2.120.671,37
                td.text-center $ 138.279  
                td.text-center $ 1.982.392,12
                td.text-center $ 6.151.682 

              tr.bg-color-white
                td.text-center 4
                td.text-center $ 2.120.671,37
                td.text-center $ 104.579 
                td.text-center $ 2.016.092,78
                td.text-center $ 4.135.589 
 
              tr.bg-color-18
                td.text-center 5
                td.text-center $ 2.120.671,37
                td.text-center $ 70.305 
                td.text-center $ 2.050.366,36
                td.text-center $ 2.085.223 
 
              tr.bg-color-white
                td.text-center 6
                td.text-center $ 2.120.671,37
                td.text-center $ 35.449
                td.text-center $ 2.085.222,59
                td.text-center -
              tr.bg-color-18
                td.text-center 
                td.text-center $ 12.724.028,23
                td.text-center $ 724.028,23
                td.text-center $ 12.000.000,00
                td.text-center 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/40.png", alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Procedimiento
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mb-3 
                  .lista-ol--cuadro__vineta
                    span 1
                  | El valor de la cuota fija se calcula aplicando la siguiente fórmula:
                .row.justify-content-center.mb-3
                  .col-lg-6.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema1/41.svg")
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | El interés se calcula multiplicando el saldo anterior del préstamo por la tasa acordada.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | La amortización se determina restando el valor de la cuota, menos el interés.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | El saldo se obtiene restando el saldo anterior, menos el valor de la amortización.

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/42.png", alt="Ventana de Excel para ingresar argumentos de la función financiera PAGO, que incluye campos para Tasa, Nper, Va, Vt y Tipo, con una descripción sobre el cálculo del pago de un préstamo con tasa de interés constante.")
            .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0
              p Así mismo, se puede obtener el valor de la cuota fija, utilizando la fórmula financiera de Excel llamada PAGO, la cual se presenta a continuación:
              p <b>PAGO(tasa;nper;va;vf,tipo),</b> teniendo en cuenta que:
              ul.lista-ul--color.mb-5
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Tasa:</b> es la tasa acordada al adquirir la obligación.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Nper:</b> es el número de períodos.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Va:</b> Valor actual( valor del préstamo).
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Vf:</b>  Valor futuro.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Tipo:</b> es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    
    .row.align-items-start.mb-3
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        p <b>Ejemplo 2:</b>  Teniendo en cuenta la información del ejercicio anterior, se supone un periodo de gracia de 2 meses.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Condiciones del préstamo con período de gracia
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center Concepto 
                th.bg-color-6.text-center  Valor
                th.bg-color-6.text-center  Frecuencia
            tbody
              tr.bg-color-18
                td.text-center Préstamo
                td.text-center $12.000.000
                td.text-center - 
              tr.bg-color-white
                td.text-center Tasa
                td.text-center 1,70%
                td.text-center Mensual
              tr.bg-color-18
                td.text-center Período
                td.text-center 6
                td.text-center -
              tr.bg-color-white
                td.text-center Período De Gracia
                td.text-center 2
                td.text-center Meses
    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span  Tabla de amortización con período de gracia para un préstamo a seis meses
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center No 
                th.bg-color-6.text-center CUOTA
                th.bg-color-6.text-center INTERÉS
                th.bg-color-6.text-center AMORTIZACIÓN
                th.bg-color-6.text-center SALDO
            tbody
              tr.bg-color-white
                td.text-center 0
                td.text-center -
                td.text-center -
                td.text-center -
                td.text-center $ 12.000.000 
              tr.bg-color-18
                td.text-center 1
                td.text-center $ 0,00
                td.text-center $ 204.000  
                td.text-center.bg-color-20 -$ 204.000,00
                td.text-center $ 12.204.000 


              tr.bg-color-white
                td.text-center 2
                td.text-center $ 0,00
                td.text-center $ 207.468 
                td.text-center.bg-color-20 -$ 207.468,00
                td.text-center $ 12.411.468 
 

              tr.bg-color-18
                td.text-center 3
                td.text-center $ 3.235.850,25
                td.text-center $ 210.995  
                td.text-center $ 3.024.855,29
                td.text-center $ 3.024.855,29

              tr.bg-color-white
                td.text-center 4
                td.text-center $ 3.235.850,25
                td.text-center $ 159.572 
                td.text-center $ 3.076.277,83
                td.text-center $ 6.310.335  
 
              tr.bg-color-18
                td.text-center 5
                td.text-center $ 3.235.850,25
                td.text-center $ 107.276 
                td.text-center $ 3.128.574,55
                td.text-center $ 3.181.760  
 
              tr.bg-color-white
                td.text-center 6
                td.text-center $ 3.235.850,25
                td.text-center $ 54.090 
                td.text-center $ 3.181.760,32
                td.text-center $ 0
              tr.bg-color-18
                td.text-center.text-bold TOTAL
                td.text-center $ 12.943.400,99
                td.text-center $ 943.401 
                td.text-center $ 12.000.000,00
                td.text-center 

   
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.mb-3.mb-lg-0.order-2.ps-0
            figure
              img(src='@/assets/curso/tema1/43.svg', alt='')
          .col-lg.order-1.mb-3.mb-lg-0.pe-0
            div.bg-color-9.p-4.h-100
              p Procedimiento
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mb-3 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Teniendo en cuenta que no hay cuota, se calculan los intereses, incrementando el saldo final.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Se calcula la cuota a partir del tercer mes, utilizando la fórmula de cuota fija, analizada en el ejercicio anterior. Se tiene en cuenta el número de periodos faltantes y el último saldo, con el fin de que coincida con el tiempo del préstamo.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Finalmente, se procede a elaborar la tabla, teniendo en cuenta el procedimiento realizado en la tabla de amortización de cuota fija. 
    
    .row.align-items-start.mb-3
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        p <b>Ejemplo 3:</b>  continuamos con el ejercicio anterior, se presenta un abono a capital.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
            h5 Tabla 6.
            span Condiciones del préstamo con abono extraordinario en el mes 3
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center Concepto 
                th.bg-color-6.text-center  Valor
                th.bg-color-6.text-center  Frecuencia
            tbody
              tr.bg-color-18
                td.text-center.text-bold Préstamo
                td.text-center.text-bold $12.000.000
                td.text-center - 
              tr.bg-color-white
                td.text-center.text-bold Tasa
                td.text-center 1,70%
                td.text-center Mensual
              tr.bg-color-18
                td.text-center.text-bold Período
                td.text-center 6
                td.text-center -
              tr.bg-color-white
                td.text-center.text-bold Abono
                td.text-center 3
                td.text-center Meses
              tr.bg-color-white
                td.text-center.text-bold Valor del abono
                td.text-center $ 2.000.000 
                td.text-center 
    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Tabla de amortización con abono extraordinario en el mes 3
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center No 
                th.bg-color-6.text-center CUOTA
                th.bg-color-6.text-center INTERÉS
                th.bg-color-6.text-center AMORTIZACIÓN
                th.bg-color-6.text-center SALDO
            tbody
              tr.bg-color-white
                td.text-center 0
                td.text-center -
                td.text-center -
                td.text-center -
                td.text-center $ 12.000.000 
              tr.bg-color-18
                td.text-center 1
                td.text-center $ 2.120.671,37
                td.text-center $ 204.000  
                td.text-center $ 1.916.671,37
                td.text-center $ 10.083.329 

              tr.bg-color-white
                td.text-center 2
                td.text-center $ 2.120.671,37
                td.text-center $ 171.417 
                td.text-center $ 1.949.254,78
                td.text-center $ 8.134.074 
 

              tr.bg-color-18
                td.text-center 3
                td.text-center $ 4.120.671,37
                td.text-center $ 138.279   
                td.text-center $ 3.982.392,12
                td.text-center $ 4.151.682 

              tr.bg-color-white
                td.text-center 4
                td.text-center $ 1.431.210,68
                td.text-center $ 70.579  
                td.text-center $ 1.360.632,09
                td.text-center $ 2.791.050   
 
              tr.bg-color-18
                td.text-center 5
                td.text-center $ 1.431.210,68
                td.text-center $ 47.448 
                td.text-center $ 1.383.762,84
                td.text-center $ 1.407.287   
 
              tr.bg-color-white
                td.text-center 6
                td.text-center $ 1.431.210,68
                td.text-center $ 23.924 
                td.text-center $ 1.407.286,80
                td.text-center -
              tr.bg-color-18
                td.text-center.text-bold TOTAL
                td.text-center $ 12.655.646,15
                td.text-center $ 655.646 
                td.text-center $ 12.000.000,00
                td.text-center 

   
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.mb-3.mb-lg-0.order-2.ps-0
            figure
              img(src='@/assets/curso/tema1/44.svg', alt='')
          .col-lg.order-1.mb-3.mb-lg-0.pe-0
            div.bg-color-9.p-4
              p Procedimiento
              ol.lista-ol--cuadro.ms-4.mt-0
                li.d-flex.mb-3 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Se calcula la cuota de igual forma como en el ejemplo 1, mediante cuota fija o pagos iguales.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | De acuerdo con el mes y valor del abono, se suma el valor del abono a la cuota.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Se calcula nuevamente la cuota, teniendo en cuenta los periodos faltantes y el último saldo del préstamo. 
    
    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5. Alternativas de inversión
    
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Valor presente neto (VPN) 
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/45.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bloque-texto-b.color-secundario.p-4.mb-3
              .bloque-texto-b__texto.mb-2
                i.fas.fa-quote-left
                h4.text-regular El valor presente neto es una cifra monetaria que resulta de comparar el valor presente de los ingresos con el valor presente de los ingresos. 
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (Meza, 2017).
            .cajon.color-secundario.bg-color-1.p-4.mb-4
              p.mb-0 El VPN es una alternativa de inversión utilizada frecuentemente para medir el desempeño de la inversión. Para su aplicación se tiene en cuenta la siguiente fórmula:
            .row.justify-content-center.mb-3
              .col-lg-10
                figure
                  img(src="@/assets/curso/tema1/45-1.svg", data-aos="zoom-in")
            .row
              .col-lg-6.mb-3.mb-lg-0
                p.mb-0 P: Inversión inicial
                p.mb-0 FNE: Flujos netos de efectivo
                p TO: Tasa de oportunidad del inversionista.
              .col-lg-6.mb-3.mb-lg-0
                p.mb-0 Interpretación:
                p.mb-0 VPN < cero “0” = No es viable (pérdida)
                p.mb-0 VPN > cero “0”  = Es viable (Ganancia)
                p.mb-0 VPN = cero “0”  = Indiferente 
        
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/46.svg", data-aos="zoom-in")
          .col-lg-7
            .row.align-items-start.mb-3
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p <b>Ejemplo:</b>  Se desea realizar una inversión de $12.000.000, durante 4 años, a una tasa de descuento del 15% anual. Los beneficios (flujos) recibidos por cada año son los siguientes:
            .row.justify-content-center.mb-3
              .col-lg-9
                .titulo-sexto.color-acento-contenido
                    h5 Tabla 8.
                    span Flujos de caja proyectados para evaluar una inversión de $12.000.000
                .tabla-a.color-acento-botones
                  table
                    thead
                      tr
                        th.bg-color-6.text-center Concepto 
                        th.bg-color-6.text-center  Valor
                      tr.bg-color-18
                        td.text-center Inversión
                        td.text-center $ 12.000.000
                      tr.bg-color-white
                        td.text-center Flujo Año 1
                        td.text-center $ 2.500.000
                      tr.bg-color-18
                        td.text-center Flujo Año 2
                        td.text-center $ 3.600.000
                      tr.bg-color-white
                        td.text-center Flujo Año 3
                        td.text-center $ 4.200.000
                      tr.bg-color-18
                        td.text-center Flujo Año 4
                        td.text-center $ 5.000.000

            .cajon.color-acento-contenido.p-4.mb-4
              p.mb-0 <b>NOTA:</b> Determinar la viabilidad del proyecto, aplicando la fórmula de VPN o VNA.
            .row.justify-content-center.mb-3
              .col-lg-10
                figure
                  img(src="@/assets/curso/tema1/46-1.svg", data-aos="zoom-in")
            h5 VPN= -$ 1.483.635,35
        
        p De acuerdo con la información suministrada, se observa que el proyecto no es viable, teniendo en cuenta que se genera una pérdida, sin recuperar el dinero invertido.

        p.mb-4 Así mismo se puede obtener el valor presente neto, utilizando la fórmula financiera de Excel llamada VNA, la cual se presenta a continuación:

        div.tarjeta.bg-color-16.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-3.mb-lg-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 5.
                span Ventana de argumentos de la función VNA en Excel
              figure
                img(src="@/assets/curso/tema1/47.png", data-aos="zoom-in", alt="Ventana de Excel para ingresar argumentos de la función financiera VNA, con campos para Tasa, Valor1 y Valor2. Incluye una descripción sobre el cálculo del valor neto presente de una inversión y botones para aceptar o cancelar.")
              
            .col-lg-6.mb-3.mb-lg-0
              p <b>VNA(tasa;valor1;valor2;…),</b> teniendo en cuenta que:
              ul.lista-ul--color.mb-5
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Tasa:</b> es la tasa de descuento.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Valor1:</b> corresponde a los pagos e ingresos, los cuales se presentan entre 1 y 254.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tasa Interna de Retorno (TIR)
    p.mb-4 La tasa interna de retorno TIR, es un indicador de rentabilidad que se utiliza en su mayoría para evaluar proyectos de inversión. Su cálculo se basa en los flujos de caja esperados del proyecto en determinados tiempos.
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/48.svg", data-aos="zoom-in")
      .col-lg-7
        .bloque-texto-b.color-secundario.p-4.mb-3
          .bloque-texto-b__texto.mb-2
            i.fas.fa-quote-left
            h4.text-regular Podemos definir, entonces, la TIR como aquella que es la máxima tasa de interés a la que un inversionista estaría dispuesto a pedir prestado dinero para financiar la totalidad del proyecto, pagando con los beneficios (flujos de efectivo) la totalidad del capital y de sus intereses, sin perder un solo centavo. 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Meza, 2017).
        p La fórmula aplicable en este caso es:
        .row.justify-content-center.mb-3
          .col-lg-10
            figure
              img(src="@/assets/curso/tema1/49.svg", data-aos="zoom-in")
        p.mb-0 Interpretación:
        p.mb-0 Tasa de descuento > TIR = No es viable (pérdida)
        p.mb-0 Tasa de descuento < TIR = Es viable (Ganancia)
        p.mb-0 Tasa de descuento = TIR = Indiferente 

    .row.align-items-start.mb-3
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        p <b>Ejemplo:</b>  Iván Méndez desea realizar una inversión de $20.000.000, el proyecto le ofrece los siguientes beneficios durante 6 años, de igual forma genera los presentes gastos:

    
    .titulo-sexto.color-acento-contenido
        h5 Tabla 9.
        span Evaluación financiera de proyecto con flujo de caja proyectado y cálculo de VAN y TIR
    .tabla-a.color-acento-botones.mb-3
      table
        thead
          tr
            th.bg-color-6.text-center Concepto 
            th.bg-color-6.text-center 0
            th.bg-color-6.text-center 1
            th.bg-color-6.text-center 2
            th.bg-color-6.text-center 3
            th.bg-color-6.text-center 4
            th.bg-color-6.text-center 5
            th.bg-color-6.text-center 6
            th.bg-color-6.text-center Indicador
            th.bg-color-6.text-center Valor
        tbody
          tr.bg-color-18
            td.text-center.text-bold Inversión
            td.text-center.text-bold $20.000.000
            td.text-center $4.000.000 
            td.text-center $6.000.000 
            td.text-center $7.200.000 
            td.text-center $8.000.000 
            td.text-center $9.200.000 
            td.text-center $13.000.000 
            td.text-center.text-bold VAN  
            td.text-center $2.738.265 

          tr.bg-color-white
            td.text-center.text-bold Costos
            td.text-center 
            td.text-center $800.000 
            td.text-center $1.200.000 
            td.text-center $1.440.000  
            td.text-center $1.600.000  
            td.text-center $1.840.000 
            td.text-center $2.600.000  
            td.text-center.text-bold TIR   
            td.text-center 18 % 
          tr.bg-color-18
            td.text-center.text-bold Flujo neto del proyecto
            td.text-center -$20.000.000 
            td.text-center $3.200.000 
            td.text-center $4.800.000  
            td.text-center $5.760.000   
            td.text-center $6.400.000   
            td.text-center $7.360.000  
            td.text-center $10.400.000   
            td.text-center -   
            td.text-center -
         
          
    .row.mb-5
      .col-lg-4
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-6.text-center  VAN  
                th.bg-color-6.text-center  $2.738.265 

            tbody
              tr.bg-color-18
                td.text-center.text-bold  TIR 
                td.text-center.text-bold 18 %
                
    p.mb-4 Para hallar el Valor Presente Neto (VPN o VNA) y la Tasa Interna de Retorno (TIR) se realizará a través de Microsoft Excel, para ello es importante relacionar la información con el fin de desarrollar las fórmulas básicas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/50.png", alt="Ventana de Excel con la función financiera VNA aplicada, que contiene valores ingresados en los campos Tasa y Valor1.")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 <b>VNA(tasa;valor1;valor2;…),</b> teniendo en cuenta que:
              ul.lista-ul--color.mb-5
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Tasa:</b> es la tasa de descuento.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Valor1:</b> corresponde a los pagos e ingresos, los cuales se presentan entre 1 y 254.
              

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/51.png", alt=" Ventana de Excel para ingresar argumentos de la función financiera TIR, con campos para Valores y Estimar. Incluye una serie de flujos de efectivo y muestra el resultado calculado de la tasa interna de retorno, junto con botones para aceptar o cancelar.")
            .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0
              h5 <b>TIR (valores;estimar),</b> teniendo en cuenta que:
              ul.lista-ul--color.mb-5
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Valores:</b> corresponde a los números que se desea calcular la TIR.

                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 <b>Valor1:</b>  es el número que el usuario estima se aproximará a la TIR.
    
 

    .row
      .col-lg-6.mb-3.mb-lg-0
        div.tarjeta.bg-color-8.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/52.svg", data-aos="zoom-in")
              
            .col-lg-6.mb-3.mb-lg-0
              p Respuesta:
              .titulo-sexto.color-acento-contenido
                h5 Tabla 10.
                span Indicadores de rentabilidad del proyecto
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.bg-color-6.text-center  Indicador  
                      th.bg-color-6.text-center  Valor 

                  tbody
                    tr.bg-color-white
                      td.text-center.text-bold  VAN  
                      td.text-center.text-bold $ 2.738.264,85
                    tr.bg-color-18
                      td.text-center.text-bold  TIR   
                      td.text-center.text-bold 18 %
      .col-lg-6.mb-3.mb-lg-0
        P.mb-5 De acuerdo con lo anterior, se observa que el proyecto es viable, teniendo en cuenta que se recupera la inversión, además de generar una ganancia.  La TIR (184%) es mayor que la tasa de descuento (14%).
        P.mb-5 (P28) Para ampliar esta información, usted deberá ingresar a la biblioteca del Servicio Nacional de Aprendizaje (SENA), donde encuentra libros de apoyo.  A continuación se relaciona el enlace sugerido para fortalecer la temática propuesta:
        a.anexo.mb-4.mb-lg-0(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Santiago de Cali: Editorial Universidad Icesi.  
          
  //
    p Los impuestos han sido una herramienta fundamental en la organización de las sociedades desde la antigüedad. Surgieron como un mecanismo para financiar el mantenimiento del poder, la infraestructura y las necesidades de los gobiernos

    .bg-full-width
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos y elementos de los Impuestos
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-4 Con el fin de generar un aprendizaje significativo y avanzar en tan importante tema, a continuación, se relacionan los conceptos de los tributos en Colombia, que constituyen los ingresos corrientes de la nación. Así mismo, se analizan los elementos de los impuestos:
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/1.svg', alt='Texto que describa la imagen')

              h3.text-center Tasas
              p Contraprestación directa por un servicio prestado, por ejemplo: se pagan los servicios públicos y a cambio se goza del servicio de energía, acueducto, etc.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/2.svg', alt='Texto que describa la imagen')

              h3.text-center Contribuciones
              p Son tributos que paga el contribuyen al Estado por algún beneficio recibido. Por ejemplo, es el caso del impuesto de valorización cuando el Estado realiza inversiones en obras y la zona adquiere un mayor valor.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/3.svg', alt='Texto que describa la imagen')

              h3.text-center Impuestos
              p Son aquellos tributos que no generan contraprestación alguna. Entre ellos, encontramos: impuesto al valor agregado (IVA), impuesto de renta y complementarios. Es una obligación sustancial, que debe darse cumplimiento si contempla todos los requisitos para su liquidación.

        .row.justify-content-center
          .col-lg-10(data-aos="fade-right")
            div.bg-color-1.tarjeta.p-4
              h5 Concepto
              p.mb-0 Los impuestos tienen su origen en los fundamentos vistos en la Constitución Política de Colombia, según el cual todas las naciones están en el deber de contribuir al financiamiento de los gastos e inversiones del Estado dentro de los conceptos de justicia y equidad (artículo 95, numeral 9º de la Constitución Política de Colombia).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Elementos de los impuestos
    
    p.mb-4 Luego de estudiar las diferencias entre los tributos: tasas, contribuciones e impuestos; ahora se profundizará en las generalidades de los impuestos. Conforme a esto, se relacionan los siguientes elementos:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4 Sujeto activo
                p Es la entidad encargada de administrar los impuestos, quien está facultado para exigir el cumplimiento de la obligación. En Colombia los impuestos Nacionales son recaudados por la Dirección de Impuestos y Aduanas Nacionales (DIAN).
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Sujeto Pasivo
                p Es el deudor de la obligación tributaria, pueden ser personas naturales o jurídicas que cumplen con los requisitos exigidos por la norma para declarar determinado impuesto.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Hecho generador del impuesto
                p Son los actos que originan la obligación tributaria. Por ejemplo, la compra o venta de un producto o servicio. 
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Base gravable
                p Es el valor total al cual se le aplica la tarifa del impuesto.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4 Tarifa
                p Es el porcentaje que se aplica a la base gravable para determinar el impuesto a cargo. Pinillos, J. (2014, 9-19.). 
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Estructura y clasificación de los impuestos
    
    p.mb-4 Continuamos con la clasificación y estructura de los impuestos, donde se analizará cada uno de estos, teniendo en cuenta sus características y requisitos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto  Directos e indirectos
    
    p.mb-4 Recordemos que existe la clasificación de impuesto directos e indirectos, que se encuentra relacionado con la capacidad de tributación y de progresividad en la tributación.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-6.p-5 
        h4 Impuestos directos
        p Son pagados por la persona a quien se grava, cuya relación fiscal es directamente con el sujeto activo del impuesto, afectando principalmente los ingresos o pertenencias. 
        h5.mb-3 Algunos ejemplos son:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto al patrimonio.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0Impuesto sobre la renta y complementarios
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto de industria y comercio (ICA).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto predial.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto vehículos.
      .col-md.tarjeta.bg-color-1.p-5 
        h4 Impuestos Indirectos
        p Recae sobre las operaciones gravadas a lo largo del ciclo económico, en forma no acumulada y con la metodología del valor agregado. Son aquellos, cuya responsabilidad jurídica es diferente a la persona que económicamente asume el impuesto. 
        h5.mb-3 Ejemplos de Martínez et al. (2016):
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0 Impuesto a las ventas (IVA).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0Impuesto Gravamen a los movimientos financieros (GMF).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0 Impuesto de registro.
          

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto  Nacionales, departamentales y distritales
    
    p.mb-4 En el contexto tributario colombiano, los impuestos se encuentran clasificados en nacionales, departamental y municipal; por ende, es importante tener en cuenta el sujeto activo que se encuentra delegado para administrar, controlar y recaudar cada uno de los impuestos, además de analizar la normativa que aplica para cada uno de estos.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")
      .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0
        h3.bg-color-4.tarjeta.p-3 Impuestos nacionales
        p(data-aos="fade-left") Son impuestos administrados por la nación, siendo esta su ámbito de aplicación. Son emitidos por el poder ejecutivo y sancionados por el presidente de la república una vez hayan sido aprobados por el congreso.
        h5.mb-5 Entre los impuestos nacionales encontramos, principalmente:
        ol.lista-ol--cuadro.ms-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Impuesto sobre las ventas.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Impuesto de renta.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Gravamen a los movimientos financieros.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Impuesto al patrimonio.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Impuesto al consumo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Impuesto unificado bajo el régimen simple de tributación.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        div.bg-color-8.tarjeta.p-5
          p.mb-0 A continuación, se realizará una breve descripción de cada uno de estos. Recuerde que para profundizar debe tener en cuenta el Estatuto Tributario (ET)- Decreto 0624 de 1989, así como, la normatividad legal vigente.

    h3.bg-color-4.tarjeta.p-3.mb-5 Impuesto sobre las ventas
    div.bg-color-9.tarjeta.p-5(data-aos="fade-right")
      p.mb-0 Es un impuesto nacional de naturaleza indirecta, aplicable a la venta de bienes y prestación de servicios que se encuentran expresamente gravados por las tarifas establecidas en la normatividad legal vigente. Para efectos de dar aplicabilidad a dicho impuesto, se tiene en cuenta la clasificación de operaciones:

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5 Clasificación de bienes y servicios
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/11.svg', alt='Texto que describa la imagen')

              h3.text-center Gravados
              p Son aquellos que originan impuesto, teniendo en cuenta que se les asigna una tarifa establecida por disposición legal. Por lo anterior, es necesario verificar la tarifa general y las tarifas diferenciales para su correcta aplicación. Se localizan en el artículo 468 del Estatuto Tributario (ET).
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/12.svg', alt='Texto que describa la imagen')

              h3.text-center Exentos
              p Son bienes que por normativa se encuentran gravados a la tarifa del 0%. Quienes produzcan bienes exentos, son responsables del impuesto a las ventas, y por tanto deben declarar IVA, pero quienes comercialicen bienes exentos no son responsables del impuesto a las ventas. De este modo, sólo los productores de bienes exentos pueden solicitar como descuento el IVA pagado en sus compras. Se encuentran señalados en los artículos 477 a 481 del Estatuto Tributario (ET).
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')

              h3.text-center Excluidos
              p Son aquellos bienes y servicios que por normatividad legal no se encuentran gravados a alguna tarifa, por ende, no se genera impuesto. Para conocer el listado es necesario remitirse al Estatuto tributario (ET) en los artículos 424-428 y 476 (ET), donde aparece un grupo de bienes identificados con la metodología del arancel de aduanas. El listado incluye la numeración o posición arancelaria (NANDINA) y la descripción de la mercancía, siguiendo los reinos de la naturaleza y sus fases de transformación. Colombia Compra Eficiente (2012).

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Requisitos
      p.mb-0 <b>Según el artículo 437 del ET:</b> Deberán registrarse como responsables del IVA quienes realicen actividades gravadas con el impuesto, con excepción de las personas naturales comerciantes y los artesanos, que sean minoristas o detallistas, los pequeños agricultores y los ganaderos, así como quienes presten servicios, siempre y cuando cumplan la totalidad de las siguientes condiciones:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Que en el año anterior o en el año en curso hubieren obtenido ingresos brutos totales provenientes de la actividad, inferiores a 3.500 UVT.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Que no tengan más de un establecimiento de comercio, oficina, sede, local o negocio donde ejerzan su actividad.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Que, en el establecimiento de comercio, oficina, sede, local o negocio no se desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Que no sean usuarios aduaneros.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Que no hayan celebrado en el año inmediatamente anterior ni en el año en curso contratos de venta de bienes y/o prestación de servicios gravados por valor individual, igual o superior a 3.500 UVT.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año no supere la suma de 3.500 UVT.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Las entidades emisoras de tarjetas crédito y débito, los vendedores de tarjetas prepago, los recaudadores de efectivo a cargo de terceros, y los demás que designe la Dirección de Impuestos y Aduanas Nacionales (DIAN) en el momento del correspondiente pago o abono en cuenta a los prestadores desde el exterior, de los siguientes servicios electrónicos o digitales, cuando el proveedor del servicio se acoja voluntariamente a este sistema alternativo de pago del impuesto.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 8
                  | Los responsables del impuesto sobre las ventas (IVA) cuando adquieran bienes corporales muebles o servicios gravados, de personas que se encuentren registradas como contribuyentes del impuesto unificado bajo el Régimen Simple de Tributación -SIMPLE.

    p.mb-5 En el caso de pasar los límites establecidos en las condiciones registradas anteriormente, el contribuyente debe registrarse como responsable de IVA, de lo contrario será no responsable.

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Periodos de presentación
      p.mb-0 De acuerdo con el Estatuto Tributario (ET) artículo 600, se establece el periodo gravable de forma bimestral y cuatrimestral teniendo en cuenta los siguientes requisitos:    
    

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.bg-color-3.p-5(data-aos="fade-down")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/18.svg', alt='Texto que describa la imagen')
              
            h2.text-center Bimestral
            p La declaración y pago bimestral para aquellos responsables de este impuesto, grandes contribuyentes y aquellas personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean iguales o superiores a noventa y dos mil (92.000) UVT y para los responsables de que tratan los artículos 477 y 481 de este Estatuto. Los períodos bimestrales son: enero-febrero; marzo-abril; mayo-junio; julio-agosto; septiembre-octubre; y noviembre-diciembre.

          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.bg-color-10.p-5(data-aos="fade-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen')
              
            h2.text-center Cuatrimestral
            p Declaración y pago cuatrimestral para aquellos responsables de este impuesto, personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean inferiores a noventa y dos mil (92.000) UVT. Los periodos cuatrimestrales serán enero-abril; mayo-agosto; y septiembre-diciembre.

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Categoría del impuesto a las ventas
      ul.lista-ul--color
        li.mb-0.d-flex
          i.far.fa-folder-open.bg-color-7
          p.mb-0 <b>IVA Generado:</b> es el impuesto cobrado por el vendedor en el momento de realizar una venta de un bien o servicio gravado. 
        li.mb-0.d-flex
          i.far.fa-folder-open.bg-color-7
          p.mb-0Impuesto <b>IVA Descontable:</b> es el impuesto pagado o causado por el comprador en el momento de realizar una compra de un bien o servicio gravado.   
  
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5  Impuesto de renta
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto.mb-2
                i.fas.fa-quote-left
                h4.text-regular El impuesto de renta es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos, hecho generador de la obligación sustancial del impuesto, susceptible de producir un incremento neto en el patrimonio.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 - (Serrano, 2019)
        
        p.mb-5 Es de recordar que este impuesto, relaciona los elementos del impuesto y que es fundamental identificarlos:

        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/21.svg", data-aos="zoom-in")
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
              div(titulo="Sujeto activo")
                p.mb-0 Es el Estado y es administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN).
              div(titulo="Sujeto pasivo")
                p.mb-0 Son los contribuyentes obligados a declarar de acuerdo con los requisitos establecidos en la norma.
              div(titulo="Hecho generador")
                p.mb-0 Es la obtención de ingresos que pueden generar incremento neto del patrimonio.
              div(titulo="Base gravable")
                p.mb-0 Renta líquida gravable.
              div(titulo="Tarifa")
                p.mb-0 Para aplicar la tarifa se tiene en cuenta si es una persona jurídica o personal natural; en este último se tiene en cuenta la normativa legal vigente teniendo en cuenta el sistema cedular.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5  Gravamen a los movimientos financieros
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            p De acuerdo con el Art 871 Estatuto Tributario (ET), es un impuesto que recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia.
            div.bg-color-12.p-4
              p.mb-0 Este impuesto presenta algunas exenciones, que es importante analizar con el fin de dar aplicabilidad correcta; por ende, se encuentran señaladas en al ART. 879 del Estatuto Tributario (ET).
        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema1/23.svg", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
              ul.lista-ul--color
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0 <b>Sujeto activo:</b>  es un impuesto administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN). 
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Hecho generador</b> recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia.  Art 871 Estatuto Tributario (ET).
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Base gravable:</b>  valor total de la transacción financiera.
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Tarifa:</b>  4*1000.

        h3.bg-color-4.tarjeta.p-3 Impuesto al patrimonio

    p.mb-4 <b>ARTÍCULO 292-2, Estatuto Tributario (ET). Impuesto al patrimonio - sujetos pasivos.</b> Por los años 2020 y 2021, créase un impuesto extraordinario denominado el impuesto al patrimonio a cargo de:     

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Las personas naturales, las sucesiones ilíquidas, contribuyentes del impuesto sobre la renta y complementarios.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído directamente en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído indirectamente a través de establecimientos permanentes, en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Las sucesiones ilíquidas de causantes sin residencia en el país al momento de su muerte respecto de su patrimonio poseído en el país.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Las sociedades o entidades extranjeras que no sean declarantes del impuesto sobre la renta en el país, y que posean bienes ubicados en Colombia diferentes a acciones, cuentas por cobrar y/o inversiones de portafolio de conformidad con el artículo 2.17.2.2.1.2 del Decreto 1068 de 2015 y el 18-1 de este estatuto.
    
    h5.mb-5 ARTÍCULO 294-2, Estatuto Tributario (ET). Hecho generador.

    div.bg-color-8.tarjeta.p-5.mb-5
      p.mb-0 El impuesto al patrimonio se genera por la posesión del mismo, cuyo valor sea igual o superior a cinco mil ($5.000) millones de pesos. Para efectos de este gravamen, el concepto de patrimonio es equivalente al patrimonio líquido, calculado tomando el total del patrimonio bruto del contribuyente persona natural poseído en la misma fecha menos las deudas a cargo del contribuyente vigentes en esa fecha.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuesto al consumo

    p.mb-5 El Artículo 512-1 del Estatuto Tributario (ET), señala que el impuesto nacional al consumo tiene como hecho generador la prestación o la venta al consumidor final o la importación por parte del consumidor final, de los siguientes servicios y bienes:

    .row.mb-5.justify-content-center
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 1
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/26.svg")
            .col-lg-7
              p.mb-0 La prestación de los servicios de telefonía móvil, internet y navegación móvil, y servicio de datos según lo dispuesto en el artículo 512-2 de este Estatuto.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 2
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/27.svg")
            .col-lg-7
              p.mb-0 Las ventas de algunos bienes corporales muebles, de producción doméstica o importados, según lo dispuesto en los artículos 512-3, 512-4 y 512-5 de este Estatuto. El impuesto al consumo no se aplicará a las ventas de los bienes mencionados en los artículos 512-3 y 512-4 si son activos fijos para el vendedor, salvo de que se trate de los automotores y demás activos fijos que se vendan a nombre y por cuenta de terceros y para los aerodinos.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 3
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/28.svg")
            .col-lg-7
              p.mb-0 El servicio de expendio de comidas y bebidas preparadas en restaurantes, cafeterías, autoservicios, heladerías, fruterías, pastelerías y panaderías para consumo en el lugar, para ser llevadas por el comprador o entregadas a domicilio, los servicios de alimentación bajo contrato, incluyendo el servicio de catering, y el servicio de expendio de comidas y bebidas alcohólicas para consumo dentro de bares, tabernas y discotecas; (sic) según lo dispuesto en los artículos 426, 512-8, 512-9, 512-10, 512-11, 512- 12 y 512-13 de este estatuto. Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias.

    p.mb-4 Para profundizar en esta temática indague en el Estatuto Tributario (ET) artículos del 512-1 al 512-22.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuesto unificado bajo el régimen simple de tributación

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-2.order-2
            figure
              img(src="@/assets/curso/tema1/29.svg", data-aos="zoom-in")
          .col-lg-10.order-1.mb-3.mb-lg-0
            p Este impuesto fue creado mediante la Ley 1943 de 2018 y ratificado en la Ley 2010 de 2019.
            p <b>El artículo 903 del Estatuto Tributario (ET) expresa</b> “es un modelo de tributación opcional de determinación integral, de declaración anual y anticipo bimestral, que integra el impuesto sobre la renta, el impuesto nacional al consumo y el impuesto de industria y comercio consolidado, a cargo de los contribuyentes que opten voluntariamente por acogerse al mismo”.
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/30.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            h5.mb-5 ARTÍCULO 904- Estatuto Tributario (ET). Hecho generador y base gravable del impuesto unificado bajo el régimen simple de tributación (simple). 
            p El hecho generador del impuesto unificado bajo el régimen simple de tributación (SIMPLE) es la obtención de ingresos susceptibles de producir un incremento en el patrimonio, y su base gravable está integrada por la totalidad de los ingresos brutos, ordinarios y extraordinarios, percibidos en el respectivo periodo gravable.
            p Para el caso del impuesto de industria y comercio consolidado, el cual se integra al impuesto unificado bajo el régimen simple de tributación (SIMPLE), se mantienen la autonomía de los entes territoriales para la definición de los elementos del hecho generador, base gravable, tarifa y sujetos pasivos, de conformidad con las leyes vigentes.
            div.bg-color-8.tarjeta.p-5.mb-5
              p.mb-0 <b>PARÁGRAFO.</b> Los ingresos constitutivos de ganancia ocasional no integran la base gravable del impuesto unificado bajo el régimen simple de tributación (SIMPLE). Tampoco integran la base gravable los ingresos no constitutivos de renta ni ganancia ocasional. Recuerde explorar el Estatuto Tributario (ET) en el Libro octavo, Art. 903 al 916, para ampliar sus conocimientos.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuestos departamentales

    p.mb-4 Son impuestos creados en la jurisdicción departamental, mediante ordenanzas para financiar el presupuesto del departamento; por lo tanto, tiene su propia normativa. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/31.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 1. Impuesto a la venta y consumo de licores
              p Este impuesto lo constituye el consumo en el territorio nacional de cervezas, sifones, refajos y mezclas de bebidas fermentadas con bebidas no alcohólicas.
              p No generan este impuesto las exportaciones y el tránsito por el territorio del Distrito Capital, de cervezas, sifones, refajos, y mezclas de bebidas fermentadas con bebidas no alcohólicas.
              p Son responsables del impuesto los productores, los importadores, y solidariamente con ellos, los distribuidores. Además, son responsables directos del impuesto los transportadores y los expendedores al detal, cuando no puedan justificar debidamente la procedencia de los productos que transportan o expenden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 2. Impuesto a las cervezas, cigarrillos y tabacos
              p El impuesto es aplicable al consumo de cigarrillos y tabaco elaborado, de procedencia extranjera, en la jurisdicción del Distrito Capital. Se encuentra excluido del impuesto al consumo de tabaco el chicote de tabaco de producción artesanal.
              p Son responsables del impuesto los importadores y, solidariamente con ellos, los distribuidores. Además, son responsables directos los transportadores y expendedores al detal, cuando no pueden justificar debidamente la procedencia de los productos que transportan o expenden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 3. Loterías foráneas
              p Este impuesto se aplica a los premios de las loterías y se conoce como el impuesto a ganadores, aunado a ello, recae sobre las empresas de lotería y operadores autorizadas. 
              p La venta de lotería foráneas en jurisdicción del Distrito Capital genera a su favor y, a cargo de las empresas de lotería u operadores autorizados, un impuesto del diez por ciento (10%) sobre el valor nominal de cada billete o fracción. 
              p Los ganadores de premios de lotería pagarán al Distrito Capital, según el caso, un impuesto del diecisiete por ciento (17%) sobre el valor nominal del premio, valor que será retenido por la lotería responsable u operador autorizado al momento de pagar el premio (Secretaría Distrital de Hacienda, 2020, 28 de octubre).

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuestos Municipales
    p.mb-4 Estos impuestos son recaudados por el municipio. Son instituidos por el concejo distrital o municipal, mediante acuerdos. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="Impuesto de Industria y Comercio")
        p El impuesto de Industria y Comercio se genera por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimiento de comercio o sin ellos.
        p <b>Sujeto activo:</b>  es un impuesto administrado por el municipio o distrito.

        p <b>Sujeto pasivo:</b> personas naturales y jurídicas, que cumplan los requisitos establecidos para generar el impuesto.

        p <b>Hecho generador:</b> el hecho generador del impuesto de industria y comercio está constituido por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en la jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimientos de comercio o sin ellos.   Artículo 32 Decreto 352 de 2002.

        p <b>Base gravable:</b> ingresos netos del contribuyente.

        p <b>Tarifa:</b> depende de la actividad económica que ejerza la persona natural o jurídica.

      div(titulo="Impuesto predial unificado")
        p.mb-0 Es un impuesto de naturaleza directa que grava los bienes inmuebles y debe ser cancelado de forma anual teniendo en cuenta la actualización del avalúo catastral realizado por la Unidad Administrativa Especial de Catastro Distrital (UAECD), a dicho valor se aplica la tarifa vigente correspondiente al predio, estos pueden ser casas, lotes, apartamentos, etc.
      div(titulo="Impuesto de vehículos")
        p.mb-0 El impuesto de vehículos recae sobre la posesión de automotores, su naturaleza es directa, teniendo en cuenta que grava directamente al que tiene la propiedad. Se cancela de forma anual, teniendo en cuenta el avalúo que se establece de acuerdo con el modelo, capacidad, marca, línea por resolución del Ministerio de Transporte para cada año (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
      div(titulo="Impuesto unificado de fondo de pobres, azar y espectáculos públicos")
        p Es un tributo de carácter distrital, mediante el cual se unificaron en un solo impuesto los tributos de azar y espectáculos y el de fondo de pobres.
        h5.mb-4 El hecho generador de este impuesto está constituido por la realización de uno de los siguientes eventos:
        h4 Espectáculos públicos
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Apuestas sobre toda clase de juegos permitidos.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0Impuesto Rifas promocionales.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Concursos y similares.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Ventas por el sistema de clubes.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 La venta de entradas a: teatros, conciertos, cines, plaza de toros, hipódromos, circos y demás espectáculos públicos.
      div(titulo="Impuesto de delineación urbana")
        p.mb-0 Es un impuesto distrital que recae sobre la ejecución de obras o construcciones con licencia de construcción o reconocimiento. Es aplicable a construcciones nuevas y/o remodelaciones.
      div(titulo="Sobretasa a la gasolina motor y al ACPM ")
        p-3 Es un tributo que se declara y paga por el consumo de gasolina motor extra o corriente nacional o importada y/o ACPM nacional o importado, en el Distrito Capital de Bogotá. No genera sobretasa las exportaciones de gasolina motor extra y corriente o de ACPM.
        p.mb-0 La sobretasa se causa en el momento en que el distribuidor mayorista, productor o importador enajena la gasolina motor extra o corriente o ACPM, al distribuidor minorista o al consumidor final (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
      



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
