export interface Pathology {
  /**
   * Array of URLs that would redirect to this pathology. Must be URL friendly.
   *
   * @example
   * // both /suerdez and /perda-auditiva would redirect to this pathology
   * ['surdez', 'perda-auditiva']
   */
  urls: string[];
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
}

export const pathologies: Pathology[] = [
  {
    urls: ['surdez', 'perda-auditiva'],
    name: 'Perda Auditiva',
    shortDescription:
      'Incapacidade total ou parcial de ouvir, podendo ser causada por diversos fatores como idade avançada, exposição a ruídos intensos, trauma ou condições médicas.',
    fullDescription: `A surdez ou perda auditiva refere-se à incapacidade parcial ou total de ouvir, variando de leve a profunda. Pode ser causada por uma variedade de fatores, incluindo idade avançada, exposição a ruídos intensos, traumas físicos ou condições médicas específicas. Com o envelhecimento, é comum ocorrer uma deterioração gradual da audição, conhecida como presbiacusia, que afeta principalmente as frequências altas e dificulta a compreensão da fala, especialmente em ambientes ruidosos.

A exposição prolongada a ruídos intensos, como em ambientes de trabalho barulhentos ou durante a prática de hobbies como ouvir música alta através de fones de ouvido, também pode levar à perda auditiva. Essa condição, chamada de perda auditiva induzida por ruído, é cumulativa e muitas vezes irreversível, destacando a importância do uso de proteção auditiva em ambientes ruidosos. Traumas físicos na cabeça ou no ouvido podem danificar as estruturas auditivas e resultar em perda auditiva súbita ou gradual.

Além disso, várias condições médicas podem contribuir para a perda auditiva. Infecções do ouvido, otosclerose (crescimento anormal de osso no ouvido médio), e doenças autoimunes são exemplos de fatores que podem afetar a audição. A identificação precoce e o tratamento adequado dessas condições são essenciais para minimizar os impactos na qualidade de vida dos indivíduos afetados.`,
    imageUrl: '/patologias/perda-auditiva.png'
  },
  {
    urls: ['surdez-infantil'],
    name: 'Surdez Infantil',
    shortDescription:
      'Perda auditiva em crianças, que pode ser congênita (presente ao nascimento) ou adquirida devido a infecções, lesões ou problemas genéticos.',
    fullDescription:
      'A surdez infantil é uma condição que pode ser congênita ou adquirida, afetando a capacidade auditiva de crianças desde o nascimento ou durante a infância. A perda auditiva congênita pode ser resultado de fatores genéticos, complicações durante a gestação ou parto, ou infecções pré-natais, como a rubéola. Testes auditivos neonatais são cruciais para a detecção precoce de problemas auditivos, permitindo intervenções imediatas que podem melhorar significativamente o desenvolvimento da fala e da linguagem.\n' +
      '\n' +
      'Infecções como otite média, meningite ou sarampo durante a infância podem causar perda auditiva adquirida. Além disso, traumatismos na cabeça ou exposição a ruídos altos também podem afetar a audição das crianças. A identificação precoce desses fatores e o tratamento adequado são fundamentais para prevenir a progressão da perda auditiva e suas consequências no desenvolvimento educacional e social da criança.\n' +
      '\n' +
      'O uso de aparelhos auditivos, implantes cocleares e outras tecnologias assistivas, juntamente com terapias de reabilitação auditiva e de fala, pode ajudar crianças com perda auditiva a desenvolver habilidades de comunicação eficazes. O apoio educacional especializado e a inclusão em ambientes de aprendizado adaptados são igualmente importantes para garantir que essas crianças alcancem seu pleno potencial.',
    imageUrl: '/patologias/surdez-infantil.jpg'
  },
  {
    urls: ['otosclerose'],
    name: 'Otosclerose',
    shortDescription:
      'Condição em que há crescimento anormal de osso no ouvido médio, geralmente afetando a mobilidade das estruturas auditivas e resultando em perda auditiva progressiva.',
    fullDescription:
      'A otosclerose é uma doença do ouvido médio caracterizada pelo crescimento anormal de osso ao redor dos ossículos auditivos, particularmente o estribo. Esse crescimento impede a mobilidade dessas estruturas, resultando em perda auditiva condutiva progressiva. Embora a causa exata da otosclerose seja desconhecida, fatores genéticos parecem desempenhar um papel significativo, com a condição frequentemente ocorrendo em famílias.\n' +
      '\n' +
      'Os sintomas da otosclerose geralmente começam na idade adulta jovem e podem incluir perda auditiva gradual, zumbido (tinnitus) e, ocasionalmente, vertigem. A perda auditiva tende a ser bilateral, afetando ambos os ouvidos, mas pode começar em um ouvido antes de progredir para o outro. À medida que a doença avança, a perda auditiva pode se tornar significativa, afetando a qualidade de vida e a capacidade de comunicação do indivíduo.\n' +
      '\n' +
      'O tratamento da otosclerose pode incluir o uso de aparelhos auditivos para amplificar o som ou, em casos mais graves, cirurgia para substituir o estribo afetado por uma prótese, procedimento conhecido como estapedectomia. Em alguns casos, medicamentos como fluoreto de sódio são utilizados para tentar retardar a progressão da doença. A avaliação e o acompanhamento por um otorrinolaringologista são essenciais para o manejo adequado da otosclerose.',
    imageUrl: '/patologias/otosclerose.jpeg'
  },
  {
    urls: ['otite-media-aguda'],
    name: 'Otite Média Aguda',
    shortDescription:
      'Inflamação aguda do ouvido médio, muitas vezes acompanhada de dor intensa, febre e diminuição da audição, sendo comum em crianças devido à anatomia do sistema auditivo.',
    fullDescription:
      'A otite média aguda é uma inflamação do ouvido médio, frequentemente causada por infecções bacterianas ou virais. É especialmente comum em crianças, devido à anatomia das trompas de Eustáquio, que são mais curtas e horizontais, facilitando a entrada de patógenos. Os sintomas típicos incluem dor intensa no ouvido, febre, irritabilidade, e diminuição da audição. Em alguns casos, pode ocorrer drenagem de líquido purulento do ouvido, indicando uma perfuração do tímpano.\n' +
      '\n' +
      'O diagnóstico de otite média aguda é geralmente clínico, baseado na história médica e no exame físico, incluindo a otoscopia, que permite visualizar a inflamação e a presença de fluido no ouvido médio. A maioria dos casos de otite média aguda resolve-se espontaneamente, mas o tratamento pode incluir analgésicos para alívio da dor e, em casos selecionados, antibióticos para combater a infecção bacteriana. A decisão de usar antibióticos depende da gravidade dos sintomas, da idade da criança e da presença de fatores de risco.\n' +
      '\n' +
      'Complicações da otite média aguda, embora raras, podem incluir mastoidite (infecção do osso mastoide), meningite e perda auditiva permanente. Por isso, é importante monitorar a evolução da doença e seguir as orientações médicas. A prevenção pode incluir medidas como vacinas contra patógenos comuns, como o Streptococcus pneumoniae e o Haemophilus influenzae, e a promoção de aleitamento materno, que oferece proteção imunológica adicional.',
    imageUrl: '/patologias/otite-media-aguda.avif'
  },
  {
    urls: ['otite-media-cronica'],
    name: 'Otite Média Crônica',
    shortDescription:
      'Inflamação prolongada do ouvido médio, podendo resultar em danos permanentes às estruturas auditivas e causar recorrência de infecções.',
    fullDescription:
      'A otite média crônica é uma inflamação persistente ou recorrente do ouvido médio que pode durar várias semanas ou meses. Essa condição pode resultar em danos permanentes às estruturas auditivas e é frequentemente associada a perfurações do tímpano e à presença de secreção purulenta. A otite média crônica pode ser causada por infecções bacterianas não resolvidas, obstruções das trompas de Eustáquio, ou como complicação de uma otite média aguda não tratada adequadamente.\n' +
      '\n' +
      'Os sintomas da otite média crônica incluem otorreia (drenagem de líquido pelo ouvido), perda auditiva progressiva e, ocasionalmente, dor de ouvido e zumbido. A perda auditiva pode variar de leve a severa, dependendo do grau de dano às estruturas auditivas. Em alguns casos, pode ocorrer o desenvolvimento de colesteatoma, uma massa anormal de tecido que pode causar erosão óssea e aumentar o risco de complicações graves.\n' +
      '\n' +
      'O tratamento da otite média crônica pode incluir a administração de antibióticos tópicos ou sistêmicos, limpeza do ouvido e, em casos mais severos, cirurgia para reparar o tímpano ou drenar a infecção. Procedimentos como a timpanoplastia ou a mastoidectomia podem ser necessários para restaurar a integridade do ouvido médio e prevenir complicações futuras. O acompanhamento regular com um otorrinolaringologista é crucial para o manejo eficaz dessa condição.',
    imageUrl: '/patologias/otite-media-cronica.jpg'
  },
  {
    urls: ['perfuracoes-timpanicas'],
    name: 'Perfurações Timpânicas',
    shortDescription:
      'Ruptura na membrana do tímpano, que pode ocorrer devido a infecções, lesões ou variações de pressão, geralmente causando dor e perda auditiva temporária.',
    fullDescription:
      'Perfurações timpânicas são rupturas na membrana do tímpano, que podem ocorrer devido a infecções, traumas ou variações de pressão. Essas rupturas comprometem a função do tímpano, resultando em dor e perda auditiva temporária. As perfurações podem ser pequenas e assintomáticas ou grandes e causar uma redução significativa na audição e predispor a infecções do ouvido médio.\n' +
      '\n' +
      'Traumas, como inserção inadequada de objetos no ouvido, explosões ou mudanças bruscas de pressão, como durante o mergulho ou viagens aéreas, são causas comuns de perfurações timpânicas. Infecções de ouvido, como a otite média aguda, também podem levar à formação de uma perfuração se a pressão do fluido acumulado romper o tímpano. A presença de secreção purulenta pode ser um sinal de perfuração associada à infecção.\n' +
      '\n' +
      'O diagnóstico é feito por exame otoscópico, onde a perfuração é visualizada diretamente. A maioria das perfurações timpânicas cicatriza espontaneamente dentro de algumas semanas, mas algumas podem necessitar de intervenção médica. O tratamento pode incluir o uso de antibióticos para prevenir infecções secundárias e evitar a entrada de água no ouvido durante o processo de cicatrização. Em casos onde a perfuração não cicatriza por si só, uma cirurgia conhecida como timpanoplastia pode ser realizada para fechar o orifício e restaurar a audição.',
    imageUrl: '/patologias/perfuracoes-timpanicas.webp'
  },
  {
    urls: ['colesteatoma'],
    name: 'Colesteatoma',
    shortDescription:
      'Crescimento anormal de tecido na orelha média, podendo causar erosão óssea, infecções recorrentes e perda auditiva se não for tratado.',
    fullDescription:
      'O colesteatoma é um crescimento anormal de tecido epitelial na orelha média e mastoide que pode causar erosão óssea, infecções recorrentes e perda auditiva progressiva se não for tratado. Esse tecido anômalo se acumula e pode formar uma massa cística que exerce pressão sobre as estruturas circundantes, levando a complicações graves, incluindo destruição óssea e extensão para áreas próximas, como o ouvido interno e a base do crânio.\n' +
      '\n' +
      'Os sintomas de um colesteatoma incluem secreção crônica pelo ouvido (otorreia), perda auditiva, dor no ouvido e, em casos avançados, vertigem e paralisia facial. A otoscopia pode revelar uma massa esbranquiçada ou amarelada no ouvido médio, e exames de imagem como tomografia computadorizada (TC) são utilizados para avaliar a extensão do colesteatoma e o envolvimento das estruturas ósseas.\n' +
      '\n' +
      'O tratamento do colesteatoma é geralmente cirúrgico, visando a remoção completa do tecido anômalo para prevenir a recorrência e tratar as complicações. A mastoidectomia é um procedimento comum, onde as células mastoides afetadas são removidas. O acompanhamento pós-operatório é essencial para monitorar a cicatrização e identificar quaisquer sinais de recorrência. O manejo eficaz do colesteatoma é crucial para preservar a audição e prevenir complicações graves.',
    imageUrl: '/patologias/colesteatoma.jpg'
  },
  {
    urls: ['tonturas'],
    name: 'Tonturas',
    shortDescription:
      'Sensação de desequilíbrio, vertigem ou sensação de que o ambiente está girando, podendo ser causada por problemas no ouvido interno, sistema vestibular ou outras condições médicas.',
    fullDescription:
      'As tonturas são uma sensação de desequilíbrio ou vertigem, onde a pessoa pode sentir que está girando ou que o ambiente ao seu redor está se movendo. Essa condição pode ser causada por problemas no ouvido interno, sistema vestibular, distúrbios neurológicos, cardiovasculares ou outras condições médicas. A vertigem posicional paroxística benigna (VPPB), doença de Menière, neurite vestibular e enxaquecas vestibulares são algumas das causas mais comuns de tonturas relacionadas ao sistema vestibular.\n' +
      '\n' +
      'O diagnóstico das causas das tonturas pode ser complexo e geralmente envolve uma avaliação detalhada do histórico médico, exame físico e testes específicos do equilíbrio e da função vestibular. Exames de imagem, como ressonância magnética (RM), podem ser necessários para excluir outras causas neurológicas ou estruturais. Testes auditivos e vestibulares, como a videonistagmografia (VNG) e a prova calórica, ajudam a identificar problemas no ouvido interno.\n' +
      '\n' +
      'O tratamento das tonturas depende da causa subjacente. Para VPPB, manobras de reposicionamento, como a manobra de Epley, são eficazes para aliviar os sintomas. A doença de Menière pode ser manejada com mudanças na dieta, medicamentos diuréticos e, em casos graves, cirurgia. O tratamento da neurite vestibular pode incluir medicamentos para aliviar os sintomas agudos e fisioterapia vestibular para ajudar na recuperação do equilíbrio. O acompanhamento médico é essencial para ajustar o tratamento conforme necessário e monitorar a evolução da condição.',
    imageUrl: '/patologias/tonturas.jpeg'
  },
  {
    urls: ['vppb'],
    name: 'VPPB – Vertigem Posicional Paroxística Benigna',
    shortDescription:
      'Tipo comum de vertigem desencadeada por movimentos específicos da cabeça, geralmente de curta duração e recorrente.',
    fullDescription:
      'A Vertigem Posicional Paroxística Benigna (VPPB) é uma causa comum de vertigem, caracterizada por episódios breves de vertigem intensa desencadeada por mudanças específicas na posição da cabeça. Isso ocorre devido ao deslocamento de pequenos cristais de cálcio (otólitos) dentro dos canais semicirculares do ouvido interno, que interferem na percepção normal do movimento. Movimentos como deitar-se, levantar-se, virar na cama ou inclinar a cabeça podem precipitar os sintomas.\n' +
      '\n' +
      'Os sintomas da VPPB incluem vertigem de curta duração, geralmente menos de um minuto, acompanhada por náusea e, às vezes, desequilíbrio. A vertigem pode ser debilitante, causando medo de realizar movimentos que desencadeiam os sintomas. O diagnóstico é geralmente clínico, baseado na história do paciente e em manobras diagnósticas específicas, como a manobra de Dix-Hallpike, que provoca os sintomas típicos de VPPB.\n' +
      '\n' +
      'O tratamento da VPPB é eficaz e envolve manobras de reposicionamento, como a manobra de Epley, que ajudam a mover os otólitos deslocados para uma posição onde não causam sintomas. Essas manobras são realizadas por um médico ou fisioterapeuta treinado e podem proporcionar alívio imediato ou após algumas sessões. Em alguns casos, exercícios vestibulares são recomendados para ajudar a restaurar o equilíbrio e prevenir recorrências. A VPPB tem uma alta taxa de recorrência, por isso, o acompanhamento e a educação do paciente sobre como gerenciar os episódios são importantes.',
    imageUrl: '/patologias/vppb.png'
  },
  {
    urls: ['meniere'],
    name: 'Menière',
    shortDescription:
      'Doença do ouvido interno caracterizada por episódios recorrentes de vertigem, zumbido, perda auditiva e sensação de plenitude auricular, possivelmente devido a problemas de fluido no ouvido interno.',
    fullDescription:
      'A Doença de Menière é uma condição crônica do ouvido interno caracterizada por episódios recorrentes de vertigem, zumbido (tinnitus), perda auditiva flutuante e uma sensação de plenitude ou pressão no ouvido. A causa exata da Doença de Menière é desconhecida, mas acredita-se que esteja relacionada a anomalias no volume ou na composição do líquido endolinfático no ouvido interno, afetando a função do sistema vestibular e auditivo.\n' +
      '\n' +
      'Os episódios de vertigem na Doença de Menière podem durar de 20 minutos a várias horas, acompanhados por náusea e vômitos. A perda auditiva associada tende a ser progressiva e pode eventualmente se tornar permanente. O zumbido e a sensação de plenitude auricular são constantes ou intermitentes, afetando a qualidade de vida do paciente. A natureza imprevisível dos episódios de vertigem pode ser extremamente debilitante e impactar a capacidade de realizar atividades diárias e profissionais.\n' +
      '\n' +
      'O manejo da Doença de Menière inclui mudanças na dieta, como a redução da ingestão de sal para minimizar a retenção de líquidos, e o uso de diuréticos para controlar o volume de líquido no ouvido interno. Medicamentos para controlar a vertigem, náusea e ansiedade durante os episódios agudos também são prescritos. Em casos severos e refratários ao tratamento conservador, procedimentos cirúrgicos, como a descompressão do saco endolinfático ou a labirintectomia, podem ser considerados. A reabilitação vestibular e o apoio psicológico são componentes importantes do tratamento para ajudar os pacientes a lidar com os sintomas crônicos e melhorar a qualidade de vida.',
    imageUrl: '/patologias/meniere.jpg'
  },
  {
    urls: ['zumbido'],
    name: 'Zumbido',
    shortDescription:
      'Percepção de ruídos nos ouvidos na ausência de fonte sonora externa, podendo ser contínuo, intermitente, agudo ou grave, com causas que variam de exposição a ruídos altos a condições médicas subjacentes.',
    fullDescription:
      'O zumbido, também conhecido como tinnitus, é a percepção de ruídos ou sons nos ouvidos na ausência de uma fonte sonora externa. Esses sons podem variar de um leve zumbido, chiado, assobio, até sons mais complexos e contínuos, podendo ser percebidos em um ou ambos os ouvidos. O zumbido pode ser intermitente ou contínuo, e sua intensidade pode variar ao longo do dia. A condição pode ser debilitante, afetando a concentração, o sono e a qualidade de vida.\n' +
      '\n' +
      'As causas do zumbido são variadas e podem incluir exposição a ruídos altos, perda auditiva relacionada à idade (presbiacusia), infecções do ouvido, doenças do ouvido interno como a Doença de Menière, uso de certos medicamentos ototóxicos, traumas na cabeça ou pescoço e condições sistêmicas como hipertensão e diabetes. O zumbido também pode estar associado a distúrbios emocionais e psicológicos, como ansiedade e depressão, que podem amplificar a percepção dos sintomas.\n' +
      '\n' +
      'O diagnóstico do zumbido envolve uma avaliação abrangente do histórico médico, exame físico e testes auditivos para determinar a causa subjacente. Em alguns casos, exames de imagem como ressonância magnética (RM) podem ser necessários para excluir causas neurológicas. O tratamento do zumbido depende da causa identificada e pode incluir o uso de aparelhos auditivos, terapias sonoras, medicamentos para aliviar os sintomas e técnicas de manejo do estresse. Terapias comportamentais, como a Terapia de Retreinamento de Tinnitus (TRT) e a terapia cognitivo-comportamental (TCC), podem ser eficazes para ajudar os pacientes a habituar-se ao zumbido e melhorar a qualidade de vida.',
    imageUrl: '/patologias/zumbido.jpg'
  },
  {
    urls: ['doencas-nariz-garganta-ouvidos'],
    name: 'Doenças do Nariz, Garganta e Ouvidos',
    shortDescription:
      'Incluem uma variedade de condições que afetam essas áreas, como sinusite, amigdalite, adenoidite, rinite alérgica, entre outras, que podem afetar indiretamente a audição ou estar associadas a problemas auditivos.',
    fullDescription:
      'As doenças que afetam o nariz, garganta e ouvidos incluem uma variedade de condições que podem ter impacto significativo na saúde e qualidade de vida. Sinusite, amigdalite, adenoidite, rinite alérgica, entre outras, são comuns e podem estar associadas a problemas auditivos ou afetar indiretamente a audição. A proximidade anatômica e a interconexão das vias aéreas superiores e orelhas facilitam a propagação de infecções e inflamações entre essas regiões.\n' +
      '\n' +
      'A sinusite é a inflamação dos seios paranasais, frequentemente causada por infecções virais ou bacterianas, que resulta em sintomas como congestão nasal, dor facial, cefaleia e secreção nasal. Quando crônica, a sinusite pode levar a complicações como a otite média devido à obstrução das trompas de Eustáquio. A amigdalite e adenoidite são inflamações das amígdalas e adenoides, respectivamente, que podem causar dor de garganta, dificuldade para engolir e obstrução nasal, especialmente em crianças.\n' +
      '\n' +
      'A rinite alérgica é uma condição inflamatória das vias nasais causada por uma reação alérgica a alérgenos, como pólen, ácaros ou pêlos de animais. Os sintomas incluem espirros, prurido nasal, congestão e coriza. A rinite alérgica pode afetar a função da trompa de Eustáquio e predispor o indivíduo a infecções do ouvido médio. O tratamento dessas condições pode incluir o uso de medicamentos, como antibióticos, descongestionantes, anti-histamínicos e corticoides, além de intervenções cirúrgicas quando necessário. A abordagem multidisciplinar envolvendo otorrinolaringologistas, alergologistas e outros especialistas é fundamental para o manejo eficaz dessas doenças e a prevenção de complicações.',
    imageUrl: '/patologias/nariz-garganta.jpg'
  }
] as const;
