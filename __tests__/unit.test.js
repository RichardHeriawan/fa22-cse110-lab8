// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//phoneNumbers
test('isPhoneNumber1', () => {
    expect(functions.isPhoneNumber('(669)-467-3067')).toBe(true);
});
test('isPhoneNumber2', () => {
    expect(functions.isPhoneNumber('669-467-3067')).toBe(true);
});
test('isPhoneNumber3', () => {
    expect(functions.isPhoneNumber('6694673067')).toBe(false);
});
test('isPhoneNumber4', () => {
    expect(functions.isPhoneNumber('669467367')).toBe(false);
});

//emails
test('isEmail1', () => {
    expect(functions.isEmail('rheriawan@ucsd.edu')).toBe(true);
});
test('isEmail2', () => {
    expect(functions.isEmail('richardchristandi@icloud.com')).toBe(true);
});
test('isEmail3', () => {
    expect(functions.isEmail('rh.ucsd.edu')).toBe(false);
});
test('isEmail4', () => {
    expect(functions.isEmail('ucsd.edu')).toBe(false);
});

//strongPassword
test('isStrongPassword1', () => {
    expect(functions.isStrongPassword('Richard123')).toBe(true);
});
test('isStrongPassword2', () => {
    expect(functions.isStrongPassword('Richard809')).toBe(true);
});
test('isStrongPassword3', () => {
    expect(functions.isStrongPassword('Rich_+$@')).toBe(false);
});
test('isStrongPassword4', () => {
    expect(functions.isStrongPassword('Rich$%^')).toBe(false);
});

//dates
test('isDate1', () => {
    expect(functions.isDate('11/19/2022')).toBe(true);
});
test('isDate2', () => {
    expect(functions.isDate('11/14/2022')).toBe(true);
});
test('isDate3', () => {
    expect(functions.isDate('11/142021')).toBe(false);
});
test('isDate4', () => {
    expect(functions.isDate('2022/11/19')).toBe(false);
});

//hexColors
test('isHexColor1', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor2', () => {
    expect(functions.isHexColor('#111FFF')).toBe(true);
});
test('isHexColor3', () => {
    expect(functions.isHexColor('#00011')).toBe(false);
});
test('isHexColor4', () => {
    expect(functions.isHexColor('#FFFGH')).toBe(false);
});