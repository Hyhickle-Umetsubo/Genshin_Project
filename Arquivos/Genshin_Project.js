var Pyro = 0;
var Anemo = 0;
var Hidro = 0;
var Electro = 0;
var Cryo = 0;
var Geo = 0;

function builds_passada(){
    document.querySelector('#builds_button').style.color = 'black';
}

function armas_passada(){
    document.querySelector('#armas_button').style.color = 'black';
}
function artefatos_passada(){
    document.querySelector('#artefatos_button').style.color = 'black';
}

function builds_saida(){
    document.querySelector('#builds_button').style.color = '#a6a6a6';
}

function armas_saida(){
    document.querySelector('#armas_button').style.color = '#a6a6a6';
}
function artefatos_saida(){
    document.querySelector('#artefatos_button').style.color = '#a6a6a6';
}


function Pyro_Click(){
    document.querySelector('#Pyro_On').style.display = 'block';
    document.querySelector('#Anemo_On').style.display = 'none';
    document.querySelector('#Hidro_On').style.display = 'none';
    document.querySelector('#Electro_On').style.display = 'none';
    document.querySelector('#Cryo_On').style.display = 'none';
    document.querySelector('#Geo_On').style.display = 'none';
    Pyro = 1;
    Anemo = 0;
    Hidro = 0;
    Electro = 0;
    Cryo = 0;
    Geo = 0;

}
function Anemo_Click(){
    document.querySelector('#Pyro_On').style.display = 'none';
    document.querySelector('#Anemo_On').style.display = 'block';
    document.querySelector('#Hidro_On').style.display = 'none';
    document.querySelector('#Electro_On').style.display = 'none';
    document.querySelector('#Cryo_On').style.display = 'none';
    document.querySelector('#Geo_On').style.display = 'none';
    Pyro = 0;
    Anemo = 1;
    Hidro = 0;
    Electro = 0;
    Cryo = 0;
    Geo = 0;
    
}
function Hidro_Click(){
    document.querySelector('#Pyro_On').style.display = 'none';
    document.querySelector('#Anemo_On').style.display = 'none';
    document.querySelector('#Hidro_On').style.display = 'block';
    document.querySelector('#Electro_On').style.display = 'none';
    document.querySelector('#Cryo_On').style.display = 'none';
    document.querySelector('#Geo_On').style.display = 'none';
    Pyro = 0;
    Anemo = 0;
    Hidro = 1;
    Electro = 0;
    Cryo = 0;
    Geo = 0;
}
function Electro_Click(){
    document.querySelector('#Pyro_On').style.display = 'none';
    document.querySelector('#Anemo_On').style.display = 'none';
    document.querySelector('#Hidro_On').style.display = 'none';
    document.querySelector('#Electro_On').style.display = 'block';
    document.querySelector('#Cryo_On').style.display = 'none';
    document.querySelector('#Geo_On').style.display = 'none';
    Pyro = 0;
    Anemo = 0;
    Hidro = 0;
    Electro = 1;
    Cryo = 0;
    Geo = 0;
}
function Cryo_Click(){
    document.querySelector('#Pyro_On').style.display = 'none';
    document.querySelector('#Anemo_On').style.display = 'none';
    document.querySelector('#Hidro_On').style.display = 'none';
    document.querySelector('#Electro_On').style.display = 'none';
    document.querySelector('#Cryo_On').style.display = 'block';
    document.querySelector('#Geo_On').style.display = 'none';
    Pyro = 0;
    Anemo = 0;
    Hidro = 0;
    Electro = 0;
    Cryo = 1;
    Geo = 0;
}
function Geo_Click(){
    document.querySelector('#Pyro_On').style.display = 'none';
    document.querySelector('#Anemo_On').style.display = 'none';
    document.querySelector('#Hidro_On').style.display = 'none';
    document.querySelector('#Electro_On').style.display = 'none';
    document.querySelector('#Cryo_On').style.display = 'none';
    document.querySelector('#Geo_On').style.display = 'block';
    Pyro = 0;
    Anemo = 0;
    Hidro = 0;
    Electro = 0;
    Cryo = 0;
    Geo = 1;
}

function Pyro_Passada() {
    document.querySelector('#Pyro_On').style.display = 'block';
}
function Anemo_Passada() {
    document.querySelector('#Anemo_On').style.display = 'block';
}
function Hidro_Passada() {
    document.querySelector('#Hidro_On').style.display = 'block';
}
function Electro_Passada() {
    document.querySelector('#Electro_On').style.display = 'block';
}
function Cryo_Passada() {
    document.querySelector('#Cryo_On').style.display = 'block';
}
function Geo_Passada() {
    document.querySelector('#Geo_On').style.display = 'block';
}


function Pyro_Saida() {
    if(Pyro==0)
    document.querySelector('#Pyro_On').style.display = 'none';
}
function Anemo_Saida() {
    if(Anemo==0)
    document.querySelector('#Anemo_On').style.display = 'none';
}
function Hidro_Saida() {
    if(Hidro==0)
    document.querySelector('#Hidro_On').style.display = 'none';
}
function Electro_Saida() {
    if(Electro==0)
    document.querySelector('#Electro_On').style.display = 'none';
}
function Cryo_Saida() {
    if(Cryo==0)
    document.querySelector('#Cryo_On').style.display = 'none';
}
function Geo_Saida() {
    if(Geo==0)
    document.querySelector('#Geo_On').style.display = 'none';
}


