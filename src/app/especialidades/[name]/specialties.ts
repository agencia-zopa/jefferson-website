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
    urls: ['otologia'],
    name: 'Otologia',
    shortDescription:
      '',
    fullDescription: `
A otologia é uma especialidade médica que se dedica ao estudo, diagnóstico e tratamento das doenças e condições que afetam o ouvido. Este campo abrange tanto o ouvido externo, que inclui o pavilhão auricular e o canal auditivo, quanto o ouvido médio e interno, responsáveis pela audição e pelo equilíbrio. Entre as patologias mais comuns tratadas pelos otologistas estão as infecções de ouvido, como a otite média e externa, a perda auditiva, os distúrbios do equilíbrio, como a vertigem e a doença de Ménière, além de tumores e anomalias congênitas que podem afetar a estrutura e a função do ouvido.

A prática da otologia requer um conhecimento profundo da anatomia e fisiologia do sistema auditivo e vestibular, além de habilidades cirúrgicas para realizar procedimentos que podem variar de reparos do tímpano a implantes cocleares. O avanço tecnológico tem permitido o desenvolvimento de métodos diagnósticos mais precisos e tratamentos menos invasivos, melhorando significativamente a qualidade de vida dos pacientes. A interdisciplinaridade também é uma característica marcante na otologia, que frequentemente se associa a outras áreas da medicina, como a neurologia e a fonoaudiologia, para oferecer um cuidado integral e personalizado aos indivíduos que sofrem de doenças otológicas.`,
    imageUrl: ''
  },
  {
    urls: ['otoneurologia'],
    name: 'Otoneurologia',
    shortDescription: '',
    fullDescription: '\n' +
      'A otoneurologia é uma subespecialidade médica que se concentra no diagnóstico e tratamento das doenças que afetam o sistema vestibular, responsável pelo equilíbrio, e sua relação com o sistema auditivo e o sistema nervoso central. Esta área abrange uma ampla gama de condições, incluindo vertigem, tontura, distúrbios do equilíbrio, zumbido e outras disfunções vestibulares. Entre as patologias mais frequentemente tratadas pelos otoneurologistas estão a doença de Ménière, a neurite vestibular, a vertigem posicional paroxística benigna (VPPB) e a enxaqueca vestibular. A avaliação otoneurológica geralmente envolve exames clínicos detalhados, testes de audição, videonistagmografia, testes posturais e, em alguns casos, exames de imagem como a ressonância magnética.\n' +
      '\n' +
      'O tratamento em otoneurologia pode ser bastante variado, dependendo da causa subjacente do distúrbio. Pode incluir desde terapias farmacológicas e reabilitação vestibular até intervenções cirúrgicas em casos mais graves. A reabilitação vestibular, em particular, desempenha um papel crucial no tratamento de muitos pacientes, ajudando a restaurar o equilíbrio e reduzir os sintomas de tontura através de exercícios específicos e técnicas de adaptação. A interdisciplinaridade é fundamental na otoneurologia, pois muitas vezes envolve a colaboração com neurologistas, fisioterapeutas, audiologistas e outros profissionais de saúde para proporcionar um tratamento abrangente e eficaz. Com os avanços contínuos na pesquisa e na tecnologia médica, a otoneurologia continua a evoluir, oferecendo novas esperanças e soluções para pacientes com distúrbios complexos do equilíbrio e audição.',
    imageUrl: ''
  },
] as const;
