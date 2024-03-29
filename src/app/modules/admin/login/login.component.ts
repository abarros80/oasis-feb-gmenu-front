import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../my-core/services/login.service';
import { Login } from '../../../my-shared/models/login';
import { UserCrudService } from '../../admin/entidades/user/services/user-crud.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //VARIAVEIS para controlo
  submitted = false;
  erroMsg?: string;
  haErroMsg: boolean = false;
  requestCompleto = false;
  accao: string = "Criar";

  login = new Login();

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private userCrudService: UserCrudService
  ) { }

  ngOnInit(): void {
  }

  //CRIAR FORMULARIO
  formLogin: FormGroup = this.formBuilder.group({
    usernameOrEmail: [this.login.usernameOrEmail, Validators.required],
    password: [this.login.password, Validators.required]
  });

  get getUsernameOrEmail(): any {
    return this.formLogin.get('usernameOrEmail');
  }

  get getPassword(): any {
    return this.formLogin.get('password');
  }


  //ONSUBMIT
  onSubmit() {

    this.submitted = true;

    console.log("form-login: ",this.formLogin.value);

    if(this.formLogin.valid){

        this.loginService.login(this.crearObjecto()).subscribe(
          success => {

            this.userCrudService.findByUsername(this.formLogin.value.usernameOrEmail).subscribe(
              success => {

                //alert("Sucesso");
                //console.log('sucesso')
                this.haErroMsg = false;
                this.erroMsg = "";
                this.loginService.registerSuccessfulLogin(success.id, this.formLogin.value.usernameOrEmail, this.formLogin.value.password);
                this.router.navigate(['/oa-admin/gestao']);

              },
              error => {

                this.haErroMsg = true;
                this.erroMsg ="Não foi possivel fazer login";
                //alert("Erro ao inserir Tipo Conjunto \n"+error);
                console.error('error login1')

              },

              () => console.log('userCrudService - request completo')
            );

          },
          error => {

            this.haErroMsg = true;
            this.erroMsg ="Não foi possivel fazer login";
            //alert("Erro ao inserir Tipo Conjunto \n"+error);
            console.error('error login2')

          },

          () => console.log('loginService - request completo')
        );

        // Usar o método reset para limpar os controles na tela
        //this.form.reset(new Login());

    } else {
      console.log("formulario invalido");
      this.haErroMsg = true;
      this.erroMsg = "Preencher campos corretamente";
    }

   }


   //PREPARAR O OBJECTO PARA SER ENVIADO
  crearObjecto(){
    //let API_URL = environment.API;
    return {
      "usernameOrEmail": this.formLogin.value.usernameOrEmail,
      "password": this.formLogin.value.password
    }
  }

}
