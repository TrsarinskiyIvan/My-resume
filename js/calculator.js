let technologiesSelect = document.querySelector('#calculator-form-technologies');

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

function techSumm() { 

  const websiteType = document.querySelector('#calulator-form-website-type');

  const websiteCard = document.querySelector('#input-card input:checked');

  const websiteReception = document.querySelector('#input-reception input:checked');


  const technologiesValues = technologiesMultiSelect.getValue();

  const websiteTypeValue = websiteType.value;

  const websiteCardValue = websiteCard.value;

  const websiteReceptionValue = websiteReception.value;

  let siteCost = 0;

  for (let i = 0; i < technologiesValues.length; i++) { 
    siteCost += extractPriceFromValue(technologiesValues[i].value);
  }

  siteCost = siteCost+extractPriceFromValue(websiteTypeValue)+extractPriceFromValue(websiteCardValue)+extractPriceFromValue(websiteReceptionValue);

  if (websiteCardValue==='yes') { 
    siteCost += 300;
  }

  if (websiteReceptionValue==='yes') { 
    siteCost += 500;
  }

document.querySelector('.calculator-form-cost p').textContent = siteCost+' $';

}

const calculatorForm = document.querySelector('#calculator-form-id');

techSumm();

calculatorForm.addEventListener('submit',function(event) {

  event.preventDefault();
  techSumm();

});
 
