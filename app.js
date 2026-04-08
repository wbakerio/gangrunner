const STORAGE_KEY = "gang-runner-state-v2";
const DEFAULT_SHEETFED_RUN_TYPE_ID = createId();
const DEFAULT_LARGE_FORMAT_RUN_TYPE_ID = createId();
const COLORS = [
  "#f4b183",
  "#9fd5c0",
  "#f6d36b",
  "#b7c9ff",
  "#f29db2",
  "#99d7f2",
  "#d7c3f4",
  "#adc178",
  "#f7b267",
  "#84dcc6"
];
const LARGE_FORMAT_SAMPLE_JOB = {
  jobName: "MagnetSigns",
  items: [
    { id: "7bb44c8e-0dd3-40da-9b34-0301cae8cf75", name: "handcrafted bread", width: 14, height: 21, qty: 1 },
    { id: "315af3e1-e5ef-4341-8166-b40410d2ffbc", name: "Winter Squash Chart", width: 17, height: 32, qty: 1 },
    { id: "461abf88-2805-4e96-9fc2-1c155e78dd09", name: "Green Sign Sidewalk", width: 2.5, height: 20, qty: 7 },
    { id: "b9d41bf9-ebd5-4238-8b23-6006ce04719c", name: "Bread price Tags", width: 2.5, height: 3.5, qty: 9 },
    { id: "555695c0-99df-4015-a3db-348641018e5c", name: "Beer Case", width: 22, height: 24, qty: 1 },
    { id: "8218b97c-2fb8-44d9-bfeb-b0ad9690a97e", name: "Non Alcoholic", width: 23.5, height: 72, qty: 1 },
    { id: "f0039d79-ec98-4314-8d02-d10419172580", name: "Wine Categories", width: 3.75, height: 5.75, qty: 28 },
    { id: "cfe13139-5fef-4ad3-ac94-b8a9477d8871", name: "Meet Plants", width: 4, height: 20, qty: 1 },
    { id: "c5ca5d11-bf8b-4e55-b887-eb4e44cd17eb", name: "Our Ingredients", width: 4, height: 80, qty: 1 },
    { id: "2dd67919-78f9-4590-9560-afea20c6b808", name: "Seafood Display", width: 4.4, height: 10, qty: 18 },
    { id: "91c6e891-c633-4e36-9451-3ecea12e67a5", name: "Everyone Welcome", width: 4.5, height: 22, qty: 3 },
    { id: "544ee972-ab4e-4c8d-9e0a-49c0dc3d4f9e", name: "Bulk Reason", width: 40, height: 21, qty: 1 },
    { id: "70fdd9ab-d382-409b-a5f1-b626fda96985", name: "Montana Beer", width: 5.5, height: 28.5, qty: 1 },
    { id: "0c5cb515-98d2-4485-9484-9d3d43434b37", name: "Local / Regional", width: 5.5, height: 48, qty: 4 },
    { id: "3cafaab5-8d0a-4faf-986e-0fe6a182f68e", name: "Comm Board", width: 7.5, height: 39, qty: 3 },
    { id: "eab6d681-2bce-4cca-9430-3bd29824eee5", name: "Hot Bar", width: 8, height: 23.5, qty: 1 },
    { id: "fc4d4b59-87f1-4e56-92ff-6ca40a9b28ad", name: "Salad Bar", width: 9.5, height: 20, qty: 4 }
  ],
  sheets: [
    { id: "81c1f2ce-3010-401a-adec-20c13c0b1505", name: "20 x 28", width: 20, height: 28, cost: 0.10584, enabled: true },
    { id: "f7237649-635e-40e6-a2a6-8d0b38243a8f", name: "19x25", width: 19, height: 25, cost: 0.087, enabled: true },
    { id: "595d679c-a963-4fd3-a5f3-1facb812b5db", name: "23.5x29", width: 23.5, height: 29, cost: 0.13055, enabled: true },
    { id: "e2b11fb2-fd1c-4404-b65e-bc5a3999dd21", name: "17.5x23", width: 17.5, height: 23, cost: 0.07784, enabled: true },
    { id: "6fa4385e-2efc-43b4-a177-dd4f9f8f783c", name: "Magnet", width: 24, height: 600, cost: 220, enabled: true }
  ],
  settings: {
    platingCost: 36.6,
    makereadyTime: 10,
    makereadySheets: 100,
    laborCostPerHour: 40,
    gutter: 0.2,
    sheetMargin: 0.25,
    gripper: 0,
    gripperEdge: "long",
    optimizationMode: "cost-first"
  }
};

const defaultState = {
  jobName: "",
  selectedRunTypeId: DEFAULT_LARGE_FORMAT_RUN_TYPE_ID,
  runTypes: [
    { id: DEFAULT_SHEETFED_RUN_TYPE_ID, name: "Sheetfed Printing" },
    { id: DEFAULT_LARGE_FORMAT_RUN_TYPE_ID, name: "Large Format" }
  ],
  items: [],
  sheets: [
    { id: createId(), name: "12 x 18", width: 12, height: 18, cost: 0.04525, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "13 x 19", width: 13, height: 19, cost: 0.05155, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "17.5 x 23", width: 17.5, height: 23, cost: 0.0778, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "19 x 25", width: 19, height: 25, cost: 0.087, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "20 x 26", width: 20, height: 26, cost: 0.09534, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "20 x 28", width: 20, height: 28, cost: 0.1058, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "23.5 x 29", width: 23.5, height: 29, cost: 0.1306, enabled: true, runTypeId: DEFAULT_SHEETFED_RUN_TYPE_ID },
    { id: createId(), name: "4 x 8 ACM", width: 48, height: 96, cost: 55.25, enabled: true, runTypeId: DEFAULT_LARGE_FORMAT_RUN_TYPE_ID },
    { id: createId(), name: "5 x 10 ACM", width: 60, height: 112, cost: 96.01, enabled: true, runTypeId: DEFAULT_LARGE_FORMAT_RUN_TYPE_ID }
  ],
  settingsByRunType: {
    [DEFAULT_SHEETFED_RUN_TYPE_ID]: createDefaultRunTypeSettings(DEFAULT_SHEETFED_RUN_TYPE_ID, "Sheetfed Printing"),
    [DEFAULT_LARGE_FORMAT_RUN_TYPE_ID]: createDefaultRunTypeSettings(DEFAULT_LARGE_FORMAT_RUN_TYPE_ID, "Large Format")
  }
};

let state = loadState();
let lastCalculatedPlan = null;
let hasPendingChanges = true;
const RUN_TYPE_SWITCH_DURATION_MS = 1000;
let runTypeSwitchTimeout = null;

const itemForm = document.getElementById("itemForm");
const sheetForm = document.getElementById("sheetForm");
const itemsTableBody = document.getElementById("itemsTableBody");
const sheetsTableBody = document.getElementById("sheetsTableBody");
const layoutPlans = document.getElementById("layoutPlans");
const resultsContent = document.getElementById("resultsContent");
const emptyState = document.getElementById("emptyState");
const itemSummaryCards = document.getElementById("itemSummaryCards");
const layoutCardTemplate = document.getElementById("layoutCardTemplate");

const jobNameInput = document.getElementById("jobName");
const selectedRunTypeInput = document.getElementById("selectedRunType");
const modalRunTypeInput = document.getElementById("modalRunType");
const itemEditIdInput = document.getElementById("itemEditId");
const itemNameInput = document.getElementById("itemName");
const itemWidthInput = document.getElementById("itemWidth");
const itemHeightInput = document.getElementById("itemHeight");
const itemQtyInput = document.getElementById("itemQty");
const itemSubmitButton = document.getElementById("itemSubmitButton");
const cancelEditButton = document.getElementById("cancelEditButton");

const sheetEditIdInput = document.getElementById("sheetEditId");
const runTypeNameInput = document.getElementById("runTypeName");
const addRunTypeButton = document.getElementById("addRunTypeButton");
const renameRunTypeButton = document.getElementById("renameRunTypeButton");
const removeRunTypeButton = document.getElementById("removeRunTypeButton");
const sheetNameInput = document.getElementById("sheetName");
const sheetRunTypeInput = document.getElementById("sheetRunType");
const sheetWidthInput = document.getElementById("sheetWidth");
const sheetHeightInput = document.getElementById("sheetHeight");
const sheetCostInput = document.getElementById("sheetCost");
const sheetSubmitButton = document.getElementById("sheetSubmitButton");
const cancelSheetEditButton = document.getElementById("cancelSheetEditButton");

const openSettingsButton = document.getElementById("openSettingsButton");
const calculateButton = document.getElementById("calculateButton");
const settingsModal = document.getElementById("settingsModal");
const loadSampleButton = document.getElementById("loadSampleButton");
const resetJobButton = document.getElementById("resetJobButton");
const saveJobButton = document.getElementById("saveJobButton");
const loadJobButton = document.getElementById("loadJobButton");
const printReportButton = document.getElementById("printReportButton");
const jobFileInput = document.getElementById("jobFileInput");

const platingCostInput = document.getElementById("platingCost");
const makereadyTimeInput = document.getElementById("makereadyTime");
const makereadySheetsInput = document.getElementById("makereadySheets");
const laborCostPerHourInput = document.getElementById("laborCostPerHour");
const gutterInput = document.getElementById("gutter");
const sheetMarginInput = document.getElementById("sheetMargin");
const gripperInput = document.getElementById("gripper");
const gripperEdgeLongInput = document.getElementById("gripperEdgeLong");
const gripperEdgeShortInput = document.getElementById("gripperEdgeShort");
const optimizationModeInput = document.getElementById("optimizationMode");
const generalProductionCard = document.getElementById("generalProductionCard");
const pressSheetSizesCard = document.getElementById("pressSheetSizesCard");

const summaryLayouts = document.getElementById("summaryLayouts");
const summarySheets = document.getElementById("summarySheets");
const summaryCost = document.getElementById("summaryCost");
const emptyStateMessage = document.getElementById("emptyStateMessage");
const metricDistinctLayouts = document.getElementById("metricDistinctLayouts");
const metricTotalSheets = document.getElementById("metricTotalSheets");
const metricTotalCost = document.getElementById("metricTotalCost");
const metricOptimizationMode = document.getElementById("metricOptimizationMode");

jobNameInput.addEventListener("input", (event) => {
  state.jobName = event.target.value;
  persistState();
  markPlanDirty();
});

selectedRunTypeInput.addEventListener("change", (event) => {
  state.selectedRunTypeId = event.target.value;
  persistState();
  markPlanDirty();
});

modalRunTypeInput.addEventListener("change", (event) => {
  animateRunTypeSwitch(event.target.value);
});

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    id: itemEditIdInput.value || createId(),
    name: itemNameInput.value.trim() || `Item ${state.items.length + 1}`,
    width: toNumber(itemWidthInput.value),
    height: toNumber(itemHeightInput.value),
    qty: Math.max(1, Math.round(toNumber(itemQtyInput.value)))
  };

  if (!isPositiveDimension(item.width, item.height) || item.qty < 1) {
    return;
  }

  if (itemEditIdInput.value) {
    state.items = state.items.map((entry) => entry.id === item.id ? item : entry);
  } else {
    state.items.push(item);
  }

  resetItemForm();
  persistState();
  markPlanDirty();
});

