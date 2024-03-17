import { Worker } from '../worker';

export class WorkerListDTO {
  id: number;
  name: string;
  phone: string;
  email: string;
  function: string;

  constructor(worker: Worker) {
    this.id = worker.id;
    this.name = worker.name;
    this.phone = worker.phone;
    this.email = worker.email;
    this.function = worker.function.map((func) => func.name).join(' ');
  }
}
