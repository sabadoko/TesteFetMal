* { box-sizing: border-box; }

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0f0f, #181818);
    color: #e8e8e8;
}

.app {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 260px;
    background: #141414;
    border-right: 1px solid #222;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 3px;
}

.btn-primary {
    background: #262626;
    border: 1px solid #333;
    padding: 10px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
}

.btn-primary:hover {
    background: #333;
}

.lista button {
    background: transparent;
    border: none;
    color: #ccc;
    padding: 8px;
    text-align: left;
    width: 100%;
    border-radius: 6px;
    cursor: pointer;
}

.lista button:hover {
    background: #222;
}

.main {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.card {
    background: #1c1c1c;
    border: 1px solid #2a2a2a;
    padding: 20px;
    border-radius: 14px;
}

.card h2 {
    margin-top: 0;
    font-weight: 400;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.field {
    display: flex;
    flex-direction: column;
}

.field label {
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
}

input {
    background: #101010;
    border: 1px solid #333;
    padding: 8px;
    border-radius: 8px;
    color: white;
}

input:focus {
    outline: none;
    border-color: #555;
}

.stat {
    background: #101010;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
}

.stat span {
    font-size: 12px;
    opacity: 0.6;
}

.stat strong {
    display: block;
    margin-top: 5px;
    font-size: 20px;
}

.switch {
    display: flex;
    align-items: center;
    gap: 10px;
}

.switch input {
    display: none;
}

.switch span {
    width: 40px;
    height: 20px;
    background: #333;
    border-radius: 20px;
    position: relative;
    transition: .2s;
}

.switch span::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: .2s;
}

.switch input:checked + span {
    background: #4caf50;
}

.switch input:checked + span::after {
    transform: translateX(20px);
}

.actions {
    display: flex;
    gap: 10px;
}
* { box-sizing: border-box; }

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0f0f, #181818);
    color: #e8e8e8;
}

.app {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 260px;
    background: #141414;
    border-right: 1px solid #222;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 3px;
}

.btn-primary {
    background: #262626;
    border: 1px solid #333;
    padding: 10px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
}

.btn-primary:hover {
    background: #333;
}

.lista button {
    background: transparent;
    border: none;
    color: #ccc;
    padding: 8px;
    text-align: left;
    width: 100%;
    border-radius: 6px;
    cursor: pointer;
}

.lista button:hover {
    background: #222;
}

.main {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.card {
    background: #1c1c1c;
    border: 1px solid #2a2a2a;
    padding: 20px;
    border-radius: 14px;
}

.card h2 {
    margin-top: 0;
    font-weight: 400;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.field {
    display: flex;
    flex-direction: column;
}

.field label {
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
}

input {
    background: #101010;
    border: 1px solid #333;
    padding: 8px;
    border-radius: 8px;
    color: white;
}

input:focus {
    outline: none;
    border-color: #555;
}

.stat {
    background: #101010;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
}

.stat span {
    font-size: 12px;
    opacity: 0.6;
}

.stat strong {
    display: block;
    margin-top: 5px;
    font-size: 20px;
}

.switch {
    display: flex;
    align-items: center;
    gap: 10px;
}

.switch input {
    display: none;
}

.switch span {
    width: 40px;
    height: 20px;
    background: #333;
    border-radius: 20px;
    position: relative;
    transition: .2s;
}

.switch span::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: .2s;
}

.switch input:checked + span {
    background: #4caf50;
}

.switch input:checked + span::after {
    transform: translateX(20px);
}

.actions {
    display: flex;
    gap: 10px;
}