cancelEditButton.addEventListener("click", () => {
  resetItemForm();
});

sheetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const sheet = {
    id: sheetEditIdInput.value || createId(),
    name: sheetNameInput.value.trim() || `Sheet ${state.sheets.length + 1}`,
    runTypeId: sheetRunTypeInput.value || state.selectedRunTypeId || state.runTypes[0]?.id,
    width: toNumber(sheetWidthInput.value),
    height: toNumber(sheetHeightInput.value),
    cost: Math.max(0, toNumber(sheetCostInput.value)),
    enabled: sheetEditIdInput.value
      ? (state.sheets.find((entry) => entry.id === sheetEditIdInput.value)?.enabled ?? true)
      : true
  };

  if (!isPositiveDimension(sheet.width, sheet.height)) {
    return;
  }

  if (sheetEditIdInput.value) {
    state.sheets = state.sheets.map((entry) => entry.id === sheet.id ? sheet : entry);
  } else {
    state.sheets.push(sheet);
  }

  resetSheetForm();
  persistState();
  markPlanDirty();
});

addRunTypeButton.addEventListener("click", () => {
  const name = runTypeNameInput.value.trim();
  if (!name) {
    return;
  }

  const runType = { id: createId(), name };
  state.runTypes.push(runType);
  state.settingsByRunType[runType.id] = createDefaultRunTypeSettings(runType.id, runType.name);
  state.selectedRunTypeId = runType.id;
  persistState();
  markPlanDirty();
});

renameRunTypeButton.addEventListener("click", () => {
  const name = runTypeNameInput.value.trim();
  if (!name || !state.selectedRunTypeId) {
    return;
  }

  state.runTypes = state.runTypes.map((runType) => runType.id === state.selectedRunTypeId
    ? { ...runType, name }
    : runType);
  persistState();
  markPlanDirty();
});

removeRunTypeButton.addEventListener("click", () => {
  const runTypeId = state.selectedRunTypeId;
  if (!runTypeId || state.runTypes.length <= 1) {
    window.alert("At least one run type must remain in the app.");
    return;
  }

  const runType = state.runTypes.find((entry) => entry.id === runTypeId);
  const confirmed = window.confirm(
    `Remove "${runType?.name || "this run type"}"? This will permanently remove its general production settings and all press sheets assigned to it.`
  );

  if (!confirmed) {
    return;
  }

  state.runTypes = state.runTypes.filter((entry) => entry.id !== runTypeId);
  state.sheets = state.sheets.filter((sheet) => sheet.runTypeId !== runTypeId);
  delete state.settingsByRunType[runTypeId];
  state.selectedRunTypeId = state.runTypes[0]?.id || "";
  resetSheetForm();
  persistState();
  markPlanDirty();
});

cancelSheetEditButton.addEventListener("click", () => {
  resetSheetForm();
});

loadSampleButton.addEventListener("click", () => {
  const activeRunType = state.runTypes.find((runType) => runType.id === state.selectedRunTypeId);
  const isLargeFormat = activeRunType?.id === DEFAULT_LARGE_FORMAT_RUN_TYPE_ID || activeRunType?.name?.trim().toLowerCase() === "large format";

  if (isLargeFormat) {
    state.jobName = LARGE_FORMAT_SAMPLE_JOB.jobName;
    state.items = LARGE_FORMAT_SAMPLE_JOB.items.map((item) => ({ ...item }));
    state.sheets = [
      ...state.sheets.filter((sheet) => sheet.runTypeId !== state.selectedRunTypeId),
      ...createBuiltInSheetsForRunType(state.selectedRunTypeId, activeRunType?.name)
    ];
    state.settingsByRunType[state.selectedRunTypeId] = createDefaultRunTypeSettings(state.selectedRunTypeId, activeRunType?.name);
    persistState();
    calculateAndRender();
    return;
  }

  state.jobName = "Sample Mixed Job";
  state.items = [
    { id: createId(), name: "Postcard", width: 5, height: 7, qty: 12000 },
    { id: createId(), name: "Ticket", width: 2.5, height: 8, qty: 6000 },
    { id: createId(), name: "Mailer", width: 8.5, height: 11, qty: 3000 }
  ];
  persistState();
  calculateAndRender();
});

resetJobButton.addEventListener("click", () => {
  state.jobName = "";
  state.items = [];
  resetItemForm();
  lastCalculatedPlan = null;
  hasPendingChanges = true;
  persistState();
  render();
});

calculateButton.addEventListener("click", () => {
  calculateAndRender();
});

openSettingsButton.addEventListener("click", () => {
  settingsModal.classList.remove("hidden");
  settingsModal.setAttribute("aria-hidden", "false");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.action === "close-settings") {
    closeSettingsModal();
  }

  if (target.dataset.action === "delete-item") {
    state.items = state.items.filter((item) => item.id !== target.dataset.id);
    persistState();
    markPlanDirty();
  }

  if (target.dataset.action === "edit-item") {
    startItemEdit(target.dataset.id);
  }

  if (target.dataset.action === "delete-sheet") {
    state.sheets = state.sheets.filter((sheet) => sheet.id !== target.dataset.id);
    persistState();
    markPlanDirty();
  }

  if (target.dataset.action === "toggle-sheet") {
    state.sheets = state.sheets.map((sheet) => sheet.id === target.dataset.id
      ? { ...sheet, enabled: target.checked }
      : sheet);
    persistState();
    markPlanDirty();
  }

  if (target.dataset.action === "edit-sheet") {
    startSheetEdit(target.dataset.id);
  }

});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSettingsModal();
  }
});

for (const [input, key] of [
  [platingCostInput, "platingCost"],
  [makereadyTimeInput, "makereadyTime"],
  [makereadySheetsInput, "makereadySheets"],
  [laborCostPerHourInput, "laborCostPerHour"],
  [gutterInput, "gutter"],
  [sheetMarginInput, "sheetMargin"],
  [gripperInput, "gripper"]
]) {
  const commitValue = (event) => {
    getActiveRunTypeSettings()[key] = Math.max(0, toNumber(event.target.value));
    persistState();
    markPlanDirty();
  };
  input.addEventListener("change", commitValue);
  input.addEventListener("blur", commitValue);
}

for (const input of [gripperEdgeLongInput, gripperEdgeShortInput]) {
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      getActiveRunTypeSettings().gripperEdge = event.target.value;
      persistState();
      markPlanDirty();
    }
  });
}

optimizationModeInput.addEventListener("change", (event) => {
  getActiveRunTypeSettings().optimizationMode = event.target.value;
  persistState();
  markPlanDirty();
});

saveJobButton.addEventListener("click", () => {
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(state.jobName || "press-layout-job")}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

loadJobButton.addEventListener("click", () => {
  jobFileInput.click();
});

jobFileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    state = sanitizeState(JSON.parse(text));
    persistState();
    lastCalculatedPlan = null;
    hasPendingChanges = true;
    render();
  } catch (error) {
    window.alert("Unable to load that job file.");
  } finally {
    jobFileInput.value = "";
  }
});

printReportButton.addEventListener("click", () => {
  const plan = lastCalculatedPlan;
  if (!plan) {
    window.alert(hasPendingChanges ? "Click Calculate before exporting or printing." : "Add at least one item and one sheet size first.");
    return;
  }

  const reportWindow = window.open("", "_blank", "width=1200,height=900");
  if (!reportWindow) {
    return;
  }

  reportWindow.document.write(buildPrintHtml(plan));
  reportWindow.document.close();
  reportWindow.focus();
  reportWindow.print();
});

function render() {
  hydrateSettingsInputs();
  jobNameInput.value = state.jobName;
  renderRunTypeOptions();
  renderItemsTable();
  renderSheetsTable();

  const canCalculate = canBuildPlan();
  calculateButton.disabled = !canCalculate;

  if (!lastCalculatedPlan) {
    emptyState.classList.remove("hidden");
    resultsContent.classList.add("hidden");
    updateSummary({ distinctLayouts: 0, totalSheets: 0, totalCost: 0 });
    emptyStateMessage.textContent = canCalculate
      ? "Click Calculate to generate the current layout plan."
      : "Add at least one item and one enabled press sheet size in Settings to generate a layout plan.";
    return;
  }

  if (hasPendingChanges) {
    emptyState.classList.remove("hidden");
    resultsContent.classList.add("hidden");
    updateSummary(lastCalculatedPlan);
    emptyStateMessage.textContent = "Changes are pending. Click Calculate to refresh the plan.";
    return;
  }

  emptyState.classList.add("hidden");
  resultsContent.classList.remove("hidden");
  updateSummary(lastCalculatedPlan);
  renderItemSummaries(lastCalculatedPlan);
  renderLayoutPlans(lastCalculatedPlan);
}

function canBuildPlan() {
  const enabledSheets = getSelectedRunTypeSheets();
  return Boolean(state.items.length && enabledSheets.length);
}

function buildPlanIfPossible() {
  const enabledSheets = getSelectedRunTypeSheets();
  if (!state.items.length || !enabledSheets.length) {
    return null;
  }
  return optimizeLayouts(state.items, enabledSheets, getActiveRunTypeSettings());
}

function calculateAndRender() {
  lastCalculatedPlan = buildPlanIfPossible();
  hasPendingChanges = false;
  render();
}

function markPlanDirty() {
  hasPendingChanges = true;
  render();
}

function hydrateSettingsInputs() {
  const settings = getActiveRunTypeSettings();
  platingCostInput.value = settings.platingCost;
  makereadyTimeInput.value = settings.makereadyTime;
  makereadySheetsInput.value = settings.makereadySheets;
  laborCostPerHourInput.value = settings.laborCostPerHour;
  gutterInput.value = settings.gutter;
  sheetMarginInput.value = settings.sheetMargin;
  gripperInput.value = settings.gripper;
  gripperEdgeLongInput.checked = settings.gripperEdge !== "short";
  gripperEdgeShortInput.checked = settings.gripperEdge === "short";
  optimizationModeInput.value = settings.optimizationMode;
  runTypeNameInput.value = state.runTypes.find((runType) => runType.id === state.selectedRunTypeId)?.name || "";
  removeRunTypeButton.disabled = state.runTypes.length <= 1;
}

function renderRunTypeOptions() {
  selectedRunTypeInput.innerHTML = "";
  modalRunTypeInput.innerHTML = "";
  sheetRunTypeInput.innerHTML = "";

  for (const runType of state.runTypes) {
    const option = document.createElement("option");
    option.value = runType.id;
    option.textContent = runType.name;
    selectedRunTypeInput.appendChild(option);

    const modalOption = document.createElement("option");
    modalOption.value = runType.id;
    modalOption.textContent = runType.name;
    modalRunTypeInput.appendChild(modalOption);

    const sheetOption = document.createElement("option");
    sheetOption.value = runType.id;
    sheetOption.textContent = runType.name;
    sheetRunTypeInput.appendChild(sheetOption);
  }

  if (!state.runTypes.some((runType) => runType.id === state.selectedRunTypeId)) {
    state.selectedRunTypeId = state.runTypes[0]?.id || "";
  }

  selectedRunTypeInput.value = state.selectedRunTypeId;
  modalRunTypeInput.value = state.selectedRunTypeId;
  if (!sheetEditIdInput.value) {
    sheetRunTypeInput.value = state.selectedRunTypeId;
  }
}

