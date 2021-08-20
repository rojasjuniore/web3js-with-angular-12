// https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#id50
// https://web3js.readthedocs.io/en/v1.4.0/glossary.html

export const token_address_contract = '0xC73274190982e0A367Ba9543d74a54FbCD6F681a';
export const token_address_creator = '0x4C54d42aB8a14E0142df679a075E4C4dE767d8D0';
export const token_abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "type": "function",
        "name": "comprarTokens",
        "constant": false,
        "payable": false,
        "stateMutability": "payable",
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "_numTokens",
            "type": "uint256"
        }],
        "outputs": [{
            "name": "balanceOf",
            "type": "uint256"
        }]
    }, {
        "type": "function",
        "name": "balanceOf",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [],
        "outputs": [{
            "name": "balanceOf",
            "type": "uint256"
        }]
    }, {
        "type": "function",
        "name": "misTokens",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [],
        "outputs": [{
            "name": "balanceOf",
            "type": "uint256"
        }]
    }, {
        "type": "function",
        "name": "generarTokens",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "_numTokens",
            "type": "uint256"
        }],
        "outputs": [{
            "name": "balanceOf",
            "type": "uint256"
        }]
    }

]


// {
//     "type": "function",
//     "name": "AtracionesDisponibles",
//     "constant": false,
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "inputs": [],
//     "outputs": [
//         {
//             "name": "balance",
//             "type": "string[]"
//         }
//     ]
// }, {
//     "type": "function",
//     "name": "ComidasDisponibles",
//     "constant": false,
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "inputs": [],
//     "outputs": []
// },
// {
//     "type": "function",
//     "name": "NuevaAtraccion",
//     "constant": false,
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "inputs": [{
//         "indexed": false,
//         "internalType": "string",
//         "name": "_nombreAtraccion",
//         "type": "string"
//     }, {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_precio",
//         "type": "uint256"
//     }],
//     "outputs": []
// },
// {
//     "anonymous": false,
//     "inputs": [
//         {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//         }
//     ],
//     "name": "CreateOrganization",
//     "type": "event"
// }