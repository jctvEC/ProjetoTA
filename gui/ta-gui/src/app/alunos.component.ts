import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[];
   cpfduplicado: boolean = false;
   githubduplicado: boolean = false;
   cpfNaoCadastrado: boolean  =false;

   criarAluno(a: Aluno): void {
     this.alunoService.criar(a)
        .then(ab => {
           if (ab) {
              this.alunos.push(ab);
              this.aluno = new Aluno();
           } else {
              this.cpfduplicado = true;
             this.githubduplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }

   onMove(): void {
      this.cpfduplicado = false;
      this.githubduplicado = false;
      this.cpfNaoCadastrado = false;
     
   }

   ngOnInit(): void {
     this.alunoService.getAlunos()
         .then(as => this.alunos = as)
         .catch(erro => alert(erro));
   }


      //removerAluno(a: Aluno): void { By Adriano
      // this.alunoService.remover(a)
      // .then(ab => {
      //    if (ab) {
      //       var result: Aluno = this.alunos.find(k => k.cpf == a.cpf);
      //       this.alunos.splice(this.alunos.indexOf(result), 1);
      //    }
      // })
      // .catch(erro => alert(erro));
      //}

      removerAluno(aluno : Aluno):void{
         //============aqui by Zegabr
         this.alunoService.remover(aluno)
         .then(ab => {
                  if (ab) {
                     this.alunos = this.alunos.filter(b => b.cpf != ab.cpf);
                     this.aluno = new Aluno();
                  }
               })
         .catch(erro => alert(erro));
         //=====================
      }

}