function renderItemsTable() {
  itemsTableBody.innerHTML = "";
  for (const item of state.items) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${escapeHtml(item.name)}</td>
      <td>${formatNumber(item.width)} x ${formatNumber(item.height)}</td>
      <td>${formatNumber(item.width)} x ${formatNumber(item.height)}</td>
      <td>${item.qty.toLocaleString()}</td>
      <td>
        <div class="table-actions">
          <button class="icon-button" type="button" data-action="edit-item" data-id="${item.id}">Edit</button>
          <button class="icon-button" type="button" data-action="delete-item" data-id="${item.id}">Remove</button>
        </div>
      </td>
    `;
    itemsTableBody.appendChild(row);
  }
}

function renderSheetsTable() {
  sheetsTableBody.innerHTML = "";
  const visibleSheets = state.sheets.filter((sheet) => sheet.runTypeId === state.selectedRunTypeId);
  for (const sheet of visibleSheets) {
    const runTypeName = state.runTypes.find((runType) => runType.id === sheet.runTypeId)?.name || "Uncategorized";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" data-action="toggle-sheet" data-id="${sheet.id}" ${sheet.enabled !== false ? "checked" : ""}></td>
      <td>${escapeHtml(runTypeName)}</td>
      <td>${escapeHtml(sheet.name)}</td>
      <td>${formatNumber(sheet.width)} x ${formatNumber(sheet.height)}</td>
      <td>${formatCurrency(sheet.cost)}</td>
      <td>
        <div class="table-actions">
          <button class="icon-button" type="button" data-action="edit-sheet" data-id="${sheet.id}">Edit</button>
          <button class="icon-button" type="button" data-action="delete-sheet" data-id="${sheet.id}">Remove</button>
        </div>
      </td>
    `;
    sheetsTableBody.appendChild(row);
  }
}

function getSelectedRunTypeSheets() {
  return state.sheets.filter((sheet) => sheet.enabled !== false && sheet.runTypeId === state.selectedRunTypeId);
}

function getActiveRunTypeSettings() {
  if (!state.settingsByRunType[state.selectedRunTypeId]) {
    const activeRunType = state.runTypes.find((runType) => runType.id === state.selectedRunTypeId);
    state.settingsByRunType[state.selectedRunTypeId] = createDefaultRunTypeSettings(activeRunType?.id, activeRunType?.name);
  }
  return state.settingsByRunType[state.selectedRunTypeId];
}

function updateSummary(plan) {
  summaryLayouts.textContent = `${plan.distinctLayouts} layout${plan.distinctLayouts === 1 ? "" : "s"}`;
  summarySheets.textContent = `${plan.totalSheets.toLocaleString()} sheets`;
  summaryCost.textContent = formatCurrency(plan.totalCost);
  metricDistinctLayouts.textContent = String(plan.distinctLayouts);
  metricTotalSheets.textContent = plan.totalSheets.toLocaleString();
  metricTotalCost.textContent = formatCurrency(plan.totalCost);
  metricOptimizationMode.textContent = getActiveRunTypeSettings().optimizationMode === "cost-first" ? "Lowest cost" : "Fewest layouts";
}

function renderItemSummaries(plan) {
  itemSummaryCards.innerHTML = "";
  for (const itemSummary of plan.itemSummaries) {
    const card = document.createElement("article");
    card.className = "item-summary-card";
    const delta = itemSummary.produced - itemSummary.required;
    card.innerHTML = `
      <span>${escapeHtml(itemSummary.name)}</span>
      <strong>${itemSummary.produced.toLocaleString()} / ${itemSummary.required.toLocaleString()}</strong>
      <small>${delta === 0 ? "Exact planned quantity" : `${delta.toLocaleString()} over required`}</small>
    `;
    itemSummaryCards.appendChild(card);
  }
}

function renderLayoutPlans(plan) {
  layoutPlans.innerHTML = "";
  const colorMap = new Map(state.items.map((item, index) => [item.id, COLORS[index % COLORS.length]]));
  const settings = getActiveRunTypeSettings();

  for (const [index, layout] of plan.layouts.entries()) {
    const fragment = layoutCardTemplate.content.cloneNode(true);
    const title = fragment.querySelector(".layout-title");
    const meta = fragment.querySelector(".layout-meta");
    const cost = fragment.querySelector(".layout-cost");
    const preview = fragment.querySelector(".sheet-preview");
    const gripperZone = fragment.querySelector(".sheet-gripper");
    const safeArea = fragment.querySelector(".sheet-safe-area");
    const details = fragment.querySelector(".layout-details");

    title.textContent = `Layout ${index + 1}: ${layout.sheet.name}`;
    meta.textContent = `${formatNumber(layout.sheet.width)} x ${formatNumber(layout.sheet.height)} sheet`;
    cost.textContent = `${layout.repeats.toLocaleString()} sheets | ${formatCurrency(layout.totalCost)}`;

    const maxPreviewWidth = 520;
    const previewWidth = Math.min(maxPreviewWidth, Math.max(360, layout.sheet.width * 14));
    const previewHeight = Math.max(260, Math.round((layout.sheet.height / layout.sheet.width) * previewWidth));
    preview.style.width = `${previewWidth}px`;
    preview.style.height = `${previewHeight}px`;

    const scaleX = previewWidth / layout.sheet.width;
    const scaleY = previewHeight / layout.sheet.height;
    const gripperArea = getGripperArea(layout.sheet, settings);
    const usableArea = layout.usableArea;
    gripperZone.style.left = `${gripperArea.x * scaleX}px`;
    gripperZone.style.top = `${gripperArea.y * scaleY}px`;
    gripperZone.style.width = `${gripperArea.width * scaleX}px`;
    gripperZone.style.height = `${gripperArea.height * scaleY}px`;
    safeArea.style.left = `${usableArea.x * scaleX}px`;
    safeArea.style.top = `${usableArea.y * scaleY}px`;
    safeArea.style.width = `${usableArea.width * scaleX}px`;
    safeArea.style.height = `${usableArea.height * scaleY}px`;

    for (const placement of layout.placements) {
      const div = document.createElement("div");
      div.className = "placement";
      div.style.left = `${placement.x * scaleX}px`;
      div.style.top = `${placement.y * scaleY}px`;
      div.style.width = `${placement.width * scaleX}px`;
      div.style.height = `${placement.height * scaleY}px`;
      div.style.background = colorMap.get(placement.itemId) || COLORS[0];
      div.innerHTML = `
        <span class="placement-name">${escapeHtml(placement.itemName)}</span>
        <span class="placement-size">${formatNumber(placement.flatWidth)} x ${formatNumber(placement.flatHeight)}${placement.rotated ? " rot" : ""}</span>
      `;
      preview.appendChild(div);
    }

    const chips = document.createElement("div");
    chips.className = "detail-chip-row";
    chips.innerHTML = `
      <span class="chip">${layout.perSheetCount.toLocaleString()} pieces per sheet</span>
      <span class="chip">${layout.repeats.toLocaleString()} press sheets</span>
      <span class="chip">${layout.rotatedPlacements.toLocaleString()} rotated</span>
      <span class="chip">${layout.utilization.toFixed(1)}% coverage</span>
    `;

    const settingsSummary = document.createElement("div");
    settingsSummary.className = "layout-settings-summary";
    settingsSummary.textContent = `Setup ${formatCurrency(layout.setupCost)} | Gutter ${formatNumber(settings.gutter)} | Margin ${formatNumber(settings.sheetMargin)} | Gripper ${formatNumber(settings.gripper)} on ${settings.gripperEdge} edge`;

    const list = document.createElement("ul");
    list.className = "detail-list";
    for (const itemCount of layout.itemCounts) {
      const li = document.createElement("li");
      li.textContent = `${itemCount.name}: ${itemCount.perSheet.toLocaleString()} per sheet, ${itemCount.total.toLocaleString()} produced`;
      list.appendChild(li);
    }

    details.append(chips, settingsSummary, list);
    layoutPlans.appendChild(fragment);
  }
}

function optimizeLayouts(items, sheets, settings) {
  const preparedItems = items.map((item) => ({
    ...item,
    runWidth: item.width,
    runHeight: item.height
  }));
  const remaining = new Map(preparedItems.map((item) => [item.id, item.qty]));
  const layouts = [];
  const maxLayouts = Math.max(1, preparedItems.length * 2);

  for (let iteration = 0; iteration < maxLayouts; iteration += 1) {
    if ([...remaining.values()].every((qty) => qty <= 0)) {
      break;
    }

    const candidates = generateCandidates(preparedItems, sheets, remaining, settings);
    const candidate = chooseBestCandidate(candidates, preparedItems, sheets, remaining, settings);
    if (!candidate) {
      break;
    }

    const repeats = calculateRepeats(candidate, remaining, "max");
    if (repeats <= 0) {
      break;
    }

    const producedByLayout = new Map();
    for (const [itemId, perSheet] of candidate.counts.entries()) {
      const total = perSheet * repeats;
      producedByLayout.set(itemId, total);
      remaining.set(itemId, (remaining.get(itemId) || 0) - total);
    }

    const nextLayout = materializeLayout(candidate, repeats, producedByLayout, preparedItems, settings);
    const existingLayout = layouts.find((layout) => layout.key === nextLayout.key);
    if (existingLayout) {
      existingLayout.repeats += nextLayout.repeats;
      existingLayout.totalCost += nextLayout.repeats * existingLayout.sheet.cost;
      for (const itemCount of existingLayout.itemCounts) {
        const additional = nextLayout.itemCounts.find((entry) => entry.itemId === itemCount.itemId);
        if (additional) {
          itemCount.total += additional.total;
        }
      }
    } else {
      layouts.push(nextLayout);
    }
  }

  if ([...remaining.values()].some((qty) => qty > 0)) {
    layouts.push(...buildFallbackLayouts(preparedItems, sheets, remaining, settings));
  }

  const producedTotals = new Map(preparedItems.map((item) => [item.id, 0]));
  for (const layout of layouts) {
    for (const itemCount of layout.itemCounts) {
      producedTotals.set(itemCount.itemId, (producedTotals.get(itemCount.itemId) || 0) + itemCount.total);
    }
  }

  return {
    layouts,
    distinctLayouts: layouts.length,
    totalSheets: layouts.reduce((sum, layout) => sum + layout.repeats, 0),
    totalCost: layouts.reduce((sum, layout) => sum + layout.totalCost, 0),
    itemSummaries: preparedItems.map((item) => ({
      id: item.id,
      name: item.name,
      required: item.qty,
      produced: producedTotals.get(item.id) || 0
    }))
  };
}

