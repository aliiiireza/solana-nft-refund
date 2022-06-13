import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { REFUND_IDL, REFUND_PROGRAM_ID } from "./const";
import { IDL } from "./burn_refund";
import { PublicKey } from "@solana/web3.js";

// This command makes an Lottery
export function getProgramInstance(connection, wallet) {
  if (!wallet.publicKey) return;

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );
  // Read the generated IDL.
  const idl = IDL;

  // Address of the deployed program.
  const programId = REFUND_PROGRAM_ID;

  // Generate the program client from IDL.
  const program = new anchor.Program(idl, programId, provider);

  return program;

  //we can't import idl.json and instead of it, we import refund_burn.ts from traget/types folder.
  //with latter one, the error from idl----line 22 has gone.
}

export function isTreasuryExist(connection, wallet) {
  return new Promise(async (resolve, reject) => {
    if (!wallet.connected) return reject();
    const program = getProgramInstance(connection, wallet);
    const [treasuryAccountPDA] = await PublicKey.findProgramAddress(
      [anchor.utils.bytes.utf8.encode("honeyland_treasury")],
      program.programId
    );

    try {
      await program.account.honeylandTreasury.fetch(treasuryAccountPDA);
      resolve(true);
    } catch (e) {
      resolve(false);
    }
  });
}
