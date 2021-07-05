const firstNameNode = document.getElementById('firstName');
const lastNameNode = document.getElementById('lastName');
const addressNode = document.getElementById('address');
const postCodeNode = document.getElementById('postCode');
const phoneNode = document.getElementById('phone');
const emailNode = document.getElementById('email');
const sheetCakeNode = document.getElementById('sheetCake');
const roundCakeNode = document.getElementById('roundCake');
const sheetOptionsNode = document.getElementById('sheetCakeOptions');
const roundOptionsNode = document.getElementById('roundCakeOptions');
const widthNode = document.getElementById('width');
const lengthNode = document.getElementById('length');
const radiusNode = document.getElementById('radius');
const layersNode = document.getElementById('layers');
const icingNode = document.getElementById('icing');
const toppingNode = document.getElementById('topping');
const fillingNode = document.getElementById('filling');
const totalNode = document.getElementById('total');
const orderConfirmationNode = document.getElementById('orderConfirmation');
const orderConNameNode = document.getElementById('orderConName');
const orderConAddressNode = document.getElementById('orderConAddress');
const orderConPostNode = document.getElementById('orderConPost');
const orderConNumNode = document.getElementById('orderConNum');
const orderConEmailNode = document.getElementById('orderConEmail');
const orderConCakeNode = document.getElementById('orderConCake');
const orderConCakeCost = document.getElementById('orderConCakeCost');
const orderConIcingNode = document.getElementById('orderConIcing');
const orderConToppingNode = document.getElementById('orderConTopping');
const orderConFillingNode = document.getElementById('orderConFilling');
const orderConTotalNode = document.getElementById('orderConTotal');

function setEventListeners() {
    sheetCakeNode.addEventListener('change', changeType);
    roundCakeNode.addEventListener('change', changeType);
    lengthNode.addEventListener('change', printTotal);
    widthNode.addEventListener('change', printTotal);
    radiusNode.addEventListener('change', printTotal);
    layersNode.addEventListener('change', printTotal);
    icingNode.addEventListener('change', printTotal);
    toppingNode.addEventListener('change', printTotal);
    fillingNode.addEventListener('change', printTotal);
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        printOrder();
    });
}

function changeType() {
    if (sheetCakeNode.checked) {
        sheetOptionsNode.className = '';
        roundOptionsNode.className = 'hidden';
    } else if (roundCakeNode.checked) {
        roundOptionsNode.className = '';
        sheetOptionsNode.className = 'hidden';
    }
    printTotal();
}

function printTotal() {
    totalNode.textContent = `Total: $${getTotal().toFixed(2)}`;
}

function printOrder() {
    
    orderConfirmationNode.className = '';
    orderConNameNode.textContent = firstNameNode.value + ' ' + lastNameNode.value;
    orderConAddressNode.textContent = addressNode.value;
    orderConPostNode.textContent = postCodeNode.value;
    orderConNumNode.textContent = phoneNode.value;
    orderConEmailNode.textContent = emailNode.value;
    let cake = sheetCakeNode.checked ? 'Sheet' : 'Round';
    if (sheetCakeNode.checked) {
        orderConCakeNode.textContent = `${cake} cake ${lengthNode.value}cmx${widthNode.value}cm with ${layersNode.value} ${parseFloat(layersNode.value) > 1 ? 'layers' : 'layer'}:`;
    } else if (roundCakeNode.checked) {
        orderConCakeNode.textContent = `${cake} cake ${radiusNode.value}cm with ${layersNode.value} ${parseFloat(layersNode.value) > 1 ? 'layers' : 'layer'}:`;
    }
    orderConCakeCost.textContent = `$${(getBaseCost() + getLayerCost()).toFixed(2)}`
    if (!icingNode.checked) {
        orderConIcingNode.className = 'hidden';
    }
    if (!toppingNode.checked) {
        orderConToppingNode.className = 'hidden';    
    }
    if (!fillingNode.checked) {
        orderConFillingNode.className = 'hidden';
    }
    orderConTotalNode.textContent = `$${getTotal().toFixed(2)}`;
}

function getTotal() {
    return getBaseCost() + getLayerCost() + getExtraCost();
}

function getBaseCost() {
    let total;
    let area = getArea();
    let sheetMin = 900;
    let sheetCost = 18;
    let roundCost = 15;
    let roundMin = 707;
    if (sheetCakeNode.checked) {
        total = sheetCost + (area - sheetMin) * 0.02;
    } else if (roundCakeNode.checked) {
        total = roundCost + (area - roundMin) * 0.02;
    }
    return total;
}

function getLayerCost() {
    let layerTotal = 0;
    layerTotal += (parseFloat(layersNode.value) - 1) * (getBaseCost() * 0.5);
    return layerTotal;
}

function getExtraCost() {
    let extras = 0;
    if (icingNode.checked) {
        extras += 5;
    }
    if (toppingNode.checked) {
        extras += 7;
    }
    if (fillingNode.checked) {
        extras += 4;
    }
    return extras;
}

function getArea() {
    if (sheetCakeNode.checked) {
        return parseFloat(lengthNode.value) * parseFloat(widthNode.value);
    } else if (roundCakeNode.checked) {
        return Math.pow(parseFloat(radiusNode.value), 2) * Math.PI;
    }
}

setEventListeners();