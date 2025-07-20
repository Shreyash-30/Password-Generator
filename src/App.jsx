import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCharacter, setIncludeCharacter] = useState(false);
  const [password, setPassword] = useState('');
  const ref = useRef(null);

  const generatePassword = useCallback(() => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumber) letters += '1234567890';
    if (includeCharacter) letters += '!@#$%^&*()_+';

    let ans = '';
    for (let i = 0; i < length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      ans += char;
    }
    setPassword(ans);
  }, [length, includeNumber, includeCharacter]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    ref.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumber, includeCharacter, generatePassword]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className="flex flex-col items-center justify-center p-8 border border-black rounded-md shadow-lg bg-white w-[400px]">
        <h2 className='text-center text-2xl text-black font-sans mb-4'>Password Generator</h2>

        <div className='flex w-full gap-2 mb-4'>
          <input
            type="text"
            ref={ref}
            placeholder='password'
            value={password}
            readOnly
            className="border border-gray-300 p-2 flex-1"
          />
          <button onClick={copyPasswordToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded">
            Copy
          </button>
        </div>

        <div className='flex flex-col w-full gap-3'>
          <label className="flex items-center justify-between">
            Length: {length}
            <input
              type="range"
              min="4"
              max="16"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={() => setIncludeNumber((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeCharacter}
              onChange={() => setIncludeCharacter((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
