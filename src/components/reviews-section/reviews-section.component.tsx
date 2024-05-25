import { ReviewCard } from '../review-card/review-card.component';
import styles from './reviews-section.module.scss';

export function ReviewsSection() {
  return (
    <div className={styles.container} id={'avaliacoes'}>
      <span className={styles.title}>Algumas avaliações</span>
      <div className={styles.cardsContainer}>
        <ReviewCard
          ReviewerName={'Cacá Prezzi'}
          ReviewDate={'3 anos atrás'}
          ReviewText={
            'Dr Jefferson é muito atencioso, esclarece todas duvidas e um ótimo profissional. Agendamento super rápido e a secretaria uma querida! Volto sempre que preciso.'
          }
          ProfilePicColor={'#0085FF'}
          FirstLetter={'C'}
        />
        <ReviewCard
          ReviewerName={'Leticia Leite'}
          ReviewDate={'3 anos atrás'}
          ReviewText={
            'Dr. Jefferson é um profissional excelente. Além de ser super simpático, ele é atencioso e sempre muito didático na explicação. Nunca saio do consultório com dúvidas.'
          }
          ProfilePicColor={'#FF6858'}
          FirstLetter={'L'}
        />
        <ReviewCard
          ReviewerName={'Marcos Fischer'}
          ReviewDate={'9 meses atrás'}
          ReviewText={
            'Qualidade técnica aliada à excelência no atendimento. Um baita profissional.'
          }
          ProfilePicColor={'#CE44FF'}
          FirstLetter={'M'}
        />
        <ReviewCard
          ReviewerName={'Rebeca Barbeta'}
          ReviewDate={'1 ano atrás'}
          ReviewText={
            'Dr é sempre muito atencioso e delicado com ela. Indico seu trabalho de olhos fechados. Tem muito jeito com crianças. Parabéns.'
          }
          ProfilePicColor={'#FFD338'}
          FirstLetter={'R'}
        />
        <ReviewCard
          ReviewerName={'Fernanda Queiroz'}
          ReviewDate={'2 anos atrás'}
          ReviewText={
            'Médico muito atencioso e paciente, explica muito bem o diagnóstico. Tratamento eficaz. Consultorio impecável.'
          }
          ProfilePicColor={'#0085FF'}
          FirstLetter={'F'}
        />
        <ReviewCard
          ReviewerName={'Débora Santos'}
          ReviewDate={'9 meses atrás'}
          ReviewText={
            'Médico atencioso com crianças, conversa calmamente com os pais, orientando sobre o diagnóstico. Extremamente competente.'
          }
          ProfilePicColor={'#FF6858'}
          FirstLetter={'D'}
        />
      </div>
    </div>
  );
}
