// Define countries --> end line 165

const af = {
    code: 'af',
    name: 'Afghanistan',
    flag: '🇦🇫',
    capital: 'Kabul',
    population: 38346720
}

const ar = {
    code: 'ar',
    name: 'Argentina',
    flag: '🇦🇷',
    capital: 'Buenos Aires',
    population: 47327407
}

const at = {
    code: 'at',
    name: 'Austria',
    flag: '🇦🇹',
    capital: 'Vienna',
    population: 9027999
}

const ba = {
    code: 'ba',
    name: 'Bosnia and Herzegovina',
    flag: '🇧🇦',
    capital: 'Sarajevo',
    population: 3475000
}

const bg = {
    code: 'bg',
    name: 'Bulgaria',
    flag: '🇧🇬',
    capital: 'Sofia',
    population: 6520314
}

const cm = {
    code: 'cm',
    name: 'Cameroon',
    flag: '🇨🇲',
    capital: 'Yaounde',
    population: 29321637
}

const cn = {
    code: 'cn',
    name: 'China',
    flag: '🇨🇳',
    capital: 'Beijing',
    population: 1410539758
}

const co = {
    code: 'co',
    name: 'Colombia',
    flag: '🇨🇴',
    capital: 'Bogota',
    population: 52156254
}

const hr = {
    code: 'hr',
    name: 'Croatia',
    flag: '🇭🇷',
    capital: 'Zagreb',
    population: 3871833
}

const cz = {
    code: 'cz',
    name: 'Czech Republic',
    flag: '🇨🇿',
    capital: 'Prague',
    population: 10516707
}

const eg = {
    code: 'eg',
    name: 'Egypt',
    flag: '🇪🇬',
    capital: 'Cairo',
    population: 107770524
}

const fr = {
    code: 'fr',
    name: 'France',
    flag: '🇨🇵',
    capital: 'Paris',
    population: 67897000
}

const de = {
    code: 'de',
    name: 'Germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    population: 83695430
}

const gr = {
    code: 'gr',
    name: 'Greece',
    flag: '🇬🇷',
    capital: 'Athens',
    population: 10432481
}

const hu = {
    code: 'hu',
    name: 'Hungary',
    flag: '🇭🇺',
    capital: 'Budapest',
    population: 9689000
}

const ch = {
    code: 'ch',
    name: 'Switzerland',
    flag: '🇨🇭',
    capital: 'Bern',
    population: 8636896
}

const gb = {
    code: 'gb',
    name: 'United Kingdom',
    flag: '🇬🇧',
    capital: 'London',
    population: 67791400
}

const us = {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    capital: 'Washington D.C.',
    population: 333287557
}

const countryInfos = new Map()
countryInfos.set('af', af)
countryInfos.set('ar', ar)
countryInfos.set('at', at)
countryInfos.set('ba', ba)
countryInfos.set('bg', bg)
countryInfos.set('cm', cm)
countryInfos.set('cn', cn)
countryInfos.set('co', co)
countryInfos.set('hr', hr)
countryInfos.set('cz', cz)
countryInfos.set('eg', eg)
countryInfos.set('fr', fr)
countryInfos.set('de', de)
countryInfos.set('gr', gr)
countryInfos.set('hu', hu)
countryInfos.set('ch', ch)
countryInfos.set('gb', gb)
countryInfos.set('us', us)


function getCountryInfo(countryCode) {
    document.getElementById('countryInfo').classList.toggle('is-active')
    document.getElementById('infoTitle').innerHTML = countryInfos.get(countryCode).name
    document.getElementById('infoFlag').innerText = countryInfos.get(countryCode).flag

    document.getElementById('capital').innerText = countryInfos.get(countryCode).capital
    document.getElementById('population').innerText = countryInfos.get(countryCode).population
}

function closeInfo() {
    document.getElementById('countryInfo').classList.toggle('is-active')
}
