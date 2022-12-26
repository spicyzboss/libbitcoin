import { entropyToMnemonic } from 'bip39';

export class Entropy {
  /**
   * Method that generate mnemonic code from hexadecimal 64 bytes length
   * @param entropy A hexadecimal string 64 bytes length for generating mnemonic code
   * @returns A mnemonic code
   */
  public static generateMnemonicFromHex64(entropy: string) {
    if (entropy.length !== 64) throw new RangeError('Require hexadecimal 64 bytes length.');

    return entropyToMnemonic(entropy);
  }
}
