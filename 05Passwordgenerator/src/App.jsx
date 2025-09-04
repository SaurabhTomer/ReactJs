import { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'



function App() {

  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharacterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState('')

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (NumberAllowed) string += '0123456789'
    if (CharacterAllowed) string += '!@#$%^&*(){}'

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)

  }, [length, NumberAllowed, CharacterAllowed])


  const copyPasswordToClipboard = useCallback(() => {
    
    passwordRef.current?.select();
    // by this we show effect of select the password highlited with blue color

    // passwordRef.current?.setSelectionRange( 0 , 5 );
    // by this we select a range of password to select

    // using this we can select any thing to clipboard
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  // thill now i know that useeffect is updated when page is reload and if there is
  //  any change in their dependecies

  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, CharacterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-3
       text-orange-500 bg-gray-700 mt-10'>

        <h1 className='text-white text-center mt-5'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-10'>

          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-10 bg-white mb-5 '
            placeholder='password'
            readOnly
            ref={passwordRef}

          />

          <button
            onClick={copyPasswordToClipboard}
            className='bg-blue-600 text-orange-600 mb-5'
          >Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id='numberInput'
              max={100}
              onChange={() => {
                setNumberAllowed((prev => !prev))
                // is function mai hmko original value ka acces milta h jo ki false h ismai or ye change krke true krdega
                // agr hm normal value pass krdete bina callback k toh vo true hi bnjata fhir check krne ka nhi krne ka koi mtlb nhi bnta
                // isliye hmne callback function liya h ismai
              }
              }
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={CharacterAllowed}
              id='characterInput'
              onChange={() => {
                setCharacterAllowed((prev => !prev))
              }
              }
            />
            <label htmlFor="characterInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
