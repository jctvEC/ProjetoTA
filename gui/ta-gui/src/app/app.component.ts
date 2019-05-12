import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[] = [];
   cpfduplicado: boolean = false;
   githubduplicado: boolean = false;//<!--talvez seja indiferente -->

   criarAluno(a: Aluno): void {
     if (this.alunoService.criar(a)) {
       this.alunos.push(a);
       this.aluno = new Aluno();
     } else {
       this.cpfduplicado = true;
       this.githubduplicado = true; //<!--talvez seja indiferente -->

     }
   }

   onMove(): void {
      this.cpfduplicado = false;
      this.githubduplicado = false;//<!--talvez seja indiferente -->
   }

}
