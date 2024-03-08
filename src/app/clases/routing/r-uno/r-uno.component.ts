import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-r-uno',
  templateUrl: './r-uno.component.html',
  styleUrls: ['./r-uno.component.css']
})
export class RUnoComponent implements OnInit {
  mensajeParametro: string = "";
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Sintaxis para llamar parametros angular v1
    // this.activatedRoute.paramMap.subscribe((params)=>{
    //   this.mensajeParametro = params.get('nombreParametro') ?? '';
    // });
    //Sintaxis para llamar parametros angualr v2
    this.mensajeParametro = this.activatedRoute.snapshot.paramMap.get('nombreParametro') ?? '';
  }

  cambiarPagina(){
    this.router.navigateByUrl('/clases/Routing/r-dos');
  }

}
