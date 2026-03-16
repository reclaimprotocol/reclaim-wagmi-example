export const abi = [
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
      "type": "function",
      "name": "addNewEpoch",
      "inputs": [
        {
          "name": "witnesses",
          "type": "tuple[]",
          "internalType": "struct Reclaim.Witness[]",
          "components": [
            { "name": "addr", "type": "address", "internalType": "address" },
            { "name": "host", "type": "string", "internalType": "string" }
          ]
        },
        {
          "name": "requisiteWitnessesForClaimCreate",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "currentEpoch",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "epochDurationS",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "epochs",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [
        { "name": "id", "type": "uint32", "internalType": "uint32" },
        {
          "name": "timestampStart",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "timestampEnd", "type": "uint32", "internalType": "uint32" },
        {
          "name": "minimumWitnessesForClaimCreation",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "fetchEpoch",
      "inputs": [
        { "name": "epoch", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct Reclaim.Epoch",
          "components": [
            { "name": "id", "type": "uint32", "internalType": "uint32" },
            {
              "name": "timestampStart",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "timestampEnd",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "witnesses",
              "type": "tuple[]",
              "internalType": "struct Reclaim.Witness[]",
              "components": [
                {
                  "name": "addr",
                  "type": "address",
                  "internalType": "address"
                },
                { "name": "host", "type": "string", "internalType": "string" }
              ]
            },
            {
              "name": "minimumWitnessesForClaimCreation",
              "type": "uint8",
              "internalType": "uint8"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "fetchWitnessesForClaim",
      "inputs": [
        { "name": "epoch", "type": "uint32", "internalType": "uint32" },
        { "name": "identifier", "type": "bytes32", "internalType": "bytes32" },
        { "name": "timestampS", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct Reclaim.Witness[]",
          "components": [
            { "name": "addr", "type": "address", "internalType": "address" },
            { "name": "host", "type": "string", "internalType": "string" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "verifyProof",
      "inputs": [
        {
          "name": "proof",
          "type": "tuple",
          "internalType": "struct Reclaim.Proof",
          "components": [
            {
              "name": "claimInfo",
              "type": "tuple",
              "internalType": "struct Claims.ClaimInfo",
              "components": [
                {
                  "name": "provider",
                  "type": "string",
                  "internalType": "string"
                },
                {
                  "name": "parameters",
                  "type": "string",
                  "internalType": "string"
                },
                {
                  "name": "context",
                  "type": "string",
                  "internalType": "string"
                }
              ]
            },
            {
              "name": "signedClaim",
              "type": "tuple",
              "internalType": "struct Claims.SignedClaim",
              "components": [
                {
                  "name": "claim",
                  "type": "tuple",
                  "internalType": "struct Claims.CompleteClaimData",
                  "components": [
                    {
                      "name": "identifier",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    },
                    {
                      "name": "owner",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "timestampS",
                      "type": "uint32",
                      "internalType": "uint32"
                    },
                    {
                      "name": "epoch",
                      "type": "uint32",
                      "internalType": "uint32"
                    }
                  ]
                },
                {
                  "name": "signatures",
                  "type": "bytes[]",
                  "internalType": "bytes[]"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "EpochAdded",
      "inputs": [
        {
          "name": "epoch",
          "type": "tuple",
          "indexed": false,
          "internalType": "struct Reclaim.Epoch",
          "components": [
            { "name": "id", "type": "uint32", "internalType": "uint32" },
            {
              "name": "timestampStart",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "timestampEnd",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "witnesses",
              "type": "tuple[]",
              "internalType": "struct Reclaim.Witness[]",
              "components": [
                {
                  "name": "addr",
                  "type": "address",
                  "internalType": "address"
                },
                { "name": "host", "type": "string", "internalType": "string" }
              ]
            },
            {
              "name": "minimumWitnessesForClaimCreation",
              "type": "uint8",
              "internalType": "uint8"
            }
          ]
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "ECDSAInvalidSignature", "inputs": [] },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureLength",
      "inputs": [
        { "name": "length", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureS",
      "inputs": [{ "name": "s", "type": "bytes32", "internalType": "bytes32" }]
    }
  ]