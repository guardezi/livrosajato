import { DocumentReference } from '@angular/fire/firestore';

export interface Caf {
    driver: DocumentReference;
    id: string;
    route: DocumentReference;
}
