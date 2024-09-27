// Pegando informações do sistema utlilizando o modulo 'os'

const os = require('os');

//Informações
console.log('Arquitetura: ', os.arch());
console.log('Plataforma: ', os.platform());
console.log('Tipo: ', os.type());
console.log('Tempo de atividade (segundos): ', os.uptime());
console.log('Total de memória (em bytes):', os.totalmem());
console.log('Memória livre (em bytes):', os.freemem());
console.log('Informações da CPU:', os.cpus());
console.log('Informações de rede:', os.networkInterfaces());

console.log('->', os.constants);
console.log('->', os.devNull);
console.log('->',os.endianness());
console.log('Hostname: ', os.hostname());
console.log('Systema Operacional: ', os.release());
console.log('Systema Operacional: ', os.userInfo());