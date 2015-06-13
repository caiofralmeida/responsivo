Animacao = {

    cores: ["#ffd400", "#002A4C", "#AF1B16"],
    contador: 1,
    limite: 60,
    corDefinida: null,

    init: function() {

        Animacao.definirPosicaoShadow();

        $(window).resize(function() {
            Animacao.definirPosicaoShadow();
        });

        Animacao.definirCor();

        $("#animacao").addClass("luzes");
    },

    definirPosicaoShadow: function(e) {
        var leftTo = ($(window).width()/2) - 126;
        $("#animacao").css("left", leftTo);
    },

    animar: function() {
        var shadowTemplate = "0px 0px {sombra}px {cor}";
        
        Animacao.init();

        var intervalo = setInterval(function() {

            var shadow = shadowTemplate.replace("{sombra}", Animacao.contador);
            shadow = shadow.replace("{cor}", Animacao.corDefinida);

            $("#animacao").css("box-shadow", shadow);

            Animacao.contador++;
            
            if (Animacao.deveInicializar()) {
                Animacao.contador = 1;
                Animacao.definirCor();
                $("#animacao").show();
            }

        },50);
    },

    deveInicializar: function () {
        return (Animacao.contador == Animacao.limite);
    },

    definirCor: function () {
        var indiceAtual = Animacao.cores.indexOf(Animacao.corDefinida);
        
        var indiceProximaCor = indiceAtual+1;
        Animacao.corDefinida = Animacao.cores[indiceProximaCor];

        if (indiceAtual === -1 || Animacao.corDefinida == undefined) {
            Animacao.corDefinida = Animacao.cores[0];
            return;
        }
    }
}

$(document).ready(function(){
    Animacao.animar();
});