function generateCandidates(items, sheets, remaining, settings) {
  const candidates = [];
  for (const sheet of sheets) {
    const usableArea = getUsableSheetArea(sheet, settings);
    if (usableArea.width <= 0 || usableArea.height <= 0) {
      continue;
    }
    const sortedItems = [...items].sort((a, b) => compareItemsForPacking(a, b, remaining));
    const dominantItem = sortedItems[0];

    candidates.push(...buildBalancedSameSizeCandidates(sheet, usableArea, sortedItems, remaining, settings));

    for (const rotated of [false, true]) {
      const tiledDominantCandidate = buildDominantTiledCandidate(
        sheet,
        usableArea,
        sortedItems,
        remaining,
        settings,
        dominantItem,
        rotated
      );

      if (tiledDominantCandidate && tiledDominantCandidate.placements.length) {
        candidates.push(tiledDominantCandidate);
      }
    }

    const primaryCandidate = packSheet(sheet, usableArea, sortedItems, remaining, settings);
    if (primaryCandidate && primaryCandidate.placements.length) {
      candidates.push(primaryCandidate);

      for (const lockedRotation of [false, true]) {
        const uniformCandidate = packSheet(
          sheet,
          usableArea,
          sortedItems,
          remaining,
          settings,
          new Map(),
          new Map([[dominantItem.id, lockedRotation]])
        );

        if (uniformCandidate && uniformCandidate.placements.length) {
          candidates.push(uniformCandidate);
        }
      }

      const dominantCount = primaryCandidate.counts.get(dominantItem.id) || 0;
      const secondaryItems = sortedItems.filter((item) => item.id !== dominantItem.id && (remaining.get(item.id) || 0) > 0);

      if (dominantCount > 1 && secondaryItems.length) {
        const hybridCapMaps = generateHybridCapMaps(dominantItem, dominantCount, secondaryItems);

        for (const hybrid of hybridCapMaps) {
          const priorityIds = new Set(hybrid.priorityItems.map((item) => item.id));
          const cappedCandidate = packSheet(
            sheet,
            usableArea,
            [dominantItem, ...hybrid.priorityItems, ...sortedItems.filter((item) => item.id !== dominantItem.id && !priorityIds.has(item.id))],
            remaining,
            settings,
            hybrid.caps
          );

          if (cappedCandidate && cappedCandidate.placements.length) {
            candidates.push(cappedCandidate);
          }

          for (const lockedRotation of [false, true]) {
            const uniformHybridCandidate = packSheet(
              sheet,
              usableArea,
              [dominantItem, ...hybrid.priorityItems, ...sortedItems.filter((item) => item.id !== dominantItem.id && !priorityIds.has(item.id))],
              remaining,
              settings,
              hybrid.caps,
              new Map([[dominantItem.id, lockedRotation]])
            );

            if (uniformHybridCandidate && uniformHybridCandidate.placements.length) {
              candidates.push(uniformHybridCandidate);
            }
          }
        }
      }
    }
  }
  return dedupeCandidates(candidates);
}

function buildBalancedSameSizeCandidates(sheet, usableArea, items, remaining, settings) {
  const candidates = [];
  const groups = groupItemsBySize(items, remaining);

  for (const group of groups) {
    for (const rotated of [false, true]) {
      const sample = group[0];
      const printWidth = rotated ? sample.runHeight : sample.runWidth;
      const printHeight = rotated ? sample.runWidth : sample.runHeight;
      const cols = countFit(usableArea.width, printWidth, settings.gutter);
      const rows = countFit(usableArea.height, printHeight, settings.gutter);
      const slotCount = cols * rows;

      if (cols <= 0 || rows <= 0 || slotCount < 2) {
        continue;
      }

      const maxSubsetSize = Math.min(group.length, slotCount);
      for (let subsetSize = maxSubsetSize; subsetSize >= 2; subsetSize -= 1) {
        const subset = [...group]
          .sort((a, b) => (remaining.get(b.id) || 0) - (remaining.get(a.id) || 0))
          .slice(0, subsetSize);
        const candidate = buildBalancedGroupedSheetCandidate(
          sheet,
          usableArea,
          subset,
          remaining,
          settings.gutter,
          rotated
        );

        if (candidate) {
          candidates.push(candidate);
        }
      }
    }
  }

  return candidates;
}

function buildDominantTiledCandidate(sheet, usableArea, items, remaining, settings, dominantItem, rotated) {
  const dominantLayout = buildTiledLayout(sheet, usableArea, dominantItem, rotated, settings.gutter);
  if (!dominantLayout || !dominantLayout.placements.length) {
    return null;
  }

  const printWidth = rotated ? dominantItem.runHeight : dominantItem.runWidth;
  const printHeight = rotated ? dominantItem.runWidth : dominantItem.runHeight;
  const cols = countFit(usableArea.width, printWidth, settings.gutter);
  const rows = countFit(usableArea.height, printHeight, settings.gutter);
  const occupiedWidth = cols > 0 ? cols * printWidth + (cols - 1) * settings.gutter : 0;
  const occupiedHeight = rows > 0 ? rows * printHeight + (rows - 1) * settings.gutter : 0;
  const rightX = usableArea.x + occupiedWidth + (cols > 0 ? settings.gutter : 0);
  const bottomY = usableArea.y + occupiedHeight + (rows > 0 ? settings.gutter : 0);
  const rightWidth = usableArea.x + usableArea.width - rightX;
  const bottomHeight = usableArea.y + usableArea.height - bottomY;
  const freeRects = [];

  if (rightWidth > 0) {
    freeRects.push({
      x: rightX,
      y: usableArea.y,
      width: rightWidth,
      height: usableArea.height
    });
  }

  if (bottomHeight > 0) {
    freeRects.push({
      x: usableArea.x,
      y: bottomY,
      width: occupiedWidth,
      height: bottomHeight
    });
  }

  const placements = [...dominantLayout.placements];
  const counts = new Map(dominantLayout.counts);
  const additionalItems = items.filter((item) => item.id !== dominantItem.id);
  fillGroupedSameSizeFreeRects(freeRects, additionalItems, remaining, settings, placements, counts);
  fillFreeRects(freeRects, additionalItems, remaining, settings, placements, counts);

  const usedArea = placements.reduce((sum, placement) => sum + placement.width * placement.height, 0);
  return {
    key: "",
    sheet,
    usableArea,
    placements,
    counts,
    utilizedArea: usedArea,
    utilization: (usedArea / (usableArea.width * usableArea.height)) * 100,
    rotationTransitions: countRotationTransitions(placements, settings.gutter)
  };
}

function fillGroupedSameSizeFreeRects(freeRects, items, remaining, settings, placements, counts) {
  let applied = true;

  while (applied) {
    applied = false;
    const groups = groupItemsBySize(items, remaining);
    if (!groups.length) {
      return;
    }

    let best = null;

    for (const rect of freeRects) {
      for (const group of groups) {
        const candidate = buildGroupedTiledRectCandidate(rect, group, settings.gutter, remaining);
        if (!candidate) {
          continue;
        }

        if (!best || candidate.slotCount > best.slotCount) {
          best = candidate;
        }
      }
    }

    if (!best) {
      return;
    }

    const rectIndex = freeRects.findIndex((rect) => rect === best.rect);
    if (rectIndex === -1) {
      return;
    }

    freeRects.splice(rectIndex, 1);

    for (const placement of best.placements) {
      placements.push(placement);
      counts.set(placement.itemId, (counts.get(placement.itemId) || 0) + 1);
    }

    if (best.rightWidth > 0) {
      freeRects.push({
        x: best.rightX,
        y: best.rect.y,
        width: best.rightWidth,
        height: best.rect.height
      });
    }

    if (best.bottomHeight > 0) {
      freeRects.push({
        x: best.rect.x,
        y: best.bottomY,
        width: best.occupiedWidth,
        height: best.bottomHeight
      });
    }

    pruneFreeRectangles(freeRects, settings.gutter);
    applied = true;
  }
}

function groupItemsBySize(items, remaining) {
  const groups = new Map();

  for (const item of items) {
    if ((remaining.get(item.id) || 0) <= 0) {
      continue;
    }

    const key = `${item.runWidth}x${item.runHeight}`;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  }

  return [...groups.values()].filter((group) => group.length > 1);
}

function buildGroupedTiledRectCandidate(rect, group, gutter, remaining) {
  const sample = group[0];
  const options = [
    buildTiledSlots(rect, sample, false, gutter, group, remaining),
    buildTiledSlots(rect, sample, true, gutter, group, remaining)
  ].filter(Boolean);

  return options.sort((a, b) => b.slotCount - a.slotCount)[0] || null;
}

function buildTiledSlots(rect, sample, rotated, gutter, group, remaining) {
  const printWidth = rotated ? sample.runHeight : sample.runWidth;
  const printHeight = rotated ? sample.runWidth : sample.runHeight;
  const cols = countFit(rect.width, printWidth, gutter);
  const rows = countFit(rect.height, printHeight, gutter);

  if (cols <= 0 || rows <= 0) {
    return null;
  }

  const slotCount = cols * rows;
  if (slotCount < group.length) {
    return null;
  }

  const placements = [];
  const allocated = distributeSlotsEvenly(group, slotCount, remaining);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const item = allocated[row * cols + col];
      if (!item) {
        continue;
      }

      placements.push({
        itemId: item.id,
        itemName: item.name,
        x: rect.x + col * (printWidth + gutter),
        y: rect.y + row * (printHeight + gutter),
        width: printWidth,
        height: printHeight,
        rotated,
        flatWidth: item.width,
        flatHeight: item.height
      });
    }
  }

  const occupiedWidth = cols * printWidth + (cols - 1) * gutter;
  const occupiedHeight = rows * printHeight + (rows - 1) * gutter;
  const rightX = rect.x + occupiedWidth + gutter;
  const bottomY = rect.y + occupiedHeight + gutter;
  const rightWidth = rect.x + rect.width - rightX;
  const bottomHeight = rect.y + rect.height - bottomY;

  return {
    rect,
    placements,
    slotCount,
    occupiedWidth,
    rightX,
    rightWidth,
    bottomY,
    bottomHeight
  };
}

function buildBalancedGroupedSheetCandidate(sheet, usableArea, group, remaining, gutter, rotated) {
  const sample = group[0];
  const printWidth = rotated ? sample.runHeight : sample.runWidth;
  const printHeight = rotated ? sample.runWidth : sample.runHeight;
  const cols = countFit(usableArea.width, printWidth, gutter);
  const rows = countFit(usableArea.height, printHeight, gutter);

  if (cols <= 0 || rows <= 0) {
    return null;
  }

  const slotCount = cols * rows;
  if (slotCount < group.length) {
    return null;
  }

  const allocated = distributeSlotsEvenly(group, slotCount, remaining);
  const placements = [];
  const counts = new Map();

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const item = allocated[row * cols + col];
      if (!item) {
        continue;
      }

      placements.push({
        itemId: item.id,
        itemName: item.name,
        x: usableArea.x + col * (printWidth + gutter),
        y: usableArea.y + row * (printHeight + gutter),
        width: printWidth,
        height: printHeight,
        rotated,
        flatWidth: item.width,
        flatHeight: item.height
      });
      counts.set(item.id, (counts.get(item.id) || 0) + 1);
    }
  }

  if (!placements.length) {
    return null;
  }

  const usedArea = placements.reduce((sum, placement) => sum + placement.width * placement.height, 0);
  return {
    key: "",
    sheet,
    usableArea,
    placements,
    counts,
    utilizedArea: usedArea,
    utilization: (usedArea / (usableArea.width * usableArea.height)) * 100,
    rotationTransitions: countRotationTransitions(placements, gutter)
  };
}

