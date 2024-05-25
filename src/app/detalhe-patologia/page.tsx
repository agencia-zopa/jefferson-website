import { PresentationSection } from '@/components/introduction-section/introduction-section.component';
import { PageTitle } from '@/components/page-title/page-title.component';
import { ScheduleAppointmentSection } from '@/components/schedule-appointment-section/schedule-appointment-section.component';

import styles from './page.module.scss';

export default function PathologyDetailPage() {
  return (
    <div className={styles.page}>
      <PageTitle>Aplicação de corticoide intratimpânico</PageTitle>
      <div className={styles.content}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu ipsum porttitor dignissim
          faucibus tempus erat consequat eget. Ut elementum tincidunt pharetra
          placerat elit dictum. Egestas volutpat netus tortor duis et erat
          tellus. A vestibulum ac orci placerat turpis ultrices. Sed lacus
          scelerisque ut diam magna. Ut tincidunt molestie vitae sit varius
          dignissim risus. Libero eu lacus a non eros. Ornare libero odio
          scelerisque nisi faucibus urna blandit nibh amet. Ultrices velit lorem
          facilisis cras mi convallis rutrum. Ac elementum morbi sit convallis
          eu ut lobortis eros. Nulla ornare ac et eget facilisis molestie.
          Commodo sit mi vel urna curabitur adipiscing. Sed sed magna donec nisi
          faucibus feugiat. Tellus viverra tellus non in pellentesque lacus.
          Quam fames mauris varius neque morbi ut vel. Hendrerit eget sit massa
          pulvinar fames. Ullamcorper aliquet pretium nulla semper nunc cras.
          Imperdiet duis posuere pharetra quam duis morbi integer viverra. Morbi
          eu scelerisque feugiat nec mauris facilisis massa egestas. Eget lectus
          rhoncus tortor elit metus. In pellentesque nulla in odio. Pellentesque
          laoreet quis adipiscing gravida sit. Sollicitudin lorem tincidunt
          netus vulputate ac tellus lobortis aliquam sit. Risus eget
          sollicitudin pharetra libero nisl eget sollicitudin. Suspendisse est
          tortor et lacus.
        </p>

        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu ipsum porttitor dignissim
          faucibus tempus erat consequat eget. Ut elementum tincidunt pharetra
          placerat elit dictum. Egestas volutpat netus tortor duis et erat
          tellus. A vestibulum ac orci placerat turpis ultrices. Sed lacus
          scelerisque ut diam magna. Ut tincidunt molestie vitae sit varius
          dignissim risus. Libero eu lacus a non eros. Ornare libero odio
          scelerisque nisi faucibus urna blandit nibh amet. Ultrices velit lorem
          facilisis cras mi convallis rutrum. Ac elementum morbi sit convallis
          eu ut lobortis eros. Nulla ornare ac et eget facilisis molestie.
          Commodo sit mi vel urna curabitur adipiscing. Sed sed magna donec nisi
          faucibus feugiat. Tellus viverra tellus non in pellentesque lacus.
          Quam fames mauris varius neque morbi ut vel. Hendrerit eget sit massa
          pulvinar fames. Ullamcorper aliquet pretium nulla semper nunc cras.
          Imperdiet duis posuere pharetra quam duis morbi integer viverra. Morbi
          eu scelerisque feugiat nec mauris facilisis massa egestas. Eget lectus
          rhoncus tortor elit metus. In pellentesque nulla in odio. Pellentesque
          laoreet quis adipiscing gravida sit. Sollicitudin lorem tincidunt
          netus vulputate ac tellus lobortis aliquam sit. Risus eget
          sollicitudin pharetra libero nisl eget sollicitudin. Suspendisse est
          tortor et lacus.
        </p>
      </div>
      <ScheduleAppointmentSection />
      <PresentationSection />
    </div>
  );
}
