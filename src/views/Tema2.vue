<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Norma Internacional de Información Financiera (NIIF)
    
    .bg-full-width.bg-color-21.mb-5
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto OBJETIVO
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1(data-aos="fade-left")
            ol.lista-ol--cuadro.ms-4
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 1
                | Esta NIIF: (a) define valor razonable; (b) establece en una sola NIIF un marco para la medición del valor razonable; y (c) requiere información a revelar sobre las mediciones del valor razonable.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 2
                | El valor razonable es una medición basada en el mercado, no una medición específica de la entidad. Para algunos activos y pasivos, pueden estar disponibles transacciones de mercado observables o información de mercado. Para otros activos y pasivos, pueden no estar disponibles transacciones de mercado observables e información de mercado. Sin embargo, el objetivo de una medición del valor razonable en ambos casos es el mismo: estimar el precio al que tendría lugar una transacción ordenada para vender el activo o transferir el pasivo entre participantes del mercado en la fecha de la medición en condiciones de mercado presentes (es decir, un precio de salida en la fecha de la medición desde la perspectiva de un participante de mercado que mantiene el activo o debe el pasivo). 
        
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro.ms-4
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 3
                | Cuando un precio para un activo o pasivo idéntico es no observable, una entidad medirá el valor razonable utilizando otra técnica de valoración que maximice el uso de datos de entrada observables relevantes y minimice el uso de datos de entrada no observables. Puesto que el valor razonable es una medición basada en el mercado, se mide utilizando los supuestos que los participantes del mercado utilizarían al fijar el precio del activo o pasivo, incluyendo los supuestos sobre riesgo. En consecuencia, la intención de una entidad de mantener un activo o liquidar o satisfacer de otra forma un pasivo no es relevante al medir el valor razonable. 
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 4
                | La definición de valor razonable se centra en los activos y pasivos porque son un objeto principal de la medición en contabilidad. Además, esta NIIF se aplicará a instrumentos de patrimonio propios de una entidad, medidos a valor razonable.  (Consejo Técnico de la Contaduría Pública (CTCP) (2020, 5 de noviembre). Norma Internacional de Información Financiera 13 Medición del Valor Razonable.)  
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto ALCANCE
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1(data-aos="fade-left")
            ol.lista-ol--cuadro.ms-4
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 1
                | Esta NIIF se aplicará cuando otra NIIF requiera o permita mediciones a valor razonable o información a revelar sobre mediciones a valor razonable (y mediciones, tales como valor razonable menos costos de venta, basadas en el valor razonable, o información a revelar sobre esas mediciones), excepto por lo que se especifica en los párrafos 6 y 7. 
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 2
                | Los requerimientos sobre medición e información a revelar de esta NIIF no se aplicarán a los elementos siguientes: (a) transacciones con pagos basados en acciones que queden dentro del alcance de la NIIF 2 Pagos basados en Acciones; (b) transacciones de arrendamiento contabilizados de acuerdo con la NIIF 16 Arrendamientos; y (c) mediciones que tengan alguna similitud con el valor razonable, pero que no sean valor razonable, tales como el valor neto realizable de la NIC 2 Inventarios o el valor en uso de la NIC 36 Deterioro del valor de los Activos.  
        
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro.ms-4
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 3
                | La información a revelar requerida por esta NIIF no se requiere para los siguientes elementos: (a) activos del plan medidos a valor razonable de acuerdo con la NIC 19 Beneficios a los Empleados; (b) inversiones en un plan de beneficios por retiro medidos a valor razonable de acuerdo con la NIC 26 Contabilización e Información Financiera sobre Planes de beneficio por Retiro; y (c) activos para los que el importe recuperable es el valor razonable menos los costos de disposición de acuerdo con la NIC 36. 
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span 4
                | Si el valor razonable se requiere o permite por otras NIIF, el marco de medición del valor razonable descrito en esta NIIF se aplicará a la medición inicial y posterior.

        .bloque-texto-a.color-secundario.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in")
            .col-lg-9.order-lg-1
              .bloque-texto-a__texto.p-4
                p.mb-0 El valor razonable es una medida basada en el mercado, para registrar su valor es importante indagar en el mercado si el elemento ha presentado cambios que requieran una actualización conforme con las variaciones presentadas. Algunos activos que deben ser medidos a valor razonable son: instrumentos financieros, propiedades, planta y equipo, activos biológicos e inversiones.
    
    p <b>Ejemplo:</b> La empresa Supercueros SAS adquiere 1.000 acciones el 11 de noviembre de 2020, a $2.500 cada una. Se cancela comisión por valor de $500.000.

    p.mb-4 A 31 de diciembre de 2020, el valor de la acción disminuye hasta $2.200 por acción.  Realizar la medición inicial y posterior.
  
    .row.mb-5.justify-content-center
      .col-lg-10
        div.tarjeta.bg-color-16.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")
              
            .col-lg-6.mb-3.mb-lg-0
              h5 Medición Inicial: 11 de noviembre de 2020
              .titulo-sexto.color-acento-contenido
                h5 Tabla 11.
                span Cálculo del valor total de una inversión en acciones
              .tabla-a.color-acento-botones.mb-3
                table
                  thead
                    tr
                      th.bg-color-6.text-center  Concepto  
                      th.bg-color-6.text-center  Valor 

                  tbody
                    tr.bg-color-white
                      td.text-center Inversión en acciones  
                      td.text-center $ 2.500.000 

                    tr.bg-color-18
                      td.text-center Más costo transacción   
                      td.text-center $ 500.000 
                    tr.bg-color-18
                      td.text-center.text-bold Total Inversión   
                      td.text-center.text-bold $ 3.000.000 
              .titulo-sexto.color-acento-contenido
                h5 Tabla 12.
                span Registro contable de la compra de acciones
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.bg-color-6.text-center  Cuenta  
                      th.bg-color-6.text-center  Debe 
                      th.bg-color-6.text-center  Haber 

                  tbody
                    tr.bg-color-white
                      td.text-center Activos financieros (acciones)  
                      td.text-center $ 3.000.000
                      td

                    tr.bg-color-18
                      td.text-center Efectivo  
                      td.text-center -
                      td.text-center $ 3.000.000
                    tr.bg-color-18
                      td.text-center.text-bold Total  
                      td.text-center $ 3.000.000
                      td.text-center $ 3.000.000
    
    .row.mb-5.justify-content-center
      .col-lg-10
        div.tarjeta.bg-color-8.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-3.mb-lg-0.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")
              
            .col-lg-6.mb-3.mb-lg-0.order-lg-1.mb-3.mb-lg-0
              h5 Medición posterior: 31 de diciembre de 2020
              .titulo-sexto.color-acento-contenido
                h5 Tabla 13.
                span Cálculo de pérdida por desvalorización de acciones
              .tabla-a.color-acento-botones.mb-3
                table
                  thead
                    tr
                      th.bg-color-6.text-center  Concepto  
                      th.bg-color-6.text-center  Valor 

                  tbody
                    tr.bg-color-white
                      td.text-center Valor razonable 31/12/2020
                      td.text-center $ 2.200.000 


                    tr.bg-color-18
                      td.text-center Valor costo de adquisición 11/11/2020  
                      td.text-center $ 2.500.000 

                    tr.bg-color-18
                      td.text-center.text-bold Valor pérdida de acciones  
                      td.text-center.text-bold -$ 300.000 
              .titulo-sexto.color-acento-contenido
                h5 Tabla 14.
                span Asiento contable por desvalorización de acciones
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.bg-color-6.text-center  Cuenta  
                      th.bg-color-6.text-center  Debe 
                      th.bg-color-6.text-center  Haber 

                  tbody
                    tr.bg-color-white
                      td.text-center Gasto por pérdida
                      td.text-center $ 300.000
                      td.text-center -

                    tr.bg-color-18
                      td.text-center Activos financieros (acciones) 
                      td.text-center -
                      td.text-center $ 300.000
                    tr.bg-color-18
                      td.text-center.text-bold Total  
                      td.text-center $ 300.000
                      td.text-center $ 300.000
    
    .row.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
              
      .col-lg-6
        P Esta Norma proporciona los criterios de aplicación del valor razonable que se utilizan en el reconocimiento y medición de hechos económicos.  Los invito a ampliar la información revisando la Norma internacional de Contabilidad número trece (NIIF 13) - “Medición del valor razonable” en el siguiente enlace:
        a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Consejo Técnico de la Contaduría Pública (CTCP) (2020, 5 de noviembre) Norma Internacional de Información Financiera 13 Medición del Valor Razonable.   

  
  
  //
    .row.align-items-center
      .col-lg-2.order-2
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-10.order-1.mb-3.mb-lg-0
        p.mb-0 Los regímenes tributarios establecen las normas y clasificaciones que rigen la obligación de contribuir al sostenimiento del Estado. Su estructura permite diferenciar a los contribuyentes según su actividad económica, ingresos y responsabilidades fiscales. Comprender estos regímenes es esencial para el cumplimiento de la normativa y la correcta aplicación de los impuestos.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 De acuerdo con normativa

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            div.bg-color-9.tarjeta.p-4.mb-5(data-aos="fade-right")
              p <b>De acuerdo con el Estatuto Tributario-0624 de 1989</b>, es fundamental atender la clasificación de los contribuyentes y no contribuyentes; por ende, es importante identificar el tipo de impuesto y las responsabilidades que se tiene en cada uno de estos.

              p Para continuar con el componente formativo propuesto, es importante abordar los términos de persona natural y jurídica, teniendo en cuenta que se manejan en el desarrollo del proceso de formación; por lo tanto, los relacionamos a continuación:
        .row
          .col-lg-4.mb-3.mb-lg-0 
            div.bg-color-3.tarjeta.p-4.mb-5(data-aos="fade-right").h-100
              h5 Persona natural
              p.mb-0 Hace referencia a todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición. Art. 74 Código Civil. Hace referencia a empresas de propietario único.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
          .col-lg-4.mb-3.mb-lg-0
            div.bg-color-12.tarjeta.p-4.mb-5(data-aos="fade-right").h-100
              h5 Persona jurídica
              p.mb-0 Se llama persona jurídica, una persona ficticia, capaz de ejercer derechos y contraer obligaciones civiles, y de ser representada judicial y extrajudicialmente. Art. 633 Código Civil. En términos generales hablamos de las sociedades que realizan un contrato de sociedad, donde realizan un aporte de dinero, trabajo con el fin de distribuirse las utilidades al final del periodo.
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Contribuyente y declarante
    
    p.mb-4 El concepto de contribuyente y declarante es clave en el sistema tributario, ya que define quiénes están obligados a pagar impuestos y presentar declaraciones.

    div.bg-color-8.tarjeta.p-4.mb-5(data-aos="fade-right")
      h5 Art. 2. Contribuyentes- Estatuto Tributario (ET)
      p.mb-0 Son contribuyentes o responsables directos del pago del tributo los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.
      p.mb-0 En esta clasificación se encuentran tres regímenes:
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen ordinario

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-4 A este régimen pertenecen las personas naturales y jurídicas, sucesiones ilíquidas que al cumplir los requisitos establecidos en la norma legal vigente deben ser declarantes del impuesto de renta y sus complementarios. En el caso de las personas naturales, que no cumplan con los requerimientos establecidos se consideran no declarantes del impuesto de renta y sus complementarios.
        .row.mb-5.justify-content-center
          .col-lg-4.order-2.ps-lg-0
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
          .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0.pe-lg-0
            div.bg-color-9.p-5.mb-5(data-aos="fade-right")
              h5 Algunos de los contribuyentes de este régimen son: 
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Personas naturales residentes y no residentes y sucesiones ilíquidas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Impuesto Sociedades, entidades nacionales y otros contribuyentes.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Las sociedades anónimas y asimiladas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Sociedades limitadas y asimiladas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Cajas de compensación.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Sociedades y entidades extranjeras.
                li.mb-0.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Fondos de inversión, etc.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen especial

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-4 Este régimen considera como un contribuyente al impuesto de renta y sus complementarios; sin embargo, tiene un tratamiento especial referente al sistema ordinario.
        .row.mb-5.justify-content-center
          .col-lg-4.order-2.ps-lg-0
            figure
              img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in")
          .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0.pe-lg-0
            div.bg-color-9.p-5.mb-5(data-aos="fade-right")
              h5.mb-5.mt-3 Dentro de esta clasificación encontramos: 
              p Todas las asociaciones, fundaciones y corporaciones constituidas como entidades sin ánimo de lucro.
        p.mb-4 Excepcionalmente, podrán solicitar ante la administración tributaria, de acuerdo con el artículo 356-2, su calificación como contribuyentes del Régimen Tributario Especial, siempre y cuando cumplan con los requisitos que se enumeran a continuación:
    
    .row.mb-5.justify-content-center
      .col-lg-4.order-2.ps-lg-0
        figure
          img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")
      .col-lg-6.mb-3.mb-lg-0.order-1.mb-3.mb-lg-0.pe-lg-0
        div.bg-color-9.p-5.mb-5(data-aos="fade-right")
          h5.mb-3 Algunos de los contribuyentes de este régimen son: 
          ol.lista-ol--cuadro
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 1
              | Que estén legalmente constituidas.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              | Que su objeto social sea de interés general en una o varias de las actividades meritorias establecidas en el artículo 359 del presente estatuto, a las cuales debe tener acceso la comunidad.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 3
              | Que ni sus aportes sean reembolsados ni sus excedentes distribuidos, bajo ninguna modalidad, cualquiera que sea la denominación que se utilice, ni directa, ni indirectamente, ni durante su existencia, ni en el momento de su disolución y liquidación, de acuerdo con el artículo 356-1.(Estatuto Tributario, 2020, Art. 19)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen de tributación simple
    
    h5.mb-3 Art. 905. Sujetos pasivos – Estatuto Tributario (ET).
    p.mb-4  <b>Nota 1.</b> Podrán ser sujetos pasivos del impuesto unificado bajo el régimen simple de tributación - SIMPLE las personas naturales o jurídicas que reúnan la totalidad de las siguientes condiciones:

    .row.mb-5.justify-content-center
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col-lg-9
              p.mb-0 1- Que se trate de una persona natural que desarrolle una empresa o de una persona jurídica en la que sus socios, partícipes o accionistas sean personas naturales, nacionales o extranjeras, residentes en Colombia.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.svg")
            .col-lg-9
              p.mb-0 2- Que en el año gravable anterior hubieren obtenido ingresos brutos, ordinarios o extraordinarios, inferiores a 80.000 UVT. En el caso de las empresas o personas jurídicas nuevas, la inscripción en el impuesto unificado bajo el régimen simple de tributación – SIMPLE, estará́ condicionada a que los ingresos del año no superen estos límites.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.svg")
            .col-lg-9
              p.mb-0 3- Si uno de los socios persona natural tiene una o varias empresas o participa en una o varias sociedades, inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas empresas o sociedades.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.svg")
            .col-lg-9
              p.mb-0 4- Si uno de los socios persona natural tiene una participación superior al 10% en una o varias sociedades no inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas sociedades.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col-lg-9
              p.mb-0 5- Si uno de los socios persona natural es gerente o administrador de otras empresas o sociedades, los límites máximos de ingresos brutos se revisarán de forma consolidada con los de las empresas o sociedades que administra.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.svg")
            .col-lg-9
              p.mb-0 6- La persona natural o jurídica debe estar al día con sus obligaciones tributarias de carácter nacional, departamental y municipal, y con sus obligaciones de pago de contribuciones al Sistema de Seguridad Social Integral. También debe contar con la inscripción respectiva en el Registro Único Tributario - RUT y con todos los mecanismos electrónicos de cumplimiento, firma y factura electrónica.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto No contribuyentes

        h5.mb-5 De acuerdo con el artículo 22 del Estatuto Tributario (ET) se encuentran
        .row.mb-5.justify-content-center
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-5.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 La nación, las entidades territoriales, las Corporaciones Autónomas Regionales y de Desarrollo Sostenible, las áreas Metropolitanas, la Sociedad Nacional de la Cruz Roja Colombiana y su sistema federado, las superintendencias y las unidades administrativas especiales, siempre y cuando no se señalen en la Ley como contribuyentes.
              li.mb-3.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Las sociedades de mejoras públicas, las asociaciones de padres de familia, los organismos de acción comunal, las juntas de defensa civil, las juntas de copropietarios administradoras de edificios organizados en propiedad horizontal o de copropietarios de conjuntos residenciales, las asociaciones de exalumnos, las asociaciones de hogares comunitarios y hogares infantiles del Instituto Colombiano de Bienestar Familiar o autorizados por este y las asociaciones de adultos mayores autorizados por el Instituto Colombiano de Bienestar Familiar.
        .row.mb-5.justify-content-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in")
          .col-lg-7
            ul.lista-ul--color.mb-0
              li.mb-5.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Los resguardos y cabildos indígenas, ni la propiedad colectiva de las comunidades negras conforme a la Ley 70 de 1993.
              li.mb-3.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Los sindicatos, las asociaciones gremiales, los fondos de empleados, los fondos mutuos de inversión, las iglesias y confesiones religiosas reconocidas por el Ministerio del Interior o por la ley, los partidos o movimientos políticos aprobados por el Consejo Nacional Electoral; las asociaciones y federaciones de departamentos y de municipios, las sociedades o entidades de alcohólicos anónimos, los establecimientos públicos y en general cualquier establecimiento oficial descentralizado, siempre y cuando no se señale en la ley de otra manera. Art. 23 Estatuto Tributario (ET).
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Responsabilidades

    p.mb-4 El Registro Único Tributario, RUT, administrado por la Dirección de Impuestos y Aduanas Nacionales –DIAN-, constituye el mecanismo único para identificar, ubicar y clasificar las personas y entidades sujetos de obligaciones administradas por la Dirección de Impuestos y Aduanas Nacionales, respecto de los cuales esta requiera su inscripción.
    h5.mb-5 Al contribuyente, sea persona natural o jurídica se le asigna las responsabilidades de acuerdo con su actividad, teniendo en cuenta la norma vigente.

    .row.justify-content-center
      .col-lg-8
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Responsabilidades tributarias
        .tabla-a.color-acento-botones
          table
            caption Tomado de: Legis (2019, 16 de abril).
            thead
              tr
                th.bg-color-12(width="15%").text-center Código
                th.bg-color-12 Nombre
            tbody
              tr
                td.text-center 1
                td Aporte especial para la administración de justicia.
              tr
                td.text-center 2
                td Gravamen a los movimientos financieros.
              tr
                td.text-center 3
                td Impuesto al patrimonio.
              tr
                td.text-center 4
                td Impuesto renta y complementario régimen especial.
              tr
                td.text-center 5
                td  Impuesto renta y complementario régimen ordinario.
              tr
                td.text-center 6
                td Ingresos y patrimonio.
              tr
                td.text-center 7
                td Retención en la fuente a título de renta.
              tr
                td.text-center 8
                td Retención timbre nacional.
              tr
                td.text-center 9
                td Retención en la fuente en el impuesto sobre las ventas.
              tr
                td.text-center 10
                td Obligado aduanero.
              tr
                td.text-center 13
                td Gran contribuyente.
              tr
                td.text-center 14
                td Informante de exógena.
              tr
                td.text-center 15
                td Autorretenedor.
              tr
                td.text-center 16
                td Obligación facturar por ingresos bienes y/o servicios excluidos.
              tr
                td.text-center 17
                td Profesionales de compra y venta de divisas.
              tr
                td.text-center 18
                td Precios de transferencia.
              tr
                td.text-center 19
                td Productor de bienes y/o servicios exentos.
              tr
                td.text-center 20
                td Obtención NIT.
              tr
                td.text-center 21
                td Declarar ingreso o salida del país de divisas o moneda. 
              tr
                td.text-center 22
                td Obligado a cumplir deberes formales a nombre de terceros.
              tr
                td.text-center 23
                td Agente de retención en ventas.
              tr
                td.text-center 24
                td Declaración consolidada precios de transferencia.
              tr
                td.text-center 26
                td Declaración individual precios de transferencia.
              tr
                td.text-center 32
                td  Impuesto nacional a la gasolina y al ACPM.
              tr
                td.text-center 33
                td Impuesto nacional al consumo.
              tr
                td.text-center 36
                td Establecimiento Permanente.
              tr
                td.text-center 37
                td Obligado a Facturar Electrónicamente.
              tr
                td.text-center 38
                td Facturación Electrónica Voluntaria.
              tr
                td.text-center 39
                td Proveedor de Servicios Tecnológicos PST.
              tr
                td.text-center 41
                td Declaración anual de activos en el exterior.
              tr
                td.text-center 45
                td Autorretenedor de rendimientos financieros.
              tr
                td.text-center 46
                td IVA Prestadores de Servicios desde el exterior.
              tr
                td.text-center 47
                td Régimen Simple de Tributación – SIMPLE.
              tr
                td.text-center 48
                td Impuesto sobre las ventas – IVA.
              tr
                td.text-center 49
                td No responsable de IVA.
              tr
                td.text-center 50
                td No responsable de consumo restaurantes y bares.
              tr
                td.text-center 51
                td Agente retención impoconsumo de bienes inmuebles.
              tr
                td.text-center 52
                td Facturador electrónico.
              tr
                td.text-center 53
                td Persona jurídica no responsable de IVA.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