function distributeSlotsEvenly(group, slotCount, remaining) {
  const orderedItems = [...group].sort((a, b) => {
    const remainingDiff = (remaining.get(b.id) || 0) - (remaining.get(a.id) || 0);
    if (remainingDiff !== 0) {
      return remainingDiff;
    }
    return a.name.localeCompare(b.name);
  });
  const allocations = new Map(orderedItems.map((item) => [item.id, 0]));
  const allocated = [];

  while (allocated.length < slotCount) {
    const availableItems = orderedItems
      .filter((item) => (remaining.get(item.id) || 0) > 0)
      .sort((a, b) => {
        const currentDiff = (allocations.get(a.id) || 0) - (allocations.get(b.id) || 0);
        if (currentDiff !== 0) {
          return currentDiff;
        }
        const needDiff = (remaining.get(b.id) || 0) - (remaining.get(a.id) || 0);
        if (needDiff !== 0) {
          return needDiff;
        }
        return a.name.localeCompare(b.name);
      });

    if (!availableItems.length) {
      break;
    }

    for (const item of availableItems) {
      if (allocated.length >= slotCount) {
        break;
      }
      allocations.set(item.id, (allocations.get(item.id) || 0) + 1);
      allocated.push(item);
    }
  }

  return allocated;
}

function generateHybridCapMaps(dominantItem, dominantCount, secondaryItems) {
  const hybrids = [];
  const maxDistinctSecondaries = Math.min(secondaryItems.length, Math.max(0, dominantCount - 1));

  for (const secondaryItem of secondaryItems) {
    hybrids.push({
      priorityItems: [secondaryItem],
      caps: new Map([
        [dominantItem.id, Math.max(0, dominantCount - 1)]
      ])
    });

    hybrids.push({
      priorityItems: [secondaryItem],
      caps: new Map([
        [dominantItem.id, Math.max(0, dominantCount - 2)],
        [secondaryItem.id, 2]
      ])
    });
  }

  for (let reserveSlots = 2; reserveSlots <= maxDistinctSecondaries; reserveSlots += 1) {
    for (const combo of buildItemCombinations(secondaryItems, reserveSlots)) {
      const caps = new Map([[dominantItem.id, Math.max(0, dominantCount - reserveSlots)]]);
      for (const item of combo) {
        caps.set(item.id, 1);
      }
      hybrids.push({
        priorityItems: combo,
        caps
      });
    }
  }

  return hybrids;
}

function buildItemCombinations(items, size, startIndex = 0, prefix = []) {
  if (prefix.length === size) {
    return [prefix];
  }

  const combos = [];
  for (let index = startIndex; index <= items.length - (size - prefix.length); index += 1) {
    combos.push(...buildItemCombinations(items, size, index + 1, [...prefix, items[index]]));
  }
  return combos;
}

function packSheet(sheet, usableArea, items, remaining, settings, itemCaps = new Map(), orientationLocks = new Map()) {
  const sortedItems = [...items];
  const freeRects = [{ x: usableArea.x, y: usableArea.y, width: usableArea.width, height: usableArea.height }];
  const placements = [];
  const counts = new Map();

  fillFreeRects(freeRects, sortedItems, remaining, settings, placements, counts, itemCaps, orientationLocks);

  if (!placements.length) {
    return null;
  }

  const usedArea = placements.reduce((sum, placement) => sum + placement.width * placement.height, 0);
  return {
    key: "",
    sheet,
    usableArea,
    placements,
    counts,
    utilizedArea: usedArea,
    utilization: (usedArea / (usableArea.width * usableArea.height)) * 100,
    rotationTransitions: countRotationTransitions(placements, settings.gutter)
  };
}

function fillFreeRects(freeRects, items, remaining, settings, placements, counts, itemCaps = new Map(), orientationLocks = new Map()) {
  const sortedItems = [...items];

  let placedSomething = true;
  while (placedSomething) {
    placedSomething = false;
    for (const item of sortedItems) {
      const needed = remaining.get(item.id) || 0;
      const cap = itemCaps.get(item.id);
      if (needed <= 0) {
        continue;
      }
      if (cap !== undefined && (counts.get(item.id) || 0) >= cap) {
        continue;
      }

      const placement = findBestPlacement(freeRects, item, settings.gutter, placements, orientationLocks.get(item.id));
      if (!placement) {
        continue;
      }

      placements.push({
        itemId: item.id,
        itemName: item.name,
        x: placement.x,
        y: placement.y,
        width: placement.printWidth,
        height: placement.printHeight,
        rotated: placement.rotated,
        flatWidth: item.width,
        flatHeight: item.height
      });
      counts.set(item.id, (counts.get(item.id) || 0) + 1);
      splitFreeRectangles(freeRects, placement, settings.gutter);
      placedSomething = true;
      break;
    }
  }
}

function compareItemsForPacking(a, b, remaining) {
  const areaDiff = (b.runWidth * b.runHeight) - (a.runWidth * a.runHeight);
  if (areaDiff !== 0) {
    return areaDiff;
  }

  const maxSideDiff = Math.max(b.runWidth, b.runHeight) - Math.max(a.runWidth, a.runHeight);
  if (maxSideDiff !== 0) {
    return maxSideDiff;
  }

  const neededDiff = (remaining.get(b.id) || 0) - (remaining.get(a.id) || 0);
  if (neededDiff !== 0) {
    return neededDiff;
  }

  return a.name.localeCompare(b.name);
}

function findBestPlacement(freeRects, item, gutter, placements, lockedRotation) {
  let best = null;

  for (const rect of freeRects) {
    const orientations = [
      { printWidth: item.runWidth, printHeight: item.runHeight, rotated: false },
      { printWidth: item.runHeight, printHeight: item.runWidth, rotated: true }
    ].filter((orientation) => lockedRotation === undefined || orientation.rotated === lockedRotation);

    for (const orientation of orientations) {
      if (orientation.printWidth > rect.width || orientation.printHeight > rect.height) {
        continue;
      }

      const tileCount = countFit(rect.width, orientation.printWidth, gutter) *
        countFit(rect.height, orientation.printHeight, gutter);
      const shortSide = Math.min(rect.width - orientation.printWidth, rect.height - orientation.printHeight);
      const longSide = Math.max(rect.width - orientation.printWidth, rect.height - orientation.printHeight);
      const adjacencyScore = scoreAdjacencyConsistency({
        x: rect.x,
        y: rect.y,
        width: orientation.printWidth,
        height: orientation.printHeight,
        rotated: orientation.rotated,
        flatWidth: item.width,
        flatHeight: item.height
      }, placements, gutter);
      const orientationScore = scoreOrientationMajorityPreference(item, orientation.rotated, placements);
      const score =
        tileCount * 1000000 -
        (shortSide * 10000 + longSide + gutter) +
        adjacencyScore * 12000 +
        orientationScore * 18000;

      if (!best || score > best.score) {
        best = {
          x: rect.x,
          y: rect.y,
          printWidth: orientation.printWidth,
          printHeight: orientation.printHeight,
          rotated: orientation.rotated,
          score,
          sourceRect: rect
        };
      }
    }
  }

  return best;
}

function scoreAdjacencyConsistency(candidatePlacement, placements, gutter) {
  let score = 0;

  for (const placement of placements) {
    const sharesVerticalEdge = edgesTouch(
      candidatePlacement.x,
      candidatePlacement.width,
      placement.x,
      placement.width,
      gutter
    ) && rangesOverlap(
      candidatePlacement.y,
      candidatePlacement.height,
      placement.y,
      placement.height
    );

    const sharesHorizontalEdge = edgesTouch(
      candidatePlacement.y,
      candidatePlacement.height,
      placement.y,
      placement.height,
      gutter
    ) && rangesOverlap(
      candidatePlacement.x,
      candidatePlacement.width,
      placement.x,
      placement.width
    );

    if (sharesVerticalEdge || sharesHorizontalEdge) {
      score += candidatePlacement.rotated === placement.rotated ? 1.5 : -3;
    }
  }

  return score;
}

function scoreOrientationMajorityPreference(item, rotated, placements) {
  let sameSizeSameOrientation = 0;
  let sameSizeOppositeOrientation = 0;

  for (const placement of placements) {
    if (
      sameValue(placement.flatWidth, item.width) &&
      sameValue(placement.flatHeight, item.height)
    ) {
      if (placement.rotated === rotated) {
        sameSizeSameOrientation += 1;
      } else {
        sameSizeOppositeOrientation += 1;
      }
    }
  }

  return sameSizeSameOrientation - sameSizeOppositeOrientation;
}

function edgesTouch(startA, sizeA, startB, sizeB, gutter) {
  const endA = startA + sizeA;
  const endB = startB + sizeB;
  return sameBand(startA - endB, gutter) || sameBand(startB - endA, gutter);
}

function rangesOverlap(startA, sizeA, startB, sizeB) {
  const endA = startA + sizeA;
  const endB = startB + sizeB;
  return Math.min(endA, endB) - Math.max(startA, startB) > 0.0001;
}

function splitFreeRectangles(freeRects, placement, gutter) {
  const index = freeRects.findIndex((rect) => rect === placement.sourceRect);
  if (index === -1) {
    return;
  }

  const source = freeRects[index];
  freeRects.splice(index, 1);

  const rightX = source.x + placement.printWidth + gutter;
  const bottomY = source.y + placement.printHeight + gutter;
  const rightWidth = source.x + source.width - rightX;
  const bottomHeight = source.y + source.height - bottomY;

  if (rightWidth > 0) {
    freeRects.push({
      x: rightX,
      y: source.y,
      width: rightWidth,
      height: source.height
    });
  }

  if (bottomHeight > 0) {
    freeRects.push({
      x: source.x,
      y: bottomY,
      width: placement.printWidth,
      height: bottomHeight
    });
  }

  pruneFreeRectangles(freeRects, gutter);
}

function pruneFreeRectangles(freeRects, gutter = 0) {
  for (let i = freeRects.length - 1; i >= 0; i -= 1) {
    const rectA = freeRects[i];
    const invalid = rectA.width <= 0 || rectA.height <= 0;
    const contained = freeRects.some((rectB, index) => (
      index !== i &&
      rectA.x >= rectB.x &&
      rectA.y >= rectB.y &&
      rectA.x + rectA.width <= rectB.x + rectB.width &&
      rectA.y + rectA.height <= rectB.y + rectB.height
    ));

    if (invalid || contained) {
      freeRects.splice(i, 1);
    }
  }

  mergeFreeRectangles(freeRects, gutter);
}

