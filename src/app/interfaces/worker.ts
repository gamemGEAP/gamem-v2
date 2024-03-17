export interface Worker {
  id: number;
  name: string;
  phone: string;
  email: string;
  function: Function[];
}

export interface Function {
  id: string;
  name: string;
}
