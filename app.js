// ==========================================
// 1. BASE DE DATOS DE PROCESADORES (CPU JSON/ARRAY)
// ==========================================
const cpuDatabase = [
  // --- TPVs y Mini PCs de bajo consumo / Mostrador ---
  { "name": "Intel Atom x5-Z8350", "score": 900 },
  { "name": "Intel Atom x5-Z8500", "score": 1100 },
  { "name": "Intel Celeron J1800", "score": 600 },
  { "name": "Intel Celeron J1900", "score": 1140 },
  { "name": "Intel Celeron J3455", "score": 2250 },
  { "name": "Intel Celeron J4105", "score": 2950 },
  { "name": "Intel Celeron J4125", "score": 3050 },
  { "name": "Intel Celeron J6412", "score": 3850 },
  { "name": "Intel Celeron N2840", "score": 580 },
  { "name": "Intel Celeron N3050", "score": 550 },
  { "name": "Intel Celeron N3060", "score": 660 },
  { "name": "Intel Celeron N3150", "score": 1150 },
  { "name": "Intel Celeron N3160", "score": 1250 },
  { "name": "Intel Celeron N3350", "score": 1120 },
  { "name": "Intel Celeron N3450", "score": 1820 },
  { "name": "Intel Celeron N4000", "score": 1420 },
  { "name": "Intel Celeron N4020", "score": 1560 },
  { "name": "Intel Celeron N4100", "score": 2450 },
  { "name": "Intel Celeron N4120", "score": 2500 },
  { "name": "Intel Celeron N4500", "score": 2010 },
  { "name": "Intel Celeron N5095", "score": 4050 },
  { "name": "Intel Celeron N5100", "score": 3250 },
  { "name": "Intel Celeron N5105", "score": 4100 },
  { "name": "Intel Celeron G3900", "score": 2180 },
  { "name": "Intel Celeron G4900", "score": 2400 },
  { "name": "Intel Celeron G5900", "score": 2750 },
  { "name": "Intel Celeron G6900", "score": 4350 },
  { "name": "Intel Processor N95", "score": 5400 },
  { "name": "Intel Processor N97", "score": 5800 },
  { "name": "Intel Processor N100", "score": 5600 },
  { "name": "Intel Processor N200", "score": 5200 },

  // --- Intel Pentium antiguos y clásicos ---
  { "name": "Intel Pentium 4", "score": 250 },
  { "name": "Intel Pentium 4 2.80GHz", "score": 240 },
  { "name": "Intel Pentium 4 3.00GHz", "score": 317 },
  { "name": "Intel Pentium 4 3.20GHz", "score": 330 },
  { "name": "Intel Pentium D", "score": 350 },
  { "name": "Intel Pentium D 820", "score": 360 },
  { "name": "Intel Pentium D 945", "score": 420 },

  // --- Intel Pentium modernos ---
  { "name": "Intel Pentium G2020", "score": 1750 },
  { "name": "Intel Pentium G2030", "score": 1800 },
  { "name": "Intel Pentium G3220", "score": 1950 },
  { "name": "Intel Pentium G3240", "score": 2000 },
  { "name": "Intel Pentium G3250", "score": 2050 },
  { "name": "Intel Pentium G4400", "score": 2500 },
  { "name": "Intel Pentium G4560", "score": 3450 },
  { "name": "Intel Pentium G5400", "score": 3650 },
  { "name": "Intel Pentium G6400", "score": 4150 },
  { "name": "Intel Pentium Gold 7505", "score": 5200 },
  { "name": "Intel Pentium Gold 8505", "score": 7200 },
  { "name": "Intel Pentium Silver N5000", "score": 3050 },
  { "name": "Intel Pentium Silver N5030", "score": 3150 },
  { "name": "Intel Pentium Silver N6000", "score": 3400 },
  { "name": "Intel Pentium 4415U", "score": 2150 },
  { "name": "Intel Pentium 4417U", "score": 2200 },
  { "name": "Intel Pentium 6405U", "score": 2350 },

  // --- Intel Core 2 Duo / Quad ---
  { "name": "Intel Core 2 Duo", "score": 950 },
  { "name": "Intel Core 2 Duo E7500", "score": 1050 },
  { "name": "Intel Core 2 Duo E8400", "score": 1160 },
  { "name": "Intel Core 2 Duo E8500", "score": 1250 },
  { "name": "Intel Core 2 Quad Q6600", "score": 1780 },
  { "name": "Intel Core 2 Quad Q8400", "score": 2030 },
  { "name": "Intel Core 2 Quad Q9400", "score": 2150 },
  { "name": "Intel Core 2 Quad Q9550", "score": 2350 },

  // --- Intel Core i3 ---
  { "name": "Intel Core i3-2100", "score": 1800 },
  { "name": "Intel Core i3-2120", "score": 1920 },
  { "name": "Intel Core i3-3220", "score": 2250 },
  { "name": "Intel Core i3-3240", "score": 2350 },
  { "name": "Intel Core i3-4005U", "score": 1650 },
  { "name": "Intel Core i3-4130", "score": 2850 },
  { "name": "Intel Core i3-4150", "score": 2950 },
  { "name": "Intel Core i3-5005U", "score": 2020 },
  { "name": "Intel Core i3-6006U", "score": 2250 },
  { "name": "Intel Core i3-6100", "score": 4150 },
  { "name": "Intel Core i3-6100U", "score": 2600 },
  { "name": "Intel Core i3-7020U", "score": 2550 },
  { "name": "Intel Core i3-7100", "score": 4300 },
  { "name": "Intel Core i3-7100U", "score": 2750 },
  { "name": "Intel Core i3-8100", "score": 6100 },
  { "name": "Intel Core i3-8130U", "score": 3600 },
  { "name": "Intel Core i3-8145U", "score": 3800 },
  { "name": "Intel Core i3-9100", "score": 6700 },
  { "name": "Intel Core i3-1005G1", "score": 5050 },
  { "name": "Intel Core i3-10100", "score": 8800 },
  { "name": "Intel Core i3-10110U", "score": 4050 },
  { "name": "Intel Core i3-1115G4", "score": 6150 },
  { "name": "Intel Core i3-12100", "score": 13900 },
  { "name": "Intel Core i3-1215U", "score": 11100 },
  { "name": "Intel Core i3-13100", "score": 14900 },
  { "name": "Intel Core i3-1315U", "score": 12200 },

  // --- Intel Core i5 ---
  { "name": "Intel Core i5-2400", "score": 3100 },
  { "name": "Intel Core i5-2500", "score": 3400 },
  { "name": "Intel Core i5-3470", "score": 4200 },
  { "name": "Intel Core i5-3570", "score": 4400 },
  { "name": "Intel Core i5-4200U", "score": 2200 },
  { "name": "Intel Core i5-4300U", "score": 2400 },
  { "name": "Intel Core i5-4460", "score": 4700 },
  { "name": "Intel Core i5-4570", "score": 4900 },
  { "name": "Intel Core i5-4590", "score": 5200 },
  { "name": "Intel Core i5-5200U", "score": 2500 },
  { "name": "Intel Core i5-6200U", "score": 3000 },
  { "name": "Intel Core i5-6300U", "score": 3200 },
  { "name": "Intel Core i5-6400", "score": 5150 },
  { "name": "Intel Core i5-6500", "score": 5650 },
  { "name": "Intel Core i5-7200U", "score": 3400 },
  { "name": "Intel Core i5-7400", "score": 5500 },
  { "name": "Intel Core i5-7500", "score": 6050 },
  { "name": "Intel Core i5-8250U", "score": 5900 },
  { "name": "Intel Core i5-8265U", "score": 6050 },
  { "name": "Intel Core i5-8350U", "score": 6250 },
  { "name": "Intel Core i5-8400", "score": 9200 },
  { "name": "Intel Core i5-8500", "score": 9600 },
  { "name": "Intel Core i5-9400", "score": 9500 },
  { "name": "Intel Core i5-10210U", "score": 6250 },
  { "name": "Intel Core i5-1035G1", "score": 7400 },
  { "name": "Intel Core i5-10400", "score": 12200 },
  { "name": "Intel Core i5-1135G7", "score": 9900 },
  { "name": "Intel Core i5-11400", "score": 17100 },
  { "name": "Intel Core i5-1235U", "score": 13400 },
  { "name": "Intel Core i5-12400", "score": 19400 },
  { "name": "Intel Core i5-1335U", "score": 15800 },
  { "name": "Intel Core i5-13400", "score": 25200 },

  // --- Intel Core i7 ---
  { "name": "Intel Core i7-2600", "score": 5300 },
  { "name": "Intel Core i7-3770", "score": 6400 },
  { "name": "Intel Core i7-4770", "score": 7000 },
  { "name": "Intel Core i7-4790", "score": 7250 },
  { "name": "Intel Core i7-6700", "score": 8050 },
  { "name": "Intel Core i7-7700", "score": 8600 },
  { "name": "Intel Core i7-8550U", "score": 5950 },
  { "name": "Intel Core i7-8700", "score": 12900 },
  { "name": "Intel Core i7-10700", "score": 16600 },
  { "name": "Intel Core i7-1165G7", "score": 10400 },
  { "name": "Intel Core i7-12700", "score": 30800 },

  // --- AMD Gama Antigua / Económica ---
  { "name": "AMD E1-2100", "score": 380 },
  { "name": "AMD E2-9000", "score": 920 },
  { "name": "AMD E2-9000e", "score": 850 },
  { "name": "AMD A4-5000", "score": 1150 },
  { "name": "AMD A4-9120", "score": 1200 },
  { "name": "AMD A4-9125", "score": 1230 },
  { "name": "AMD A6-5400K", "score": 1280 },
  { "name": "AMD A6-9220", "score": 1310 },
  { "name": "AMD A6-9225", "score": 1330 },
  { "name": "AMD A8-7600", "score": 2950 },
  { "name": "AMD A9-9420", "score": 1500 },
  { "name": "AMD A9-9425", "score": 1520 },
  { "name": "AMD A10-5800K", "score": 2850 },
  { "name": "AMD A10-7800", "score": 3050 },
  { "name": "AMD FX-6300", "score": 4100 },
  { "name": "AMD FX-8350", "score": 5900 },
  { "name": "AMD Athlon 200GE", "score": 4100 },
  { "name": "AMD Athlon 3000G", "score": 4400 },
  { "name": "AMD Athlon Silver 3050U", "score": 2900 },
  { "name": "AMD Athlon Gold 3150U", "score": 3950 },

  // --- AMD Ryzen ---
  { "name": "AMD Ryzen 3 1200", "score": 6250 },
  { "name": "AMD Ryzen 3 2200G", "score": 6750 },
  { "name": "AMD Ryzen 3 3200G", "score": 7150 },
  { "name": "AMD Ryzen 3 3250U", "score": 3900 },
  { "name": "AMD Ryzen 3 4300G", "score": 10900 },
  { "name": "AMD Ryzen 3 5300U", "score": 9950 },
  { "name": "AMD Ryzen 3 7320U", "score": 8950 },
  { "name": "AMD Ryzen 5 1600", "score": 12200 },
  { "name": "AMD Ryzen 5 2400G", "score": 8700 },
  { "name": "AMD Ryzen 5 2600", "score": 13100 },
  { "name": "AMD Ryzen 5 3400G", "score": 9250 },
  { "name": "AMD Ryzen 5 3500U", "score": 6950 },
  { "name": "AMD Ryzen 5 3600", "score": 17800 },
  { "name": "AMD Ryzen 5 4500U", "score": 11050 },
  { "name": "AMD Ryzen 5 4600G", "score": 15800 },
  { "name": "AMD Ryzen 5 5500U", "score": 13100 },
  { "name": "AMD Ryzen 5 5600G", "score": 19800 },
  { "name": "AMD Ryzen 5 7520U", "score": 9500 },
  { "name": "AMD Ryzen 7 3700X", "score": 22600 },
  { "name": "AMD Ryzen 7 5700G", "score": 24500 },

  // --- Apple Silicon ---
  { "name": "Apple M1", "score": 14800 },
  { "name": "Apple M1 Pro", "score": 23500 },
  { "name": "Apple M2", "score": 15500 },
  { "name": "Apple M2 Pro", "score": 26500 },
  { "name": "Apple M3", "score": 19000 }
];

