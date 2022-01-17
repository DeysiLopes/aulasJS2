// function getAdmins (map){
//     let admins = [];
//     for([key, value] of map ){
//         if(value === 'Admin'){
//             admins.push(key);
//         }
//     }
//     return admins;
// }

// const usuarios = new Map();

// usuarios.set('Luisa', 'Admin');
// usuarios.set('Lais', 'Admin');
// usuarios.set('Larissa', 'User');
// usuarios.set('Laisa', 'Admin');

// console.log(getAdmins(usuarios));

// const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

// function valoresUnicos(arr){
//     const mySet = new Set(arr);

//     return [...mySet];
// }

// console.log(valoresUnicos(myArray));

function validaArray (arr, num){
    try {
        
            if(!arr && !num) throw new ReferenceError('Envie os parâmentros corretamente')
        
            if(typeof arr !== 'object') throw new TypeError('O array tem que ser do tipo object')
        
            if(typeof num !== 'number') throw new TypeError('O array tem que ser do tipo object')
        
        if(arr.length !== num) throw new RangeError('Tamanho invalido')  

            return arr;
    } catch (e) {
        if(e instanceof TypeError){
            console.log('Este é um typeError')
            console.log(e.message)
        } else if(e instanceof ReferenceError){
            console.log('Este é um refenrenceError')
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log('Este é um RangeError')
            console.log(e.message)
        } else{
            console.log('Ocorreu um erro não esperado: ' + e)
        }
    }
}

console.log(validaArray([3,5,6,6,4],5))
