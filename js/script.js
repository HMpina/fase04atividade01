const textoCompleto = '         <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>';


// listando as cidade
const listaCidades = textoCompleto.split('*');
const cidades = [];
let indexCidades = 1;
do{
    cidades.push(listaCidades[indexCidades]);
    indexCidades+=2
}
while(indexCidades < listaCidades.length)
console.log('As cidades avaliadas por Gulliver em seu antigo blog são: ',cidades[0],', ',cidades[1],' e ',cidades[2]);

// listando todos os roteiros
const listaRoteiros = textoCompleto.split('#');
let indexRoteiros = 1;
const roteiros = [];
do{
    roteiros.push(listaRoteiros[indexRoteiros]);
    indexRoteiros++
}
while(indexRoteiros < listaRoteiros.length)

 // listando roteiros A de cada cidade
const roteirosA = [];
let indexListaRoteiros = 0;
do{
    roteirosA.push(roteiros[indexListaRoteiros]);
    indexListaRoteiros+=3
}
while(indexListaRoteiros < roteiros.length)
console.log('Na cidade de ',cidades[0],' temos:',roteirosA[0],'. Na cidade de ',cidades[1],' temos:',roteirosA[1],'. E na cidade de',cidades[2],' temos:',roteirosA[2]);

// Quantos locais são citados no roteiro A de cada cidade.
let indexLocais =0;
const listaLocaisCidade1 = roteirosA[0].split('<br>');
const listaLocaisCidade2 = roteirosA[1].split('<br>');
const listaLocaisCidade3 = roteirosA[2].split('<br>');
const locaisRoteirosAcidade1 = listaLocaisCidade1[1].split(';');
const locaisRoteirosAcidade2 = listaLocaisCidade2[1].split(';');
const locaisRoteirosAcidade3 = listaLocaisCidade3[1].split(';');

console.log('No roteiro A da cidade',cidades[0], 'temos',locaisRoteirosAcidade1.length, 'locais. No roteiro A da cidade',cidades[1], 'temos',locaisRoteirosAcidade2.length, 'locais. E no roteiro A da cidade',cidades[2], 'temos',locaisRoteirosAcidade3.length, 'locais');

// alert('No roteiro A da cidade '+cidades[0]+' temos '+locaisRoteirosAcidade1.length+' locais. No roteiro A da cidade '+cidades[1]+ ' temos '+locaisRoteirosAcidade2.length+' locais. E no roteiro A da cidade '+cidades[2]+' temos '+locaisRoteirosAcidade3.length+' locais.');

// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo. (‘Região: ‘,‘Centro’)
// encontrando a cidade solicitada
let cidadeSolicitada = 'São Paulo';
let localSolicitado = 'Centro';
let resultado2 = '';
let resultado = '';
let indexTeste = 0;
if (cidades.indexOf(cidadeSolicitada) == -1){
    console.log('Cidade ',cidadeSolicitada,' não faz parte das cidades avaliadas por Gulliver em seu antigo blog');
}
else{
do{
    resultado = cidades[indexTeste].includes(cidadeSolicitada);
    resultado2 = indexTeste;
    indexTeste++
}
while(resultado != true)

// separando os elementos da cidade solicitada
const centro = listaCidades[resultado2+2];
const centro2 = centro.split('<br>');
// encontrando o indez para listar as atrações do local desejado
let resultado4 = '';
let resultado3 = '';
let indexTeste2 = 0;
do{
    resultado3 = centro2[indexTeste2].includes(localSolicitado);
    resultado4 = indexTeste2;
    indexTeste2++
}
while(resultado3 != true)
console.log('Os pontos turísticos localizados no bairro ',localSolicitado,' da cidade de ',cidadeSolicitada,' são: ',centro2[resultado4+1]);
}

// O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
cidadeSolicitada = 'Los Angeles';
localSolicitado = 'Downtown';
resultado2 = '';
resultado = '';
indexTeste = 0;
if (cidades.indexOf(cidadeSolicitada) == -1){
    console.log('Cidade ',cidadeSolicitada,' não faz parte das cidades avaliadas por Gulliver em seu antigo blog');
}
else{

    do{
        resultado = cidades[indexTeste].includes(cidadeSolicitada);
        resultado2 = indexTeste;
        indexTeste++
    }
    while(resultado != true)
    console.log(resultado2);
    
    // separando os elementos da cidade solicitada
    centro = listaCidades[resultado2+2];
    console.log(centro);
    centro2 = centro.split('<br>');
    console.log(centro2);
    // encontrando o indez para listar as atrações do local desejado
    resultado4 = '';
    resultado3 = '';
    indexTeste2 = 0;
    do{
        resultado3 = centro2[indexTeste2].includes(localSolicitado);
        resultado4 = indexTeste2;
        indexTeste2++
    }
    while(resultado3 != true)
    console.log(resultado4);
    console.log('Os pontos turísticos localizados no bairro ',localSolicitado,' da cidade de ',cidadeSolicitada,' são: ',centro2[resultado4+1]);
}   