function mergeFreeRectangles(freeRects, gutter) {
  let merged = true;

  while (merged) {
    merged = false;

    for (let i = 0; i < freeRects.length && !merged; i += 1) {
      for (let j = i + 1; j < freeRects.length && !merged; j += 1) {
        const rectA = freeRects[i];
        const rectB = freeRects[j];

        if (sameBand(rectA.y, rectB.y) && sameBand(rectA.height, rectB.height)) {
          const left = rectA.x <= rectB.x ? rectA : rectB;
          const right = left === rectA ? rectB : rectA;
          const gap = right.x - (left.x + left.width);

          if (gap >= 0 && gap <= gutter + 0.0001) {
            freeRects.splice(j, 1);
            freeRects.splice(i, 1, {
              x: left.x,
              y: left.y,
              width: right.x + right.width - left.x,
              height: left.height
            });
            merged = true;
          }
        } else if (sameBand(rectA.x, rectB.x) && sameBand(rectA.width, rectB.width)) {
          const top = rectA.y <= rectB.y ? rectA : rectB;
          const bottom = top === rectA ? rectB : rectA;
          const gap = bottom.y - (top.y + top.height);

          if (gap >= 0 && gap <= gutter + 0.0001) {
            freeRects.splice(j, 1);
            freeRects.splice(i, 1, {
              x: top.x,
              y: top.y,
              width: top.width,
              height: bottom.y + bottom.height - top.y
            });
            merged = true;
          }
        }
      }
    }
  }
}

function sameBand(a, b) {
  return Math.abs(a - b) < 0.0001;
}

function sameValue(a, b) {
  return Math.abs(a - b) < 0.0001;
}

function countRotationTransitions(placements, gutter) {
  let transitions = 0;

  for (let i = 0; i < placements.length; i += 1) {
    for (let j = i + 1; j < placements.length; j += 1) {
      const placementA = placements[i];
      const placementB = placements[j];

      const adjacent =
        (edgesTouch(placementA.x, placementA.width, placementB.x, placementB.width, gutter) &&
          rangesOverlap(placementA.y, placementA.height, placementB.y, placementB.height)) ||
        (edgesTouch(placementA.y, placementA.height, placementB.y, placementB.height, gutter) &&
          rangesOverlap(placementA.x, placementA.width, placementB.x, placementB.width));

      if (adjacent && placementA.rotated !== placementB.rotated) {
        transitions += 1;
      }
    }
  }

  return transitions;
}

function chooseBestCandidate(candidates, items, sheets, remaining, settings) {
  let best = null;

  for (const candidate of candidates) {
    const coverageEntries = [...candidate.counts.entries()].map(([itemId, perSheet]) => {
      const needed = Math.max(0, remaining.get(itemId) || 0);
      return {
        perSheet,
        needed,
        ratio: needed > 0 ? Math.min(perSheet / needed, 1) : 0
      };
    });

    const coveredItems = coverageEntries.filter((entry) => entry.perSheet > 0 && entry.needed > 0).length;
    const weightedCoverage = coverageEntries.reduce((sum, entry) => sum + entry.ratio, 0);
    const repeats = calculateRepeats(candidate, remaining, "max");
    const totalCost = repeats * candidate.sheet.cost + calculateLayoutSetupCost(candidate.sheet, settings);
    const projected = projectCandidateOutcome(candidate, repeats, items, sheets, remaining, settings);
    const candidateSummary = {
      ...candidate,
      repeats,
      totalCost,
      coveredItems,
      weightedCoverage,
      projectedLayouts: projected.projectedLayouts,
      projectedCost: projected.projectedCost,
      rotationTransitions: candidate.rotationTransitions ?? Number.MAX_SAFE_INTEGER
    };

    if (!best) {
      best = candidateSummary;
      continue;
    }

    if (settings.optimizationMode === "cost-first") {
      if (
        candidateSummary.projectedCost < best.projectedCost - 0.0001 ||
        (sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.projectedLayouts < best.projectedLayouts) ||
        (sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.projectedLayouts === best.projectedLayouts && candidateSummary.coveredItems > best.coveredItems) ||
        (sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.projectedLayouts === best.projectedLayouts && candidateSummary.coveredItems === best.coveredItems && candidateSummary.rotationTransitions < best.rotationTransitions) ||
        (sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.projectedLayouts === best.projectedLayouts && candidateSummary.coveredItems === best.coveredItems && candidateSummary.rotationTransitions === best.rotationTransitions && candidateSummary.utilization > best.utilization)
      ) {
        best = candidateSummary;
      }
    } else if (
      candidateSummary.projectedLayouts < best.projectedLayouts ||
      (candidateSummary.projectedLayouts === best.projectedLayouts && candidateSummary.projectedCost < best.projectedCost - 0.0001) ||
      (candidateSummary.projectedLayouts === best.projectedLayouts && sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.coveredItems > best.coveredItems) ||
      (candidateSummary.projectedLayouts === best.projectedLayouts && sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.coveredItems === best.coveredItems && candidateSummary.rotationTransitions < best.rotationTransitions) ||
      (candidateSummary.projectedLayouts === best.projectedLayouts && sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.coveredItems === best.coveredItems && candidateSummary.rotationTransitions === best.rotationTransitions && candidateSummary.weightedCoverage > best.weightedCoverage + 0.0001) ||
      (candidateSummary.projectedLayouts === best.projectedLayouts && sameValue(candidateSummary.projectedCost, best.projectedCost) && candidateSummary.coveredItems === best.coveredItems && candidateSummary.rotationTransitions === best.rotationTransitions && sameValue(candidateSummary.weightedCoverage, best.weightedCoverage) && candidateSummary.utilization > best.utilization)
    ) {
      best = candidateSummary;
    }
  }

  return best;
}

function projectCandidateOutcome(candidate, repeats, items, sheets, remaining, settings) {
  const simulatedRemaining = new Map(remaining);

  for (const [itemId, perSheet] of candidate.counts.entries()) {
    simulatedRemaining.set(itemId, (simulatedRemaining.get(itemId) || 0) - perSheet * repeats);
  }

  const remainderEstimate = estimateRemainingOutcome(items, sheets, simulatedRemaining, settings, 1);
  return {
    projectedLayouts: 1 + remainderEstimate.projectedLayouts,
    projectedCost: (repeats * candidate.sheet.cost + calculateLayoutSetupCost(candidate.sheet, settings)) +
      remainderEstimate.projectedCost
  };
}

function estimateRemainingOutcome(items, sheets, remaining, settings, depth) {
  if ([...remaining.values()].every((qty) => qty <= 0)) {
    return { projectedLayouts: 0, projectedCost: 0 };
  }

  if (depth <= 0) {
    const fallbackLayouts = buildFallbackLayouts(items, sheets, remaining, settings);
    return {
      projectedLayouts: fallbackLayouts.length,
      projectedCost: fallbackLayouts.reduce((sum, layout) => sum + layout.totalCost, 0)
    };
  }

  const candidates = generateCandidates(items, sheets, remaining, settings);
  if (!candidates.length) {
    const fallbackLayouts = buildFallbackLayouts(items, sheets, remaining, settings);
    return {
      projectedLayouts: fallbackLayouts.length,
      projectedCost: fallbackLayouts.reduce((sum, layout) => sum + layout.totalCost, 0)
    };
  }

  let best = null;

  for (const candidate of candidates) {
    const repeats = calculateRepeats(candidate, remaining, "max");
    if (repeats <= 0) {
      continue;
    }

    const nextRemaining = new Map(remaining);
    for (const [itemId, perSheet] of candidate.counts.entries()) {
      nextRemaining.set(itemId, (nextRemaining.get(itemId) || 0) - perSheet * repeats);
    }

    const nextEstimate = estimateRemainingOutcome(items, sheets, nextRemaining, settings, depth - 1);
    const projectedLayouts = 1 + nextEstimate.projectedLayouts;
    const projectedCost = (repeats * candidate.sheet.cost + calculateLayoutSetupCost(candidate.sheet, settings)) +
      nextEstimate.projectedCost;
    const summary = { projectedLayouts, projectedCost };

    if (!best) {
      best = summary;
      continue;
    }

    if (settings.optimizationMode === "cost-first") {
      if (
        summary.projectedCost < best.projectedCost - 0.0001 ||
        (sameValue(summary.projectedCost, best.projectedCost) && summary.projectedLayouts < best.projectedLayouts)
      ) {
        best = summary;
      }
    } else if (
      summary.projectedLayouts < best.projectedLayouts ||
      (summary.projectedLayouts === best.projectedLayouts && summary.projectedCost < best.projectedCost - 0.0001)
    ) {
      best = summary;
    }
  }

  if (best) {
    return best;
  }

  const fallbackLayouts = buildFallbackLayouts(items, sheets, remaining, settings);
  return {
    projectedLayouts: fallbackLayouts.length,
    projectedCost: fallbackLayouts.reduce((sum, layout) => sum + layout.totalCost, 0)
  };
}

function calculateRepeats(candidate, remaining, mode = "min") {
  const ratios = [];
  for (const [itemId, perSheet] of candidate.counts.entries()) {
    const needed = Math.max(0, remaining.get(itemId) || 0);
    if (perSheet > 0 && needed > 0) {
      ratios.push(Math.ceil(needed / perSheet));
    }
  }
  if (!ratios.length) {
    return 0;
  }
  return mode === "max" ? Math.max(...ratios) : Math.min(...ratios);
}

function buildFallbackLayouts(items, sheets, remaining, settings) {
  const layouts = [];
  const sortedNeeds = items
    .map((item) => ({ item, remaining: Math.max(0, remaining.get(item.id) || 0) }))
    .filter((entry) => entry.remaining > 0)
    .sort((a, b) => b.remaining - a.remaining);

  for (const entry of sortedNeeds) {
    const bestSingle = findBestSingleItemLayout(entry.item, sheets, settings);
    if (!bestSingle) {
      continue;
    }

    const repeats = Math.ceil(entry.remaining / bestSingle.perSheet);
    const producedByLayout = new Map([[entry.item.id, repeats * bestSingle.perSheet]]);
    layouts.push(materializeLayout(bestSingle, repeats, producedByLayout, items, settings));
  }

  return layouts;
}

function findBestSingleItemLayout(item, sheets, settings) {
  let best = null;
  for (const sheet of sheets) {
    const usableArea = getUsableSheetArea(sheet, settings);
    const placement = tileSingleItem(sheet, usableArea, item, settings);
    if (!placement || placement.counts.get(item.id) === 0) {
      continue;
    }

    const perSheet = placement.counts.get(item.id);
    const value = settings.optimizationMode === "cost-first"
      ? perSheet / Math.max(sheet.cost, 0.01)
      : perSheet + placement.utilization;

    if (!best || value > best.value) {
      best = { ...placement, value, perSheet };
    }
  }
  return best;
}

function tileSingleItem(sheet, usableArea, item, settings) {
  const options = [
    buildTiledLayout(sheet, usableArea, item, false, settings.gutter),
    buildTiledLayout(sheet, usableArea, item, true, settings.gutter)
  ].filter(Boolean);
  return options.sort((a, b) => b.utilization - a.utilization)[0] || null;
}

