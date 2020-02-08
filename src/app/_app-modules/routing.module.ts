import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: 'src/app/_components/home/home.module#HomeModule', data: { depth: 1 } },
    { path: 'univafu', loadChildren: 'src/app/_components/univafu/univafu.module#UnivafuModule', data: { depth: 2 } },
    { path: 'oferta-educativa/licenciaturas', loadChildren: 'src/app/_components/_oferta-educativa/oferta-headers/oferta-headers.module#OfertaHeadersModule', data: { depth: 3 } },
    { path: 'oferta-educativa/posgrados', loadChildren: 'src/app/_components/_oferta-educativa/oferta-headers/posgrados.module#PosgradosModule', data: { depth: 4 } },
    { path: 'oferta-educativa/educacion-continua', loadChildren: 'src/app/_components/_oferta-educativa/educacion-continua/educacion-continua.module#EducacionContinuaModule', data: { depth: 5 } },
    { path: 'red-univafu/fundacion', loadChildren: 'src/app/_components/_red-univafu/fundacion/fundacion.module#FundacionModule', data: { depth: 6 } },
    { path: 'red-univafu/iiu', loadChildren: 'src/app/_components/_red-univafu/iiu/iiu.module#IiuModule', data: { depth: 7 } },
    { path: 'red-univafu/innovagain', loadChildren: 'src/app/_components/_red-univafu/innovagain/innovagain.module#InnovagainModule', data: { depth: 8 } },
    { path: 'red-univafu/iridh', loadChildren: 'src/app/_components/_red-univafu/iridh/iridh.module#IridhModule', data: { depth: 9 } },
    { path: 'contacto', loadChildren: 'src/app/_components/contacto/contacto.module#ContactoModule', data: { depth: 10 } },
    { path: 'aviso-legal', loadChildren: 'src/app/_components/aviso-legal/aviso-legal.module#AvisoLegalModule', data: { depth: 11 } },
    { path: 'noticias', loadChildren: 'src/app/_components/_news/news-list/news-list.module#NewsListModule', data: { depth: 12 } },
    { path: 'noticias/:slug', loadChildren: 'src/app/_components/_news/news-detail/news-detail.module#NewsDetailModule', data: { depth: 13 } },
    { path: '**', loadChildren: 'src/app/_components/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }