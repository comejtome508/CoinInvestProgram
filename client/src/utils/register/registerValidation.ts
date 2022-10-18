import { bool, object, ref, string } from 'yup';

/**
 * 패스워드 체크
 * @description 알파벳, 숫자, 특수문자중 3개이상 포함
 * @return ValidatorFn
 */
const defaultPasswordValidation = (password: string) => {
  const checkNumber = new RegExp(/[0-9]/);
  const checkAlphabet = new RegExp(/[A-Za-z]/);
  const checkSpecialWord = new RegExp(/[#?!@$%^&*-]/);
  let includeCount = 0;
  if (checkNumber.test(password)) includeCount += 1;
  if (checkAlphabet.test(password)) includeCount += 1;
  if (checkSpecialWord.test(password)) includeCount += 1;
  return includeCount >= 3;
};

/**
 * 동일한 문자 3개 이상 체크
 */
const sameInputValidation = (password: string) => {
  const sequence = new RegExp('(\\w)\\1\\1');
  return !sequence.test(password);
};

const checkSerialKeyboard = (password: string) => {
  const checkKeyboardArray = [
    '1234567890-=',
    '=-0987654321',
    'qwertyuiop{}|',
    '|}{poiuytrewq',
    'asdfghjkl:"',
    '":lkjhgfdsa',
    'zxcvbnm<>?',
    '?><mnbvcxz',
    'qwertyuiop[]',
    '][poiuytrewq',
    "asdfghjkl;'",
    "';lkjhgfdsa",
    'zxcvbnm,./',
    '/.,mnbvcxz',
  ];
  const checkLength = 3;
  let checkStr = '';
  for (let i = 0; i <= password.length - checkLength; i++) {
    checkStr = password[i].toLowerCase() + password[i + 1].toLowerCase() + password[i + 2].toLowerCase();

    for (let j = 0; j < checkKeyboardArray.length; j++) {
      if (checkKeyboardArray[j].indexOf(checkStr) !== -1) {
        return false;
      }
    }
  }
  return true;
};

const checkNaming = (name: string) => {
  const regex = new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|.|*\s]+$/);
  return regex.test(name);
};

export const registerValidation = object().shape({
  nickname: string()
    .required('닉네임을 입력해 주세요.')
    .test('naming', '올바른 닉네임 형식이 아닙니다.', (name) => checkNaming(name!)),
  email: string()
    .required('이메일 주소를 입력해 주세요.')
    .max(100, '올바른 이메일 형식이 아닙니다.')
    .email('올바른 이메일 형식이 아닙니다.'),
  password: string()
    .required('비밀번호를 입력해 주세요.')
    .min(9, '영어, 숫자, 특수문자 3가지 조합으로 비밀번호를 설정해 주세요. (9~30자)')
    .max(30, '영어, 숫자, 특수문자 3가지 조합으로 비밀번호를 설정해 주세요. (9~30자)')
    .test('sequence', '영어, 숫자, 특수문자 3가지 조합으로 비밀번호를 설정해 주세요. (9~30자)', (password) =>
      defaultPasswordValidation(password!),
    )
    .test('idInPassword', '아이디(이메일 주소)를 포함한 비밀번호는 사용할 수 없습니다.', function (value) {
      const ref2 = ref('email');
      for (let i = 0; i < value!.length - 3; i++) {
        const checkPassword = value!.slice(i, 4 + i);
        if ((this.resolve(ref2) as string).includes(checkPassword)) {
          return false;
        }
      }
      return true;
    })
    .test('same', '동일한 문자, 숫자 3자 이상은 연속해서 사용할 수 없습니다. (예:aaa, 111)', (password) =>
      sameInputValidation(password!),
    )
    .test(
      'serialKeyboard',
      '연속된 키보드 문자열 3자 이상은 연속해서 사용할 수 없습니다. (예: asd)',
      (password): boolean => checkSerialKeyboard(password!),
    ),
  'password-confirm': string()
    .required('비밀번호를 입력해 주세요.')
    .oneOf([ref('password'), null], '비밀번호가 일치하지 않습니다. 다시 입력해 주세요.'),
});
