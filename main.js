const typeSelectBefore = document.getElementById("typeSelectBefore");
const typeSelectAfter = document.getElementById("typeSelectAfter");
let beforeType = "小麥";
let beforeTime = "30";
let beforeQuantity = "18";
let afterType = "小麥";
let afterTime = "30";
let afterQuantity = "18";

// 動態生成選項
data.forEach((item) => {
  const optionBefore = document.createElement("option");
  optionBefore.value = item.type;
  optionBefore.textContent = item.type;
  typeSelectBefore.appendChild(optionBefore);

  const optionAfter = document.createElement("option");
  optionAfter.value = item.type;
  optionAfter.textContent = item.type;
  typeSelectAfter.appendChild(optionAfter);
});

// 選項改變時更新資訊
function updateInfo(state) {
  // 顯示選擇的資訊
  if (state == "before") {
    const selectedType = typeSelectBefore.value;
    const selectedData = data.find((item) => item.type === selectedType);
    beforeType = selectedData.type;
    beforeTime = selectedData.time;
    beforeQuantity = selectedData.quantity;
  } else if (state == "after") {
    const selectedType = typeSelectAfter.value;
    const selectedData = data.find((item) => item.type === selectedType);
    afterType = selectedData.type;
    afterTime = selectedData.time;
    afterQuantity = selectedData.quantity;
  }
}

// 選項改變時更新資訊
function submit() {
    const exchangeRatio = (beforeTime * 1) / (afterTime * 1);
    const result = document.getElementById('result');
    const result2 = document.getElementById('result2');
    result.innerHTML = `<p>${beforeType} 可以換取 ${afterType} 的比例為： 1  :  ${exchangeRatio.toFixed(2)}</p>`;
    result2.innerHTML = `<p>${beforeType} 可以換取 ${afterType} 的比例為： 1組  :  ${exchangeRatio.toFixed(2)*99}</p>`;
}
