export type BurnRefund = {
  version: '0.1.0';
  name: 'burn_refund';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'treasuryAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'updateAuthority';
          type: 'publicKey';
        }
      ];
    },
    {
      name: 'deposit';
      accounts: [
        {
          name: 'transaction';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'treasuryAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'lamports';
          type: 'u64';
        }
      ];
    },
    {
      name: 'withdraw';
      accounts: [
        {
          name: 'transaction';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'treasuryAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'burnRefund';
      accounts: [
        {
          name: 'tokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'meta';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'treasuryAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'lamports';
          type: 'u64';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'transactionDetail';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'user';
            type: 'publicKey';
          },
          {
            name: 'lamports';
            type: 'u64';
          },
          {
            name: 'paytype';
            type: 'u8';
          },
          {
            name: 'timestamp';
            type: 'i64';
          }
        ];
      };
    },
    {
      name: 'honeylandTreasury';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'allowedUpdateAuthority';
            type: 'publicKey';
          }
        ];
      };
    }
  ];
  events: [
    {
      name: 'RefundEvent';
      fields: [
        {
          name: 'user';
          type: 'publicKey';
          index: true;
        },
        {
          name: 'lamports';
          type: 'u64';
          index: false;
        },
        {
          name: 'paytype';
          type: 'u8';
          index: false;
        },
        {
          name: 'timestamp';
          type: 'i64';
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'OwnerRequired';
      msg: 'The Signer must be treasury owner.';
    },
    {
      code: 6001;
      name: 'InsufficientFunds';
      msg: 'Insufficient funds inside treasury';
    },
    {
      code: 6002;
      name: 'ForbiddenNFT';
      msg: 'Your NFT is not allowed by Honeyland to refund.';
    }
  ];
};

export const IDL: BurnRefund = {
  version: '0.1.0',
  name: 'burn_refund',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true
        },
        {
          name: 'treasuryAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'updateAuthority',
          type: 'publicKey'
        }
      ]
    },
    {
      name: 'deposit',
      accounts: [
        {
          name: 'transaction',
          isMut: true,
          isSigner: true
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true
        },
        {
          name: 'treasuryAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'lamports',
          type: 'u64'
        }
      ]
    },
    {
      name: 'withdraw',
      accounts: [
        {
          name: 'transaction',
          isMut: true,
          isSigner: true
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true
        },
        {
          name: 'treasuryAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: 'burnRefund',
      accounts: [
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: false
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true
        },
        {
          name: 'meta',
          isMut: true,
          isSigner: false
        },
        {
          name: 'treasuryAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'lamports',
          type: 'u64'
        }
      ]
    }
  ],
  accounts: [
    {
      name: 'transactionDetail',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey'
          },
          {
            name: 'lamports',
            type: 'u64'
          },
          {
            name: 'paytype',
            type: 'u8'
          },
          {
            name: 'timestamp',
            type: 'i64'
          }
        ]
      }
    },
    {
      name: 'honeylandTreasury',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8'
          },
          {
            name: 'owner',
            type: 'publicKey'
          },
          {
            name: 'allowedUpdateAuthority',
            type: 'publicKey'
          }
        ]
      }
    }
  ],
  events: [
    {
      name: 'RefundEvent',
      fields: [
        {
          name: 'user',
          type: 'publicKey',
          index: true
        },
        {
          name: 'lamports',
          type: 'u64',
          index: false
        },
        {
          name: 'paytype',
          type: 'u8',
          index: false
        },
        {
          name: 'timestamp',
          type: 'i64',
          index: false
        }
      ]
    }
  ],
  errors: [
    {
      code: 6000,
      name: 'OwnerRequired',
      msg: 'The Signer must be treasury owner.'
    },
    {
      code: 6001,
      name: 'InsufficientFunds',
      msg: 'Insufficient funds inside treasury'
    },
    {
      code: 6002,
      name: 'ForbiddenNFT',
      msg: 'Your NFT is not allowed by Honeyland to refund.'
    }
  ]
};
