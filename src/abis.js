// https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#id50
// https://web3js.readthedocs.io/en/v1.4.0/glossary.html

export const token_address = '0x11a1f9A14c5f78dE142aD088622622014C05497c';
export const token_abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_registry",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_causeRegistry",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "type": "function",
        "name": "AtracionesDisponibles",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [],
        "outputs": [
            {
                "name": "balance",
                "type": "string[]"
            }
        ]
    }, {
        "type": "function",
        "name": "ComidasDisponibles",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "NuevaAtraccion",
        "constant": false,
        "payable": false,
        "stateMutability": "nonpayable",
        "inputs": [{
            "indexed": false,
            "internalType": "string",
            "name": "_nombreAtraccion",
            "type": "string"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "_precio",
            "type": "uint256"
        }],
        "outputs": []
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "CreateOrganization",
        "type": "event"
    }
]