const MIN_SCORE = 2000;

// ==========================================
// 2. ESTADO GLOBAL Y LOCALSTORAGE
// ==========================================
let currentDate = new Date();
let selectedDateStr = "";

function getCitasStorage() {
  return JSON.parse(localStorage.getItem("mis_citas_calendario") || "{}");
}

function saveCitasStorage(data) {
  localStorage.setItem("mis_citas_calendario", JSON.stringify(data));
}

// ==========================================
// 3. INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initCpuDatalist();
  renderCalendar();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById("btnPrevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById("btnNextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  document.getElementById("btnOpenCpuModal").addEventListener("click", () => {
    abrirModal("cpuModal");
  });

  document.getElementById("btnCheckCpu").addEventListener("click", verificarCPU);
  document.getElementById("inputCpuName").addEventListener("keydown", (e) => {
    if (e.key === "Enter") verificarCPU();
  });

  document.getElementById("btnShowAddCitaForm").addEventListener("click", () => {
    document.getElementById("addCitaForm").classList.remove("hidden");
  });

  document.getElementById("addCitaForm").addEventListener("submit", guardarCita);
}

// ==========================================
// 4. LÓGICA DEL CALENDARIO
// ==========================================
function renderCalendar() {
  const grid = document.getElementById("calendarGrid");
  const monthYearLabel = document.getElementById("currentMonthYear");
  grid.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(currentDate);
  monthYearLabel.textContent = monthName;

  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();

  let startDayIndex = firstDay.getDay() - 1;
  if (startDayIndex === -1) startDayIndex = 6;

  for (let i = 0; i < startDayIndex; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day empty";
    grid.appendChild(emptyCell);
  }

  const today = new Date();
  const citasData = getCitasStorage();

  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day";

    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const isToday =
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day;

    if (isToday) {
      dayCell.classList.add("is-today");
    }

    const dayNumSpan = document.createElement("span");
    dayNumSpan.className = "day-number";
    dayNumSpan.textContent = day;
    dayCell.appendChild(dayNumSpan);

    const citasDelDia = citasData[dateKey] || [];
    if (citasDelDia.length > 0) {
      const badge = document.createElement("div");
      badge.className = "day-badge";
      badge.textContent = `${citasDelDia.length} cita${citasDelDia.length > 1 ? "s" : ""}`;
      dayCell.appendChild(badge);
    }

    dayCell.addEventListener("click", () => {
      abrirModalDia(dateKey);
    });

    grid.appendChild(dayCell);
  }
}

