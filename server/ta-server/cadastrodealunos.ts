import { Aluno } from '../../gui/ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf) && this.githubNaoCadastrado(aluno.github)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
     
  }

  githubNaoCadastrado(github: string): boolean { //testando se vai fazer verificacao do github
    return !this.alunos.find(a => a.github == github);
  }


  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  remover(aluno:Aluno): Aluno[]{
    //======================aqui by zegabr
    this.alunos = this.alunos.filter(a => a.cpf != aluno.cpf);
    return this.alunos;
    //==========================
  }
}
