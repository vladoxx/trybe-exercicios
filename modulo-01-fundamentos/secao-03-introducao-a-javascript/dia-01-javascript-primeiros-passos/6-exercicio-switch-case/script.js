let pessoaCandidata = "lineloy 700"

switch (pessoaCandidata) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case 'lista':
        console.log("Você está na nossa lista de espera");
        break;
    case 'reprovada':
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Operação não reconhecida");
}