let personagens = JSON.parse(localStorage.getItem("personagens")) || [];
let atual = null;

function salvar() {
    localStorage.setItem("personagens", JSON.stringify(personagens));
    atualizarLista();
}

function novoPersonagem() {
    let p = {
        nome: "Novo",
        nivel: 1,
        for: 10, des: 10, con: 10,
        int: 10, sab: 10, car: 10,
        pv: 10,
        pe: 10,
        auto: true
    };
    personagens.push(p);
    atual = personagens.length - 1;
    salvar();
    carregar();
}

function atualizarLista() {
    let lista = document.getElementById("listaPersonagens");
    lista.innerHTML = "";
    personagens.forEach((p, i) => {
        let btn = document.createElement("button");
        btn.innerText = p.nome;
        btn.onclick = () => { atual = i; carregar(); };
        lista.appendChild(btn);
    });
}

function carregar() {
    if (atual === null) return;
    let p = personagens[atual];
    nome.value = p.nome;
    nivel.value = p.nivel;
    for.value = p.for;
    des.value = p.des;
    con.value = p.con;
    int.value = p.int;
    sab.value = p.sab;
    car.value = p.car;
    pv.value = p.pv;
    pe.value = p.pe;
    autoProgressao.checked = p.auto;
    calcular();
}

function calcular() {
    if (atual === null) return;
    let p = personagens[atual];

    p.nome = nome.value;
    p.nivel = parseInt(nivel.value);
    p.for = parseInt(for.value);
    p.des = parseInt(des.value);
    p.con = parseInt(con.value);
    p.int = parseInt(int.value);
    p.sab = parseInt(sab.value);
    p.car = parseInt(car.value);
    p.auto = autoProgressao.checked;

    let modDes = Math.floor((p.des - 10) / 2);
    let modCon = Math.floor((p.con - 10) / 2);

    if (p.auto) {
        p.pv = 10 + modCon + (p.nivel * 5);
        p.pe = 10 + (p.nivel * 3);
        pv.value = p.pv;
        pe.value = p.pe;
    } else {
        p.pv = parseInt(pv.value);
        p.pe = parseInt(pe.value);
    }

    defesa.innerText = 10 + modDes + Math.floor(p.nivel / 2);
    iniciativa.innerText = modDes;

    salvar();
}

document.querySelectorAll("input").forEach(el => {
    el.addEventListener("input", calcular);
});

function exportarJSON() {
    if (atual === null) return;
    let data = JSON.stringify(personagens[atual]);
    let blob = new Blob([data], {type: "application/json"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = personagens[atual].nome + ".json";
    a.click();
}

document.getElementById("importarExcel").addEventListener("change", function(e) {
    let reader = new FileReader();
    reader.onload = function(evt) {
        let data = new Uint8Array(evt.target.result);
        let workbook = XLSX.read(data, {type: "array"});
        let sheet = workbook.Sheets[workbook.SheetNames[0]];
        let json = XLSX.utils.sheet_to_json(sheet);

        if (json.length > 0) {
            let linha = json[0];
            nome.value = linha.Nome || nome.value;
            for.value = linha.FOR || for.value;
            des.value = linha.DES || des.value;
            con.value = linha.CON || con.value;
            int.value = linha.INT || int.value;
            sab.value = linha.SAB || sab.value;
            car.value = linha.CAR || car.value;
            calcular();
        }
    };
    reader.readAsArrayBuffer(e.target.files[0]);
});

atualizarLista();
