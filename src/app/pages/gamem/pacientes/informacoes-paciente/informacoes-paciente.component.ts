import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-informacoes-paciente',
  templateUrl: './informacoes-paciente.component.html',
  styleUrls: ['./informacoes-paciente.component.scss'],
})
export class InformacoesPacienteComponent implements OnInit {
  formModel: FormGroup;
  tratamentosArquivados: string[] = [];

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formModel = this.formBuilder.group({
      name: [''],
      phone: [''],
      reason1: [''],
      reason2: [''],
      reason3: [''],
      reason4: [''],
      yearsOld: [null],
      archivedTreatments: [[]],
    });
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        concatMap((params) => {
          return this.pacienteService.findById(params['id']);
        })
      )
      .subscribe((paciente) => {
        this.formModel.get('id')?.setValue(paciente.id);
        this.formModel.get('name')?.setValue(paciente.name);
        this.formModel.get('phone')?.setValue(paciente.phone);
        this.formModel.get('reason1')?.setValue(paciente.reason1);
        this.formModel.get('reason2')?.setValue(paciente.reason2);
        this.formModel.get('reason3')?.setValue(paciente.reason3);
        this.formModel.get('reason4')?.setValue(paciente.reason4);
        this.formModel.get('yearsOld')?.setValue(paciente.yearsOld);
        this.formModel
          .get('archivedTreatments')
          ?.setValue(paciente.archivedTreatments);

        this.desabilitaEdicao();
      });
  }

  private desabilitaEdicao(): void {
    this.formModel.get('name')?.disable();
    this.formModel.get('phone')?.disable();
    this.formModel.get('reasonList')?.disable();
    this.formModel.get('yearsOld')?.disable();
    this.formModel.get('reason1')?.disable();
    this.formModel.get('reason2')?.disable();
    this.formModel.get('reason3')?.disable();
    this.formModel.get('reason4')?.disable();
  }
}