function buildTiledLayout(sheet, usableArea, item, rotated, gutter) {
  const printWidth = rotated ? item.runHeight : item.runWidth;
  const printHeight = rotated ? item.runWidth : item.runHeight;
  const cols = countFit(usableArea.width, printWidth, gutter);
  const rows = countFit(usableArea.height, printHeight, gutter);

  if (cols <= 0 || rows <= 0) {
    return null;
  }

  const placements = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      placements.push({
        itemId: item.id,
        itemName: item.name,
        x: usableArea.x + col * (printWidth + gutter),
        y: usableArea.y + row * (printHeight + gutter),
        width: printWidth,
        height: printHeight,
        rotated,
        flatWidth: item.width,
        flatHeight: item.height
      });
    }
  }

  const counts = new Map([[item.id, placements.length]]);
  const utilizedArea = placements.length * printWidth * printHeight;
  return {
    sheet,
    usableArea,
    placements,
    counts,
    utilizedArea,
    utilization: (utilizedArea / (usableArea.width * usableArea.height)) * 100
  };
}

function materializeLayout(candidate, repeats, producedByLayout, items, settings) {
  const itemCounts = [...candidate.counts.entries()].map(([itemId, perSheet]) => {
    const item = items.find((entry) => entry.id === itemId);
    return {
      itemId,
      name: item?.name || "Item",
      perSheet,
      total: producedByLayout.get(itemId) || 0
    };
  });

  return {
    key: buildCandidateKey(candidate),
    sheet: candidate.sheet,
    usableArea: candidate.usableArea,
    placements: candidate.placements,
    repeats,
    perSheetCount: [...candidate.counts.values()].reduce((sum, value) => sum + value, 0),
    itemCounts,
    utilization: candidate.utilization,
    rotatedPlacements: candidate.placements.filter((placement) => placement.rotated).length,
    totalCost: repeats * candidate.sheet.cost + calculateLayoutSetupCost(candidate.sheet, settings),
    setupCost: calculateLayoutSetupCost(candidate.sheet, settings)
  };
}