// ==========================================
// 5. GESTIÓN DE CITAS POR DÍA
// ==========================================
function abrirModalDia(dateKey) {
  selectedDateStr = dateKey;
  const [y, m, d] = dateKey.split("-");
  const fechaBonita = new Date(y, m - 1, d).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("modalDateTitle").textContent = `Citas: ${fechaBonita}`;
  ocultarFormCita();
  renderCitasDia();
  abrirModal("dayModal");
}

function renderCitasDia() {
  const citasData = getCitasStorage();
  const citas = citasData[selectedDateStr] || [];
  const tbody = document.getElementById("citasTableBody");
  const emptyMsg = document.getElementById("noCitasMsg");

  tbody.innerHTML = "";

  if (citas.length === 0) {
    emptyMsg.classList.remove("hidden");
    return;
  }

  emptyMsg.classList.add("hidden");
  citas.sort((a, b) => a.hora.localeCompare(b.hora));

  citas.forEach((cita) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><strong>${cita.hora}</strong></td>
      <td>${cita.cliente}</td>
      <td>
        <a href="${cita.crm}" target="_blank" class="crm-link">Abrir CRM ↗</a>
      </td>
      <td>
        <select class="status-select status-${cita.estado}" onchange="cambiarEstadoCita('${cita.id}', this.value)">
          <option value="pendiente" ${cita.estado === "pendiente" ? "selected" : ""}>⏳ Pendiente</option>
          <option value="hecha" ${cita.estado === "hecha" ? "selected" : ""}>✅ Hecha</option>
          <option value="planton" ${cita.estado === "planton" ? "selected" : ""}>❌ Plantón</option>
        </select>
      </td>
      <td>
        <button class="btn btn-delete" onclick="borrarCita('${cita.id}')" title="Borrar cita">🗑️ Borrar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function guardarCita(e) {
  e.preventDefault();
  const cliente = document.getElementById("inputCliente").value.trim();
  const hora = document.getElementById("inputHora").value;
  const crm = document.getElementById("inputCrm").value.trim();

  if (!cliente || !hora || !crm) return;

  const citasData = getCitasStorage();
  if (!citasData[selectedDateStr]) {
    citasData[selectedDateStr] = [];
  }

  const nuevaCita = {
    id: "id_" + Date.now(),
    cliente,
    hora,
    crm,
    estado: "pendiente"
  };

  citasData[selectedDateStr].push(nuevaCita);
  saveCitasStorage(citasData);

  document.getElementById("addCitaForm").reset();
  ocultarFormCita();
  renderCitasDia();
  renderCalendar();
}

function cambiarEstadoCita(citaId, nuevoEstado) {
  const citasData = getCitasStorage();
  const lista = citasData[selectedDateStr] || [];
  const cita = lista.find((c) => c.id === citaId);
  if (cita) {
    cita.estado = nuevoEstado;
    saveCitasStorage(citasData);
    renderCitasDia();
  }
}

function borrarCita(citaId) {
  if (!confirm("¿Seguro que deseas borrar esta cita?")) return;

  const citasData = getCitasStorage();
  if (citasData[selectedDateStr]) {
    citasData[selectedDateStr] = citasData[selectedDateStr].filter((c) => c.id !== citaId);
    if (citasData[selectedDateStr].length === 0) {
      delete citasData[selectedDateStr];
    }
    saveCitasStorage(citasData);
  }
  renderCitasDia();
  renderCalendar();
}

function ocultarFormCita() {
  document.getElementById("addCitaForm").classList.add("hidden");
}

// ==========================================
// 6. VERIFICADOR DE CPU (RESTAURADA INICIALIZACIÓN + BÚSQUEDA EXACTA)
// ==========================================
function initCpuDatalist() {
  const datalist = document.getElementById("cpuList");
  if (!datalist) return;
  datalist.innerHTML = "";
  cpuDatabase.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.name;
    datalist.appendChild(opt);
  });
}

