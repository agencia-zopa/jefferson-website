import { Review, ReviewProps } from '@/components/review/review.component';
import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './reviews-section.module.scss';

const reviews: ReviewProps[] = [
  {
    name: 'Cacá Prezzi',
    date: '3 anos atrás',
    body: 'Dr Jefferson é muito atencioso, esclarece todas duvidas e um ótimo profissional. Agendamento super rápido e a secretaria uma querida! Volto sempre que preciso.',
    backgroundColor: '#0085FF'
  },
  {
    name: 'Leticia Leite',
    date: '3 anos atrás',
    body: 'Dr. Jefferson é um profissional excelente. Além de ser super simpático, ele é atencioso e sempre muito didático na explicação. Nunca saio do consultório com dúvidas.',
    backgroundColor: '#FF6858'
  },
  {
    name: 'Marcos Fischer',
    date: '9 meses atrás',
    body: 'Qualidade técnica aliada à excelência no atendimento. Um baita profissional.',
    backgroundColor: '#CE44FF'
  },
  {
    name: 'Rebeca Barbeta',
    date: '1 ano atrás',
    body: 'Dr é sempre muito atencioso e delicado com ela. Indico seu trabalho de olhos fechados. Tem muito jeito com crianças. Parabéns.',
    backgroundColor: '#FFD338'
  },
  {
    name: 'Fernanda Queiroz',
    date: '2 anos atrás',
    body: 'Médico muito atencioso e paciente, explica muito bem o diagnóstico. Tratamento eficaz. Consultorio impecável.',
    backgroundColor: '#0085FF'
  },
  {
    name: 'Débora Santos',
    date: '9 meses atrás',
    body: 'Médico atencioso com crianças, conversa calmamente com os pais, orientando sobre o diagnóstico. Extremamente competente.',
    backgroundColor: '#FF6858'
  }
];

export function ReviewsSection() {
  return (
    <div className={styles.container} id={'avaliacoes'}>
      <SectionTitle>Algumas avaliações</SectionTitle>
      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
