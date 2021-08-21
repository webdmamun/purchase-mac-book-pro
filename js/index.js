// IMac specification
document.getElementById('8gb-memory').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 0;

    calculateTotal(); // called total calculation function
    return extraMemoryCostText;
});

document.getElementById('16gb-memory').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 180;
    calculateTotal(); // called total calculation function
    return extraMemoryCostText;
});

document.getElementById('256gb-ssd').addEventListener('click', function () {
    const extraSsdCost = document.getElementById('storage-cost');
    const extraSsdCostText = extraSsdCost.innerText;
    extraSsdCost.innerText = 0;
    calculateTotal(); // called total calculation function
    return extraSsdCostText;
});

document.getElementById('512gb-ssd').addEventListener('click', function () {
    const extraSsdCost = document.getElementById('storage-cost');
    const extraSsdCostText = extraSsdCost.innerText;
    extraSsdCost.innerText = 100;
    calculateTotal() // called total calculation function
    return extraSsdCostText;
});

document.getElementById('1tb-ssd').addEventListener('click', function () {
    const extraSsdCost = document.getElementById('storage-cost');
    const extraSsdCostText = extraSsdCost.innerText;
    extraSsdCost.innerText = 180;
    calculateTotal() // called total calculation function
    return extraSsdCostText;
});

document.getElementById('free-delivery').addEventListener('click', function () {
    const freeDeliveryCost = document.getElementById('delivery-charge');
    const freeDeliveryCostText = freeDeliveryCost.innerText;
    freeDeliveryCost.innerText = 0;
    calculateTotal() // called total calculation function
    return freeDeliveryCostText;
    // getTotalValue('delivery-charge');
});

document.getElementById('paid-delivery').addEventListener('click', function () {
    const freeDeliveryCost = document.getElementById('delivery-charge');
    const freeDeliveryCostText = freeDeliveryCost.innerText;
    freeDeliveryCost.innerText = 20;
    calculateTotal() // called total calculation function
    return freeDeliveryCostText;
});

// total calculation function
function calculateTotal() {
    const defaultPriceInput = document.getElementById('default-price');
    const defaultPrice = parseInt(defaultPriceInput.innerText);

    const extraMemoryInput = document.getElementById('memory-cost');
    const extraMemoryCost = parseInt(extraMemoryInput.innerText);

    const extraSsdCostInput = document.getElementById('storage-cost');
    const extraSsdCost = parseInt(extraSsdCostInput.innerText);

    const freeDeliveryCostInput = document.getElementById('delivery-charge');
    const freeDeliveryCost = parseInt(freeDeliveryCostInput.innerText);

    const totalPriceInput = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceInput.innerText);

    const subTotalPriceInput = document.getElementById('sub-total');
    const subTotalPrice = parseInt(subTotalPriceInput.innerText);

    totalPriceInput.innerText = defaultPrice + extraMemoryCost + extraSsdCost + freeDeliveryCost;
    subTotalPriceInput.innerText = defaultPrice + extraMemoryCost + extraSsdCost + freeDeliveryCost;
    return totalPrice, subTotalPrice;

};
// Promo Code apply 
document.getElementById('coupon-apply').addEventListener('click', function () {

    const couponInput = document.getElementById('coupon-input');
    const couponInputText = couponInput.value;

    if (couponInputText == 'stevekaku') {

        const totalPriceText = document.getElementById('total-price');
        const totalPriceValue = parseInt(totalPriceText.innerText);
        var discountPrice = (totalPriceValue * 20) / 100;
        var result = totalPriceValue - discountPrice;
        totalPriceText.innerText = result;

        const subTotalPriceText = document.getElementById('sub-total');
        const subTotalPriceValue = parseInt(subTotalPriceText.innerText);
        var discountPrice = (subTotalPriceValue * 20) / 100;
        var result = subTotalPriceValue - discountPrice;
        subTotalPriceText.innerText = result;
        const disableButton = document.getElementById('coupon-apply');
        disableButton.disabled = true; // disable button after apply promo code 
        couponInput.value = ''; //clear input
    }
})