function tokenizar(str) {
  return str.toLowerCase().split(/[\s\-_/]+/).filter(t => t.length > 0);
}

function buscarCPUInteligente(query) {
  const qClean = query.trim().toLowerCase();
  if (!qClean) return null;

  // 1. Coincidencia exacta completa
  const exact = cpuDatabase.find(c => c.name.toLowerCase() === qClean);
  if (exact) return exact;

  // 2. Coincidencia por tokens discretos (cada palabra/número aislado)
  const qTokens = tokenizar(qClean);
  if (qTokens.length === 0) return null;

  const match = cpuDatabase.find(c => {
    const cTokens = tokenizar(c.name);
    return qTokens.every(token => cTokens.includes(token));
  });

  return match || null;
}

function verificarCPU() {
  const query = document.getElementById("inputCpuName").value.trim();
  const resultBox = document.getElementById("cpuResultBox");

  if (!query) {
    resultBox.className = "result-box hidden";
    return;
  }

  const match = buscarCPUInteligente(query);
  resultBox.classList.remove("hidden");

  if (match) {
    if (match.score >= MIN_SCORE) {
      resultBox.className = "result-box compatible";
      resultBox.innerHTML = `
        <strong>✅ Compatible</strong><br>
        Modelo identificado: <strong>${match.name}</strong> (~${match.score} pts).<br>
        Supera el mínimo de ${MIN_SCORE} pts requeridos.
      `;
    } else {
      resultBox.className = "result-box no-compatible";
      resultBox.innerHTML = `
        <strong>❌ No compatible</strong><br>
        Modelo identificado: <strong>${match.name}</strong> (~${match.score} pts).<br>
        Está por debajo del mínimo de ${MIN_SCORE} pts requeridos (faltan ${MIN_SCORE - match.score} pts).
      `;
    }
  } else {
    const searchUrl = `https://www.google.com/search?q=cpubenchmark+net+${encodeURIComponent(query)}`;
    resultBox.className = "result-box desconocido";
    resultBox.innerHTML = `
      <strong>⚠️ No se sabe</strong><br>
      "${query}" no consta en la base rápida.<br>
      <a href="${searchUrl}" target="_blank" class="result-link">Buscar "${query}" en CPU Benchmark ↗</a>
    `;
  }
}

