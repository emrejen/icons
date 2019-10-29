allPanels = $$('.js-list.list-wrapper');

raw = allPanels.reduce((acc, listValueWrapper) => {

    let title = listValueWrapper.querySelector('.list-header-name-assist').innerHTML;

    const allListCards = listValueWrapper.querySelectorAll('.list-card');

    acc[title] = allListCards.length;

    return acc;

}, {});

values = Object.keys(raw).map(item => {

    return [item, raw[item]];

});

values.unshift(['Value', 'Percent']);

console.info(JSON.stringify(values)); 