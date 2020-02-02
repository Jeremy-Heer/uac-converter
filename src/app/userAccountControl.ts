export class Uac {
  name: string;
  binary: string;
  decimal: number;
  matched: boolean;
}

export const UACVALUES: Uac[] = [
  {name: 'SCRIPT', binary: '00000000000000000000000000000001', decimal: 1, matched: false},
  {name: 'ACCOUNTDISABLE', binary: '00000000000000000000000000000010', decimal: 2, matched: false},
  {name: 'RESERVED', binary: '00000000000000000000000000000100', decimal: 4, matched: false},
  {name: 'HOMEDIR_REQUIRED', binary: '00000000000000000000000000001000', decimal: 8, matched: false},
  {name: 'LOCKOUT', binary: '00000000000000000000000000010000', decimal: 16, matched: false},
  {name: 'PASSWD_NOTREQD', binary: '00000000000000000000000000100000', decimal: 32, matched: false},
  {name: 'PASSWD_CANT_CHANGE', binary: '00000000000000000000000001000000', decimal: 64, matched: false},
  {name: 'ENCRYPTED_TEXT_PWD_ALLOWED', binary: '00000000000000000000000010000000', decimal: 128, matched: false},
  {name: 'TEMP_DUPLICATE_ACCOUNT', binary: '00000000000000000000000100000000', decimal: 256, matched: false},
  {name: 'NORMAL_ACCOUNT', binary: '00000000000000000000001000000000', decimal: 512, matched: false},
  {name: 'RESERVED', binary: '00000000000000000000010000000000', decimal: 1024, matched: false},
  {name: 'INTERDOMAIN_TRUST_ACCOUNT', binary: '00000000000000000000100000000000', decimal: 2048, matched: false},
  {name: 'WORKSTATION_TRUST_ACCOUNT', binary: '00000000000000000001000000000000', decimal: 4096, matched: false},
  {name: 'SERVER_TRUST_ACCOUNT', binary: '00000000000000000010000000000000', decimal: 8192, matched: false},
  {name: 'RESERVED', binary: '00000000000000000100000000000000', decimal: 16384, matched: false},
  {name: 'RESERVED', binary: '00000000000000001000000000000000', decimal: 32768, matched: false},
  {name: 'DONT_EXPIRE_PASSWORD', binary: '00000000000000010000000000000000', decimal: 65536, matched: false},
  {name: 'MNS_LOGON_ACCOUNT', binary: '00000000000000100000000000000000', decimal: 131072, matched: false},
  {name: 'SMARTCARD_REQUIRED', binary: '00000000000001000000000000000000', decimal: 262144, matched: false},
  {name: 'TRUSTED_FOR_DELEGATION', binary: '00000000000010000000000000000000', decimal: 524288, matched: false},
  {name: 'NOT_DELEGATED', binary: '00000000000100000000000000000000', decimal: 1048576, matched: false},
  {name: 'USE_DES_KEY_ONLY', binary: '00000000001000000000000000000000', decimal: 2097152, matched: false},
  {name: 'DONT_REQ_PREAUTH', binary: '00000000010000000000000000000000', decimal: 4194304, matched: false},
  {name: 'PASSWORD_EXPIRED', binary: '00000000100000000000000000000000', decimal: 8388608, matched: false},
  {name: 'TRUSTED_TO_AUTH_FOR_DELEGATION', binary: '00000001000000000000000000000000', decimal: 16777216, matched: false},
  {name: 'NO_AUTH_DATA_REQUIRED', binary: '00000010000000000000000000000000', decimal: 33554432, matched: false},
  {name: 'PARTIAL_SECRETS_ACCOUNT', binary: '00000100000000000000000000000000', decimal: 67108864, matched: false},
  {name: 'RESERVED', binary: '00001000000000000000000000000000', decimal: 134217728, matched: false},
  {name: 'RESERVED', binary: '00010000000000000000000000000000', decimal: 268435456, matched: false},
  {name: 'RESERVED', binary: '00100000000000000000000000000000', decimal: 536870912, matched: false},
  {name: 'RESERVED', binary: '01000000000000000000000000000000', decimal: 1073741824, matched: false},
  {name: 'RESERVED', binary: '10000000000000000000000000000000', decimal: 2147483648, matched: false}
];

