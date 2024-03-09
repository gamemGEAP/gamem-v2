import { ArchivedTreatments } from './archived-treatments';

export interface PatientDTO {
  id: number;
  name: string;
  phone: string;
  reason1: string;
  reason2: string;
  reason3: string;
  reason4: string;
  yearsOld: number;
  archivedTreatments: ArchivedTreatments[];
}
