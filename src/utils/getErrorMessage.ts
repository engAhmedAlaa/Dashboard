import { FirebaseError } from 'firebase/app';

function analyzeFirebaseErrorCode(errorCode: string) {
  const message = errorCode
    .replace(/(storage\/|auth\/|)[a-z]/, (match) => {
      return match.at(-1)?.toUpperCase() as string;
    })
    .replace(/-/g, ' ');
  return message;
}

export function getErrorMessage(error: unknown) {
  if (error instanceof FirebaseError) {
    const errorMessage = analyzeFirebaseErrorCode(error.code);
    return errorMessage;
  } else if (error instanceof Error) {
    const errorMessage = error.message;
    return errorMessage;
  } else {
    const errorMessage = error as string;
    return errorMessage;
  }
}
