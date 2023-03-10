const RSA = require('node-rsa');
const fs = require('fs');

const publicKey = new RSA();
const privateKey = new RSA();

//This certs has to be stored into aws secret manager, also removed from repository to avoid vulnerabilities 
const publicFs = fs.readFileSync('./keys/public.pem', 'utf8');
const privateFs = fs.readFileSync('./keys/private.pem', 'utf8');



publicKey.importKey(publicFs);
privateKey.importKey(privateFs);
//Encrypt with public key

export const encryptData = (text: string): string => privateKey.encryptPrivate(text, 'base64');


export const decryptData = (text: string): string => publicKey.decryptPublic(text, 'utf8');