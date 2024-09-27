const si = require('systeminformation');

//si.networkInterfaces('default').then(data => console.log(data));

//Criando um objeto para receber as informações.

// valueObject = {
//     cpu: '*',
//     osInfo: 'platform, release',
//     system: 'model, manifacturer'
// }
// si.get(valueObject).then(data => console.log(data));

//Chamando as informações "assincrona"

async function getSystemInfo(){
    try {
    const cpu = await si.cpu();
    const mem = await si.mem();
    const osInfo = await si.osInfo();
    const network = await si.networkInterfaces();
    
    console.log('Informações da CPU:', cpu);
    console.log('Memória:', mem);
    console.log('Informações do Sistema Operacional:', osInfo);
    console.log('Interfaces de Rede:', network);
    } catch (error) {
        console.error(error);
    }
}
getSystemInfo();