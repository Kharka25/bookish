import {hasCrashedInLastSession} from 'appcenter-crashes';

export async function checkPreviousSession() {
  const didCrash = await hasCrashedInLastSession();
  return didCrash;
}
