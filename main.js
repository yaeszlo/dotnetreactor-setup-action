const {existsSync, writeFileSync} = require('fs');
const {execSync} = require('child_process');
const {getInput} = require('@actions/core');

const licenseFilePath = `${__dirname }/license.v3lic`;

function writeLicenseFile() {
  console.log('[Set up license]');
  if (existsSync(licenseFilePath)) {
    console.log('- License already exists');
  } else {
    const licenseData = decodeBase64String(getInput('license'));
    console.log('- Writing license file...');
    writeFileSync(licenseFilePath, licenseData);
    console.log('- Done.');
  }
}

function decodeBase64String(string) {
  console.log('- Decoding license');
  return Buffer.from(string, "base64");
}

writeLicenseFile();
