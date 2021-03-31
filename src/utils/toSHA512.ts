import { SHA512 } from 'crypto-js';

const toSHA512 = (value: string) => SHA512(value).toString();

export default toSHA512;
