export default {
  global: {
    Name: 'Fundamentos de matemáticas financieras',
    Description:
      'En este componente formativo se abordan temas relacionados con la fundamentación y aplicación de las matemáticas financieras en el sector productivo, se analiza la clasificación de las tasas de interés, el valor del dinero en el tiempo, equivalencia de tasas, tablas de amortización y alternativas de inversión como lo son el Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR), así mismo, la Norma Internacional de Información Financiera (NIIF) 13 – Medición del Valor Razonable , teniendo en cuenta la importancia de su análisis y aplicación en el registro de los hechos económicos bajo los estándares internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Matemáticas financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'concepto.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tasas de interés.',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tasa nominal, periódica y efectiva.',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tablas de amortización.',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Alternativas de inversión.',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Norma Internacional de Información Financiera (NIIF)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia:
        'Meza, J. J. (2017). Matemáticas financieras aplicadas (6.a ed.). Ecoe Ediciones.',
      tipo: 'Capítulo 1-2-3-4 y 7',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2017/06/Matematicas-Financieras-Aplicadas-6ta-Edici%C3%B3n.pdf',
    },
    {
      tema: 'Tema 2',
      referencia:
        'Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Santiago de Cali: Editorial Universidad Icesi. ',
      tipo: 'Capítulo 1-2-3-4-7 y 8',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279',
    },
  ],
  glosario: [
    {
      termino: 'Interés',
      significado:
        'Es el valor que se cancela por utilizar un capital durante un periodo determinado, teniendo en cuenta las condiciones acordadas entre deudor y acreedor.',
    },
    {
      termino: 'Interés compuesto',
      significado:
        'Es aquel que al final del período capitaliza los intereses causados en el período inmediatamente anterior.',
    },
    {
      termino: 'Interés simple',
      significado:
        'Se llama interés simple aquél en el cual los intereses devengados en un período no ganan intereses en los períodos siguientes, independientemente de que se paguen o no. Únicamente sobre el capital principal se liquidan los intereses sin tener en cuenta los intereses precedentes causados.',
    },
    {
      termino: 'Inversión',
      significado:
        'Es la asignación de recursos en el presente con el fin de obtener unos beneficios, en el futuro (Vélez, 1998).',
    },
    {
      termino: 'Matemáticas financieras',
      significado:
        'Es el campo de las matemáticas que aplica un ente económico para el análisis y valoración de los mercados financieros y el valor del dinero en el tiempo, mediante la aplicación de cálculos aritméticos.',
    },
    {
      termino: 'Tabla de amortización',
      significado:
        'Es un cuadro de pagos que refleja la cuota acordada con el pago, que se compone de abono a capital e intereses durante un periodo y tasa determinada.',
    },
    {
      termino: 'Tasa de interés',
      significado:
        'Es la proporción dada normalmente en porcentaje, que se usa para determinar el costo del uso del dinero en un tiempo determinado.',
    },
    {
      termino: 'Tasa efectiva',
      significado:
        'Se paga o se recibe por un préstamo o un ahorro cuando no se retiran los intereses, se asimila a un interés compuesto. Esta tasa es una medida que permite comparar las tasas de interés nominales anuales bajo diferentes modalidades de pago, ya que generalmente se parte de una tasa efectiva para establecer la tasa nominal que se pagará o recibirá por un préstamo o un ahorro.',
    },
    {
      termino: 'Tasa interna de retorno (TIR)',
      significado:
        'Es un indicador de rentabilidad que se utiliza en su mayoría para evaluar proyectos de inversión.',
    },
    {
      termino: 'Tasa nominal',
      significado:
        'Es aquella que se paga por un préstamo o una cuenta de ahorros y no se suma al capital, es expresada en términos anuales con una frecuencia de tiempo de pago.',
    },
    {
      termino: 'Valor del dinero en el tiempo',
      significado:
        'El dinero es un bien, cuya principal característica es que se puede intercambiar libre y universalmente por otros bienes o servicios.',
    },
    {
      termino: 'Valor Futuro',
      significado:
        'Describe el crecimiento de un capital, o inversión, dada una tasa de interés y un tiempo. ',
    },
    {
      termino: 'Valor presente o actual',
      significado:
        'Describe los flujos de dinero futuros, que a una tasa de interés de descuento y periodos dados representa valores presentes.',
    },
    {
      termino: 'Valor presente Neto',
      significado:
        'Es una cifra monetaria que resulta de comparar el valor presente de los ingresos con el valor presente de los ingresos. El VPN es una alternativa de inversión utilizada frecuentemente para medir el desempeño de la inversión.',
    },
    {
      termino: 'Valor razonable',
      significado: 'El valor razonable es una medición basada en el mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (CTCP) (s.f). Norma Internacional de Información Financiera 13 Medición del Valor Razonable. ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328',
    },
    {
      referencia:
        'Decreto 2420 de diciembre 14 de 2015. Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera.',
      link: '',
    },
    {
      referencia:
        'García, A. (1998). Evaluación de proyectos de inversión. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Kozikowski, Z. (2007). Matemáticas financieras: el valor del dinero en el tiempo. McGraw-Hill Interamericana. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=514',
    },
    {
      referencia:
        'Meza, J. J. (2017). Matemáticas financieras aplicadas (6.a ed.). Ecoe Ediciones. ',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2017/06/Matematicas-Financieras-Aplicadas-6ta-Edici%C3%B3n.pdf',
    },
    {
      referencia:
        'Vélez, I. (2003). Decisiones empresariales bajo riesgo e incertidumbre. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia:
        'Vidaurri, H (2017). Matemáticas Financieras. Cengage Learning. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3788',
    },
    {
      referencia:
        'Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Editorial Universidad Icesi. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
