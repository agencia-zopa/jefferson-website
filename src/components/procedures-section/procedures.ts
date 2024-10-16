import aplicacaoCorticoide from '@public/procedimentos/aplicação-corticoide.jpeg';
import estapedectomia from '@public/procedimentos/estapedectomia.jpg';
import implanteCoclear from '@public/procedimentos/implante-coclear.jpeg';
import manobrasDeReposicionamento from '@public/procedimentos/manobras-de-reposicionamento.jpeg';
import protesesAuditivas from '@public/procedimentos/proteses-auditivas.webp';
import timpanomastoidectomia from '@public/procedimentos/timpanomastoidectomia.jpeg';
import timpanoplastia from '@public/procedimentos/timpanoplastia.png';
import timpanotomia from '@public/procedimentos/timpanotomia.jpeg';

import { ProcedureItemProps } from '@/components/procedure-item/procedure-item.component';

export const procedures: ProcedureItemProps[] = [
  {
    title: 'Timpanotomia para tubo de ventilação',
    subtitle:
      'Procedimento cirúrgico no qual é feita uma incisão no tímpano para inserção de um tubo de ventilação, aliviando a pressão no ouvido médio e prevenindo infecções recorrentes.',
    imageSrc: timpanotomia
  },
  {
    title: 'Estapedectomia / estapedotomia',
    subtitle:
      'Cirurgia realizada para tratar a otosclerose, na qual o estribo (um dos ossículos do ouvido) é removido (estapedectomia) ou parcialmente remodelado (estapedotomia) para restaurar a audição.',
    imageSrc: estapedectomia
  },
  {
    title: 'Timpanoplastia',
    subtitle:
      'Procedimento cirúrgico para reparar perfurações no tímpano ou reconstruir estruturas danificadas do ouvido médio, geralmente utilizando enxertos de tecido próprio do paciente.',
    imageSrc: timpanoplastia
  },
  {
    title: 'Timpanomastoidectomia / Mastoidectomia',
    subtitle:
      'Cirurgia que envolve a remoção de parte do osso mastóide (mastoidectomia) e tecido infectado do ouvido médio e mastoide, frequentemente realizada para tratar infecções crônicas ou colesteatoma.',
    imageSrc: timpanomastoidectomia
  },
  {
    title: 'Implante Coclear',
    subtitle:
      'Procedimento cirúrgico no qual um dispositivo eletrônico é implantado no ouvido interno para estimular o nervo auditivo diretamente, fornecendo uma sensação auditiva artificial para pessoas com perda auditiva grave e profunda.',
    imageSrc: implanteCoclear
  },
  {
    title: 'Próteses auditivas ancoradas no osso (BAHA, etc)',
    subtitle:
      'Dispositivos auditivos implantáveis que conduzem o som através dos ossos do crânio, passando o ouvido externo e médio, sendo úteis para pessoas com perda auditiva condutiva ou mista.',
    imageSrc: protesesAuditivas
  },
  {
    title: 'Aplicação de corticoide intratimpânico',
    subtitle:
      'Procedimento no qual corticosteróides são administrados diretamente no ouvido médio através de uma injeção, frequentemente utilizado para tratar distúrbios inflamatórios ou neurosensorial do ouvido interno.',
    imageSrc: aplicacaoCorticoide
  },
  {
    title: 'Manobras de reposicionamento',
    subtitle:
      'Técnicas utilizadas para tratar a vertigem posicional benigna (VPPB), que envolvem movimentos específicos da cabeça para reposicionar os cristais de otólitos no ouvido interno, aliviando os sintomas de tontura e vertigem.',
    imageSrc: manobrasDeReposicionamento
  }
] as const;
