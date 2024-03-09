import { FormularioService } from './../../../../services/formulario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastCustom } from 'src/app/global/toast-custom';
import { TrabalhadorService } from 'src/app/services/trabalhador.service';
import { TratamentoService } from 'src/app/services/tratamento.service';

interface Reason {
  name: string;
  value: string;
}

@Component({
  selector: 'app-criar-atendimento',
  templateUrl: './criar-atendimento.component.html',
  styleUrls: ['./criar-atendimento.component.scss'],
})
export class CriarAtendimentoComponent implements OnInit {
  formModel: FormGroup;
  submetido: boolean = false;
  desabilitaBotao: boolean = false;

  pacientesLista: Array<{ name: string }> = [];
  tratamentosLista: Array<string> = ['M1', 'M2'];
  atendentesLista: Array<string> = ['Sem atendimento'];
  motivosLista: Array<Reason> = [
    { name: 'reason1', value: 'Motivo 1 *' },
    { name: 'reason2', value: 'Motivo 2' },
    { name: 'reason3', value: 'Motivo 3' },
    { name: 'reason4', value: 'Motivo 4' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private toast: ToastCustom,
    private trabalhadorService: TrabalhadorService,
    private tratamentoService: TratamentoService
  ) {
    this.formModel = this.formBuilder.group({
      attendantName: ['Sem atendimento', Validators.required],
      firstTime: [false],
      patientName: ['', Validators.required],
      patientPhone: [''],
      patientYearsOld: [''],
      reason1: ['', Validators.required],
      reason2: [''],
      reason3: [''],
      reason4: [''],
      symptoms: ['', Validators.required],
      treatmentType: ['M1', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscaNomesAtendentes();
    this.buscaNomesPacientes();
    for (let i = 1; i <= 4; i++) {
      this.formModel.get(`reason${i}`)?.disable();
    }
  }

  submit() {
    this.submetido = true;
    if (this.formModel.valid) {
      this.desabilitaBotao = true;
      const object = {
        attendantName: this.formModel.value.attendantName,
        firstTime: this.formModel.value.firstTime,
        patientName: this.formModel.value.patientName,
        reason1: this.formModel.value.reason1,
        reason2: this.formModel.value.reason2,
        reason3: this.formModel.value.reason3,
        reason4: this.formModel.value.reason4,
        symptoms: this.formModel.value.symptoms,
        treatmentType: this.formModel.value.treatmentType,
      };

      this.formularioService
        .criarAtendimento(
          object,
          this.formModel.value.patientPhone,
          this.formModel.value.patientYearsOld
        )
        .subscribe(() => {
          this.desabilitaBotao = false;
          this.resetForm();
          this.toast.sucess('Formulário', 'Atendimento realizado com sucesso');
        });
    }
  }

  toggleFirstTime() {
    const firstTime: boolean = this.formModel.get('firstTime')?.value;
    this.formModel.get('patientName')?.reset();
    if (firstTime) return this.setValidators();
    this.clearValidators();
  }

  clearValidators() {
    this.formModel.get('patientPhone')?.clearValidators();
    this.formModel.get('patientYearsOld')?.clearValidators();
    for (let i = 1; i <= 4; i++) {
      this.formModel.get(`reason${i}`)?.disable();
    }
  }

  setValidators() {
    this.formModel.get('patientPhone')?.setValidators(Validators.required);
    this.formModel.get('patientYearsOld')?.setValidators(Validators.required);
    for (let i = 1; i <= 4; i++) {
      this.formModel.get(`reason${i}`)?.enable();
    }
  }

  buscaNomesPacientes() {
    this.tratamentoService.buscaNomesPacientes().subscribe((response) => {
      this.pacientesLista = response.map((name) => {
        const object = {
          name: name,
        };
        return object;
      });
    });
  }

  buscaNomesAtendentes() {
    this.trabalhadorService.atendentes().subscribe((response) => {
      this.atendentesLista = this.atendentesLista.concat(response);
    });
  }

  buscaMotivosTratamento() {
    this.resetMotivos();
    if (this.formModel.get('patientName')?.value) {
      this.tratamentoService
        .motivos(this.formModel.get('patientName')?.value)
        .subscribe((response) => {
          response.map((motivo, index) => {
            this.formModel.get(`reason${index + 1}`)?.setValue(motivo);
          });
          return response;
        });
    }
  }

  resetMotivos() {
    for (let i = 1; i <= 4; i++) {
      this.formModel.get(`reason${i}`)?.reset();
    }
    this.desabilitaBotao = false;
  }

  resetForm() {
    this.formModel.get('attendantName')?.setValue('Sem atendimento');
    this.formModel.get('firstTime')?.setValue(false);
    this.formModel.get('patientName')?.reset();
    this.formModel.get('patientPhone')?.reset();
    this.formModel.get('patientYearsOld')?.reset();
    this.formModel.get('reason1')?.reset();
    this.formModel.get('reason2')?.reset();
    this.formModel.get('reason3')?.reset();
    this.formModel.get('reason4')?.reset();
    this.formModel.get('symptoms')?.reset();
    this.formModel.get('treatmentType')?.setValue('M1');

    this.submetido = false;
  }
}