// ==========================================
// 7. FUNCIONES AUXILIARES DE MODAL
// ==========================================
function abrirModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function cerrarModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// ==========================================
// 8. COPIAS DE SEGURIDAD (EXPORTAR / IMPORTAR JSON)
// ==========================================

// 1. Descarga automática de un archivo .json con las citas
function exportarBackup() {
  const citasData = getCitasStorage();
  const totalDias = Object.keys(citasData).length;

  if (totalDias === 0) {
    alert("No hay citas registradas para exportar.");
    return;
  }

  const jsonStr = JSON.stringify(citasData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Nombre de archivo con fecha de hoy: ej. citas_backup_2024-05-18.json
  const hoyStr = new Date().toISOString().slice(0, 10);
  const a = document.createElement("a");
  a.href = url;
  a.download = `citas_backup_${hoyStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 2. Cargar citas desde un archivo .json seleccionado
function importarBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const dataImportada = JSON.parse(e.target.result);

      if (typeof dataImportada !== "object" || dataImportada === null) {
        throw new Error("Formato inválido");
      }

      // Preguntar si quiere combinar o sobreescribir
      const deseaCombinar = confirm(
        "¿Quieres COMBINAR las citas del archivo con las que ya tienes en pantalla?\\n\\n" +
        "• Aceptar = Combinar (no borra nada, suma las del archivo)\\n" +
        "• Cancelar = Sobrescribir (borra lo actual y deja solo lo del archivo)"
      );

      let citasActuales = getCitasStorage();

      if (deseaCombinar) {
        for (const fecha in dataImportada) {
          if (!citasActuales[fecha]) {
            citasActuales[fecha] = [];
          }
          // Añadir evitando IDs duplicados
          dataImportada[fecha].forEach(nuevaCita => {
            if (!citasActuales[fecha].some(c => c.id === nuevaCita.id)) {
              citasActuales[fecha].push(nuevaCita);
            }
          });
        }
      } else {
        citasActuales = dataImportada;
      }

      saveCitasStorage(citasActuales);
      renderCalendar();
      alert("✅ ¡Copia cargada correctamente!");
    } catch (err) {
      alert("❌ Error al leer el archivo. Asegúrate de que sea un archivo .json válido generado por esta app.");
    } finally {
      // Limpiar el input para permitir volver a cargar el mismo archivo si se desea
      event.target.value = "";
    }
  };

  reader.readAsText(file);
}