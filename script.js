let personagens = JSON.parse(localStorage.getItem("personagens")) || [];
let atual = null;

function salvar() {
    localStorage.setItem("personagens", JSON.stringify(personagens));
}

function novoPersonagem() {
    const p = {
        nome: "Novo",
        nivel: 1,
        for: 10,
        des: 10,
        con: 10,
        int: 10,
        sab: 10,
        car: 10,
        pv: 10,
        pe: 5
    };
    personagens.push(p);
    atual = personagens.length - 1;
    salvar();
    atualizarLista();
    carregarFicha();
}

function atualizarLista() {
    const lista = document.getElementById("listaPersonagens");
    lista.innerHTML = "";

    personagens.forEach((p, i) => {
        const btn = document.createElement("button");
        btn.textContent = p.nome;
        btn.onclick = () => {
            atual = i;
            carregarFicha();
        };
        lista.appendChild(btn);
    });
}

function carregarFicha() {
    if (atual === null) return;
    const p = personagens[atual];

    for (let key in p) {
        if (document.getElementById(key))
            document.getElementById(key).value = p[key];
    }

    calcular();
}

function calcular() {
    const p = personagens[atual];

    p.for = parseInt(document.getElementById("for").value) || 0;
    p.des = parseInt(document.getElementById("des").value) || 0;
    p.con = parseInt(document.getElementById("con").value) || 0;
    p.nivel = parseInt(document.getElementById("nivel").value) || 1;

    const auto = document.getElementById("autoProgressao").checked;

    const modFor = Math.floor((p.for - 10) / 2);
    const modDes = Math.floor((p.des - 10) / 2);

    document.getElementById("modFor").textContent = modFor >= 0 ? "+"+modFor : modFor;
    document.getElementById("modDes").textContent = modDes >= 0 ? "+"+modDes : modDes;

    document.getElementById("defesa").textContent = 10 + modDes;
    document.getElementById("iniciativa").textContent = modDes;

    if (auto) {
        p.pv = 10 + (p.nivel * 5) + (p.con * 2);
        p.pe = 5 + (p.nivel * 3);
        document.getElementById("pv").value = p.pv;
        document.getElementById("pe").value = p.pe;
    }

    salvar();
}

function exportarJSON() {
    const dataStr = JSON.stringify(personagens, null, 2);
    const blob = new Blob([dataStr], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fichas.json";
    a.click();
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calcular);
});

document.getElementById("importarExcel").addEventListener("change", function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, {type: "array"});
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);

        if (json.length > 0) {
            personagens.push(json[0]);
            atual = personagens.length - 1;
            salvar();
            atualizarLista();
            carregarFicha();
        }
    };
    reader.readAsArrayBuffer(e.target.files[0]);
});

atualizarLista();
