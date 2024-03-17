export interface FormRequest {
  attendantName: string;
  firstTime: boolean;
  patientName: string;
  reason1: string;
  reason2: string;
  reason3: string;
  reason4: string;
  symptoms: string;
  treatmentType: 'M1' | 'M2';
}
