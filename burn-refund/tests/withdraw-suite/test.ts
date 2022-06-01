import { PublicKey, Transaction, Signer, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Keypair } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { BN, Program, Wallet } from '@project-serum/anchor';
import { BurnRefund } from '../../target/types/burn_refund';
import { bundlrStorage, keypairIdentity, Metaplex, Nft } from '@metaplex-foundation/js-next';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import treasury_owner from '../../wallet/treasury_owner.json';
import allowed_update_auth from '../../wallet/allowed_update_auth.json';
import { expect, assert } from 'chai';

describe('init-deposit-withdraw-suite', async () => {
  //process of test
  //3. withdraw treasury ===> check treasury balance-------check owner wallet balance

  // required values for treasury(owner + update auths for testing nfts)
  let ownerAccount = Keypair.fromSecretKey(new Uint8Array(treasury_owner));

  //anchor
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.BurnRefund as Program<BurnRefund>;

  const [treasuryAccountPDA] = await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode('honeyland_treasury')],
    program.programId
  );

  before(async () => {
    // console.log('Before Any Test: Airdrop Check');
    // if (parseFloat((await provider.connection.getBalance(ownerAccount.publicKey)).toString()) / LAMPORTS_PER_SOL < 5) {
    //   var fromAirDropSignature = await provider.connection.requestAirdrop(ownerAccount.publicKey, 2 * LAMPORTS_PER_SOL);
    //   await provider.connection.confirmTransaction(fromAirDropSignature);
    //   console.log(
    //     `Owner Balance Before Test: ${
    //       parseFloat((await provider.connection.getBalance(ownerAccount.publicKey)).toString()) / LAMPORTS_PER_SOL
    //     } SOL`
    //   );
    // } else {
    //   console.log('Treasury Owner has more than 5 sol');
    // }
  });

  //////WITHDRAW
  it('Withdraw All Funds to Treasury Owner', async () => {
    // console.log('Withdraw..............................');
    // try {
    //   //report amount of solana in wallets
    //   let lamportsInTreasury = (await provider.connection.getAccountInfo(treasuryAccountPDA)).lamports;
    //   console.log(`Treasury Balance Before Withdeaw: ${parseFloat(lamportsInTreasury.toString()) / LAMPORTS_PER_SOL} SOL`);
    //   let lamportsInOwnerWallet = await provider.connection.getBalance(ownerAccount.publicKey);
    //   console.log(`Owner Balance Before Withdeaw: ${parseFloat(lamportsInOwnerWallet.toString()) / LAMPORTS_PER_SOL} SOL`);
    //   const withdraw_transaction = anchor.web3.Keypair.generate();
    //   ///////////event
    //   let listener = null;
    //   let [event, slot] = await new Promise((resolve, _reject) => {
    //     listener = program.addEventListener('RefundEvent', (event, slot) => {
    //       resolve([event, slot]);
    //     });
    //     program.methods
    //       .withdraw()
    //       .accounts({
    //         transaction: withdraw_transaction.publicKey,
    //         user: ownerAccount.publicKey,
    //         treasuryAccount: treasuryAccountPDA
    //       })
    //       .signers([ownerAccount, withdraw_transaction])
    //       .rpc();
    //   });
    //   await program.removeEventListener(listener);
    //   console.log(`event is:${event}`);
    //   ////////////event
    //   // await program.methods
    //   //   .withdraw()
    //   //   .accounts({
    //   //     transaction: withdraw_transaction.publicKey,
    //   //     user: ownerAccount.publicKey,
    //   //     treasuryAccount: treasuryAccountPDA
    //   //   })
    //   //   .signers([ownerAccount, withdraw_transaction])
    //   //   .rpc();
    //   //report amount of solana in wallets
    //   lamportsInOwnerWallet = await provider.connection.getBalance(ownerAccount.publicKey);
    //   console.log(`Owner Balance After Withdraw: ${parseFloat(lamportsInOwnerWallet.toString()) / LAMPORTS_PER_SOL} SOL`);
    //   //fetch accounts and infos
    //   ///////////////TX Detail
    //   const transactionAccount = await program.account.transactionDetail.fetch(withdraw_transaction.publicKey);
    //   console.log('Withdraw Tx Details.............');
    //   console.log(`TX By: ${transactionAccount.user.toString()}`);
    //   console.log(`TX Type: ${transactionAccount.paytype}--(1=deposit,2=withdraw,3=burn-refund)`);
    //   console.log(`TX Date: ${new BN(transactionAccount.timestamp)}`);
    //   console.log(`TX Change Balance: ${parseFloat(transactionAccount.lamports.toString()) / LAMPORTS_PER_SOL} SOL`);
    // } catch (error) {
    //   console.log(error);
    // }
  });
});
