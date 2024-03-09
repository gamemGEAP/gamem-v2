import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { PageTemplate } from 'src/app/interfaces/page-template';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  selector: 'table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss'],
  imports: [
    TableModule,
    PaginatorModule,
    CommonModule,
    InputTextModule,
    TooltipModule,
  ],
})
export class TableCustomComponent {
  @Output() onPageChange = new EventEmitter();
  @Output() onExcluir = new EventEmitter();
  @Output() onBusca = new EventEmitter();
  @Output() onEdicao = new EventEmitter();

  @Input() colunas: string[] = [];
  @Input() dados: string[] = [];
  protected elementos: any[] = [];
  totalElements: number = 0;
  pageSize: number = 0;
  nomePaciente: string = '';

  public setElementos(template: PageTemplate) {
    this.elementos = template.content;
    this.totalElements = template.totalElements;
    this.pageSize = template.pageSize;
  }

  pageChange(event: any) {
    this.onPageChange.emit(event.page);
  }

  excluir(id: number) {
    this.onExcluir.emit(id);
  }

  busca() {
    this.onBusca.emit(this.nomePaciente);
  }

  edicao(id: number) {
    this.onEdicao.emit(id);
  }
}
