export const SET_KEY = 'SET_KEY'

const setKey = key => {
  return {
    type: SET_KEY,
    key,
  }
}

export const generateKey = () => {
  return dispatch => {
    window.crypto.subtle.generateKey({
      name: 'ECDSA',
      namedCurve: 'P-521',
    }, false, ['sign', 'verify'])
      .then(keys => window.crypto.subtle.exportKey('jwk', keys.publicKey))
      .then(keydata => dispatch(setKey(keydata)))
      .catch(e => dispatch(setKey(e.message)))
  }
}