function dedupeCandidates(candidates) {
  const seen = new Set();
  return candidates.filter((candidate) => {
    const key = buildCandidateKey(candidate);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function buildCandidateKey(candidate) {
  const footprint = [...candidate.counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([itemId, count]) => `${itemId}:${count}`)
    .join("|");
  return `${candidate.sheet.id}|${footprint}`;
}

function getUsableSheetArea(sheet, settings) {
  const shorterIsHeight = sheet.height <= sheet.width;
  const reserveShortDimension = settings.gripperEdge === "short";
  const reserveWidth = reserveShortDimension ? shorterIsHeight : !shorterIsHeight;
  const x = settings.sheetMargin;
  const y = settings.sheetMargin;
  const width = sheet.width - settings.sheetMargin * 2 - (reserveWidth ? settings.gripper : 0);
  const height = sheet.height - settings.sheetMargin * 2 - (reserveWidth ? 0 : settings.gripper);
  return { x, y, width, height };
}

function getGripperArea(sheet, settings) {
  const shorterIsHeight = sheet.height <= sheet.width;
  const reserveShortDimension = settings.gripperEdge === "short";
  const reserveWidth = reserveShortDimension ? shorterIsHeight : !shorterIsHeight;

  if (reserveWidth) {
    return {
      x: sheet.width - settings.sheetMargin - settings.gripper,
      y: settings.sheetMargin,
      width: settings.gripper,
      height: sheet.height - settings.sheetMargin * 2
    };
  }

  return {
    x: settings.sheetMargin,
    y: sheet.height - settings.sheetMargin - settings.gripper,
    width: sheet.width - settings.sheetMargin * 2,
    height: settings.gripper
  };
}

function scoreItem(item, remaining, strategy) {
  const needed = remaining.get(item.id) || 0;
  const area = item.runWidth * item.runHeight;

  switch (strategy) {
    case "quantity":
      return needed;
    case "pressure":
      return needed * area;
    case "width":
      return item.runWidth * 1000 + needed;
    case "height":
      return item.runHeight * 1000 + needed;
    case "density":
      return needed / Math.max(area, 0.01);
    case "area":
    default:
      return area * 1000 + needed;
  }
}

function countFit(totalSpace, pieceSize, gutter) {
  if (pieceSize <= 0 || totalSpace < pieceSize) {
    return 0;
  }
  return Math.floor((totalSpace + gutter) / (pieceSize + gutter));
}

function startItemEdit(itemId) {
  const item = state.items.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }
  itemForm.classList.add("editing");
  itemEditIdInput.value = item.id;
  itemNameInput.value = item.name;
  itemWidthInput.value = item.width;
  itemHeightInput.value = item.height;
  itemQtyInput.value = item.qty;
  itemSubmitButton.textContent = "Update Item";
  cancelEditButton.classList.remove("hidden");
  itemNameInput.focus();
}

function resetItemForm() {
  itemForm.reset();
  itemForm.classList.remove("editing");
  itemEditIdInput.value = "";
  itemSubmitButton.textContent = "+";
  cancelEditButton.classList.add("hidden");
}

function startSheetEdit(sheetId) {
  const sheet = state.sheets.find((entry) => entry.id === sheetId);
  if (!sheet) {
    return;
  }
  openSettingsButton.click();
  state.selectedRunTypeId = sheet.runTypeId || state.selectedRunTypeId;
  sheetEditIdInput.value = sheet.id;
  sheetNameInput.value = sheet.name;
  sheetRunTypeInput.value = sheet.runTypeId || state.selectedRunTypeId;
  sheetWidthInput.value = sheet.width;
  sheetHeightInput.value = sheet.height;
  sheetCostInput.value = sheet.cost;
  sheetSubmitButton.textContent = "Update Sheet";
  cancelSheetEditButton.classList.remove("hidden");
}

function resetSheetForm() {
  sheetForm.reset();
  sheetEditIdInput.value = "";
  sheetRunTypeInput.value = state.selectedRunTypeId;
  sheetSubmitButton.textContent = "Add Sheet";
  cancelSheetEditButton.classList.add("hidden");
}

function closeSettingsModal() {
  settingsModal.classList.add("hidden");
  settingsModal.setAttribute("aria-hidden", "true");
}

function animateRunTypeSwitch(nextRunTypeId) {
  if (!nextRunTypeId || nextRunTypeId === state.selectedRunTypeId) {
    return;
  }

  const animatedPanels = [generalProductionCard, pressSheetSizesCard].filter(Boolean);
  if (!animatedPanels.length) {
    state.selectedRunTypeId = nextRunTypeId;
    persistState();
    markPlanDirty();
    return;
  }

  if (runTypeSwitchTimeout) {
    clearTimeout(runTypeSwitchTimeout);
    runTypeSwitchTimeout = null;
  }

  for (const panel of animatedPanels) {
    panel.classList.remove("switching-in");
    panel.classList.add("switching-out");
  }

  const midpoint = RUN_TYPE_SWITCH_DURATION_MS / 2;
  runTypeSwitchTimeout = setTimeout(() => {
    state.selectedRunTypeId = nextRunTypeId;
    persistState();
    markPlanDirty();

    requestAnimationFrame(() => {
      for (const panel of animatedPanels) {
        panel.classList.remove("switching-out");
        panel.classList.add("switching-in");
      }
    });

    runTypeSwitchTimeout = setTimeout(() => {
      for (const panel of animatedPanels) {
        panel.classList.remove("switching-in");
      }
      runTypeSwitchTimeout = null;
    }, midpoint);
  }, midpoint);
}

function buildPrintHtml(plan) {
  const settings = getActiveRunTypeSettings();
  const layoutSections = plan.layouts.map((layout, index) => {
    const previewWidth = 300;
    const previewHeight = Math.max(170, Math.round((layout.sheet.height / layout.sheet.width) * previewWidth));
    const scaleX = previewWidth / layout.sheet.width;
    const scaleY = previewHeight / layout.sheet.height;
    const gripperArea = getGripperArea(layout.sheet, settings);
    const usableArea = layout.usableArea;

    const placements = layout.placements.map((placement) => `
      <div
        class="print-placement"
        style="
          left:${placement.x * scaleX}px;
          top:${placement.y * scaleY}px;
          width:${placement.width * scaleX}px;
          height:${placement.height * scaleY}px;
          background:${COLORS[state.items.findIndex((item) => item.id === placement.itemId) % COLORS.length] || COLORS[0]};
        "
      >
        <strong>${escapeHtml(placement.itemName)}</strong>
        <span>${formatNumber(placement.flatWidth)} x ${formatNumber(placement.flatHeight)}${placement.rotated ? " rot" : ""}</span>
      </div>
    `).join("");

    return `
      <section class="print-layout">
        <div class="layout-header">
          <div>
            <h3>Layout ${index + 1}: ${escapeHtml(layout.sheet.name)}</h3>
            <div class="legend-note">${formatNumber(layout.sheet.width)} x ${formatNumber(layout.sheet.height)} sheet</div>
          </div>
          <div class="layout-meta">
            <div>${layout.repeats.toLocaleString()} sheets</div>
            <div>Setup ${formatCurrency(layout.setupCost)}</div>
            <div>Total ${formatCurrency(layout.totalCost)}</div>
          </div>
        </div>
        <div class="print-layout-body">
          <ul>
            ${layout.itemCounts.map((itemCount) => `<li>${escapeHtml(itemCount.name)}: ${itemCount.perSheet.toLocaleString()} per sheet, ${itemCount.total.toLocaleString()} produced</li>`).join("")}
          </ul>
          <div class="print-sheet-wrap">
            <div class="print-sheet" style="width:${previewWidth}px;height:${previewHeight}px;">
              <div
                class="print-gripper"
                style="
                  left:${gripperArea.x * scaleX}px;
                  top:${gripperArea.y * scaleY}px;
                  width:${gripperArea.width * scaleX}px;
                  height:${gripperArea.height * scaleY}px;
                "
              ></div>
              <div
                class="print-safe-area"
                style="
                  left:${usableArea.x * scaleX}px;
                  top:${usableArea.y * scaleY}px;
                  width:${usableArea.width * scaleX}px;
                  height:${usableArea.height * scaleY}px;
                "
              ></div>
              ${placements}
            </div>
          </div>
        </div>
      </section>
    `;
  }).join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Gang Runner Report</title>
      <style>
        @page { size: letter landscape; margin: 0.22in; }
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body { font-family: Arial, sans-serif; margin: 0; color: #1f1f1f; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { margin-bottom: 4px; font-size: 18px; }
        h2 { margin: 10px 0 6px; font-size: 13px; }
        h3 { margin-bottom: 4px; font-size: 12px; }
        .report-shell { display: grid; gap: 8px; }
        .report-header { display: flex; justify-content: space-between; align-items: end; gap: 12px; border-bottom: 1px solid #d8d0c4; padding-bottom: 6px; }
        .report-meta { color: #5f5446; font-size: 9px; line-height: 1.25; text-align: right; }
        .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 0; }
        .card { border: 1px solid #cfc6b8; padding: 7px 9px; border-radius: 8px; background: #faf8f4; }
        .card strong { display: block; font-size: 15px; margin-bottom: 2px; }
        .card div { font-size: 9px; }
        .item-summary-list { columns: 3; column-gap: 18px; margin: 0; padding-left: 15px; font-size: 9px; }
        .item-summary-list li { break-inside: avoid; margin-bottom: 3px; }
        .layouts-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; align-items: start; }
        .print-layout { break-inside: avoid; page-break-inside: avoid; border: 1px solid #ccc; border-radius: 10px; padding: 8px; background: #fff; }
        .layout-header { display: flex; justify-content: space-between; gap: 8px; align-items: start; margin-bottom: 5px; }
        .layout-meta { color: #5f5446; font-size: 9px; line-height: 1.2; text-align: right; }
        .print-layout-body { display: grid; gap: 6px; align-items: start; }
        .print-layout-body ul { margin: 0; padding-left: 15px; font-size: 9px; }
        .print-layout-body li { margin-bottom: 2px; }
        .print-sheet-wrap { overflow: visible; border: 1px solid #ddd; border-radius: 8px; padding: 6px; background: #faf7f2; }
        .print-sheet { position: relative; margin: 0 auto; max-width: 100%; border: 1px solid #999; background:
          linear-gradient(180deg, rgba(255,255,255,0.95), rgba(246,239,228,0.95)),
          repeating-linear-gradient(0deg, transparent, transparent 17px, rgba(0,0,0,0.04) 17px, rgba(0,0,0,0.04) 18px),
          repeating-linear-gradient(90deg, transparent, transparent 17px, rgba(0,0,0,0.04) 17px, rgba(0,0,0,0.04) 18px); }
        .print-gripper { position: absolute; border: 1px solid rgba(139,55,25,0.45); background:
          repeating-linear-gradient(135deg, rgba(139,55,25,0.22) 0, rgba(139,55,25,0.22) 8px, rgba(255,255,255,0) 8px, rgba(255,255,255,0) 16px),
          rgba(202,91,45,0.08); }
        .print-safe-area { position: absolute; border: 2px dashed rgba(36,86,62,0.55); background: rgba(36,86,62,0.05); }
        .print-placement { position: absolute; border: 1px solid rgba(0,0,0,0.18); border-radius: 5px; padding: 2px; font-size: 7px; line-height: 1.05; text-align: center; overflow: hidden; display: flex; flex-direction: column; justify-content: center; }
        .print-placement strong { display: block; font-size: 7px; font-weight: 700; }
        .print-placement span { font-size: 6px; }
        .legend-note { color: #6c5c4b; font-size: 8px; }
      </style>
    </head>
    <body>
      <div class="report-shell">
        <div class="report-header">
          <div>
            <h1>${escapeHtml(state.jobName || "Gang Runner Report")}</h1>
            <div class="legend-note">Hatched area = gripper edge. Dashed area = usable sheet area.</div>
          </div>
          <div class="report-meta">
            <div>Gutter ${formatNumber(settings.gutter)} in</div>
            <div>Margin ${formatNumber(settings.sheetMargin)} in</div>
            <div>Gripper ${formatNumber(settings.gripper)} in on ${escapeHtml(settings.gripperEdge)} edge</div>
          </div>
        </div>
        <div class="summary">
          <div class="card"><strong>${plan.distinctLayouts}</strong><div>Distinct layouts</div></div>
          <div class="card"><strong>${plan.totalSheets.toLocaleString()}</strong><div>Total press sheets</div></div>
          <div class="card"><strong>${formatCurrency(plan.totalCost)}</strong><div>Total estimated cost</div></div>
        </div>
        <div>
          <h2>Item Summary</h2>
          <ul class="item-summary-list">
            ${plan.itemSummaries.map((item) => `<li>${escapeHtml(item.name)}: ${item.produced.toLocaleString()} planned / ${item.required.toLocaleString()} required</li>`).join("")}
          </ul>
        </div>
        <div>
          <h2>Layouts</h2>
          <div class="layouts-grid">${layoutSections}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function sanitizeState(candidate) {
  const clean = structuredClone(defaultState);
  clean.jobName = typeof candidate.jobName === "string" ? candidate.jobName : "";
  clean.runTypes = Array.isArray(candidate.runTypes) && candidate.runTypes.length
    ? candidate.runTypes.map((runType) => ({
      id: typeof runType.id === "string" ? runType.id : createId(),
      name: typeof runType.name === "string" ? runType.name : "Run Type"
    }))
    : Array.isArray(candidate.categories) && candidate.categories.length
      ? candidate.categories.map((category) => ({
        id: typeof category.id === "string" ? category.id : createId(),
        name: typeof category.name === "string" ? category.name : "Run Type"
      }))
      : structuredClone(defaultState.runTypes);
  clean.selectedRunTypeId = typeof candidate.selectedRunTypeId === "string"
    ? candidate.selectedRunTypeId
    : typeof candidate.selectedCategoryId === "string"
      ? candidate.selectedCategoryId
      : clean.runTypes[0]?.id || "";
  clean.items = Array.isArray(candidate.items) ? candidate.items.map((item) => ({
    id: typeof item.id === "string" ? item.id : createId(),
    name: typeof item.name === "string" ? item.name : "Item",
    width: Math.max(0, toNumber(item.width)),
    height: Math.max(0, toNumber(item.height)),
    qty: Math.max(1, Math.round(toNumber(item.qty)))
  })).filter((item) => isPositiveDimension(item.width, item.height)) : [];
  clean.sheets = Array.isArray(candidate.sheets) && candidate.sheets.length ? candidate.sheets.map((sheet) => ({
    id: typeof sheet.id === "string" ? sheet.id : createId(),
    name: typeof sheet.name === "string" ? sheet.name : "Sheet",
    width: Math.max(0, toNumber(sheet.width)),
    height: Math.max(0, toNumber(sheet.height)),
    cost: Math.max(0, toNumber(sheet.cost)),
    enabled: sheet.enabled !== false,
    runTypeId: typeof sheet.runTypeId === "string"
      ? sheet.runTypeId
      : typeof sheet.categoryId === "string"
        ? sheet.categoryId
        : clean.runTypes[0]?.id || ""
  })).filter((sheet) => isPositiveDimension(sheet.width, sheet.height)) : clean.sheets;

  if (!clean.runTypes.some((runType) => runType.id === clean.selectedRunTypeId)) {
    clean.selectedRunTypeId = clean.runTypes[0]?.id || "";
  }

  clean.settingsByRunType = {};
  for (const runType of clean.runTypes) {
    const defaultSettings = createDefaultRunTypeSettings(runType.id, runType.name);
    const sourceSettings = candidate.settingsByRunType?.[runType.id] ?? candidate.settings ?? defaultSettings;
    clean.settingsByRunType[runType.id] = {
      platingCost: Math.max(0, toNumber(sourceSettings?.platingCost ?? sourceSettings?.layoutSetupCost ?? defaultSettings.platingCost)),
      makereadyTime: Math.max(0, toNumber(sourceSettings?.makereadyTime ?? defaultSettings.makereadyTime)),
      makereadySheets: Math.max(0, Math.round(toNumber(sourceSettings?.makereadySheets ?? defaultSettings.makereadySheets))),
      laborCostPerHour: Math.max(0, toNumber(sourceSettings?.laborCostPerHour ?? defaultSettings.laborCostPerHour)),
      gutter: Math.max(0, toNumber(sourceSettings?.gutter ?? defaultSettings.gutter)),
      sheetMargin: Math.max(0, toNumber(sourceSettings?.sheetMargin ?? defaultSettings.sheetMargin)),
      gripper: Math.max(0, toNumber(sourceSettings?.gripper ?? defaultSettings.gripper)),
      gripperEdge: sourceSettings?.gripperEdge === "short" ? "short" : defaultSettings.gripperEdge,
      optimizationMode: sourceSettings?.optimizationMode === "layouts-first" ? "layouts-first" : defaultSettings.optimizationMode
    };
  }

  return clean;
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? sanitizeState(JSON.parse(stored)) : structuredClone(defaultState);
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createBuiltInSheetsForRunType(runTypeId, runTypeName = "") {
  const normalizedName = String(runTypeName).trim().toLowerCase();
  const isLargeFormat = runTypeId === DEFAULT_LARGE_FORMAT_RUN_TYPE_ID || normalizedName === "large format";

  if (isLargeFormat) {
    return [
      { id: createId(), name: "4 x 8 ACM", width: 48, height: 96, cost: 55.25, enabled: true, runTypeId },
      { id: createId(), name: "5 x 10 ACM", width: 60, height: 112, cost: 96.01, enabled: true, runTypeId }
    ];
  }

  return [
    { id: createId(), name: "12 x 18", width: 12, height: 18, cost: 0.04525, enabled: true, runTypeId },
    { id: createId(), name: "13 x 19", width: 13, height: 19, cost: 0.05155, enabled: true, runTypeId },
    { id: createId(), name: "17.5 x 23", width: 17.5, height: 23, cost: 0.0778, enabled: true, runTypeId },
    { id: createId(), name: "19 x 25", width: 19, height: 25, cost: 0.087, enabled: true, runTypeId },
    { id: createId(), name: "20 x 26", width: 20, height: 26, cost: 0.09534, enabled: true, runTypeId },
    { id: createId(), name: "20 x 28", width: 20, height: 28, cost: 0.1058, enabled: true, runTypeId },
    { id: createId(), name: "23.5 x 29", width: 23.5, height: 29, cost: 0.1306, enabled: true, runTypeId }
  ];
}

function createDefaultRunTypeSettings(runTypeId, runTypeName = "") {
  const normalizedName = String(runTypeName).trim().toLowerCase();
  const isLargeFormat = runTypeId === DEFAULT_LARGE_FORMAT_RUN_TYPE_ID || normalizedName === "large format";

  if (isLargeFormat) {
    return {
      platingCost: 0,
      makereadyTime: 1,
      makereadySheets: 0,
      laborCostPerHour: 40,
      gutter: 0.2,
      sheetMargin: 0.25,
      gripper: 0,
      gripperEdge: "long",
      optimizationMode: "cost-first"
    };
  }

  return {
    platingCost: 36.6,
    makereadyTime: 10,
    makereadySheets: 100,
    laborCostPerHour: 40,
    gutter: 0.2,
    sheetMargin: 0.25,
    gripper: 0.75,
    gripperEdge: "long",
    optimizationMode: "cost-first"
  };
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toNumber(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }
  const normalized = String(value ?? "")
    .trim()
    .replace(/,/g, "")
    .replace(/[^\d.-]/g, "");
  return Number.parseFloat(normalized) || 0;
}

function isPositiveDimension(width, height) {
  return width > 0 && height > 0;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "press-layout-job";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(value);
}

function formatNumber(value) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: 3 });
}

function calculateLayoutSetupCost(sheet, settings) {
  const plating = settings.platingCost;
  const labor = (settings.makereadyTime / 60) * settings.laborCostPerHour;
  const makereadySheetsCost = settings.makereadySheets * sheet.cost;
  return plating + labor + makereadySheetsCost;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
