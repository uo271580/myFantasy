import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <IonPage>
      <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              {ids.map((id) => (
                <IonCol size="3" size-md="3" size-sm="6" key={id}>
                  <ExploreContainer name={`Tab 1 page ${id}`} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
