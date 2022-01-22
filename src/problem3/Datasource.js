function getPrices(){
const url = 'https://static.ngnrs.io/test/prices'
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        resolve(JSON.parse(req.response).data.prices);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

function callPromise(){
  getPrices()
    .then(prices => {
       const _logs = []
        prices.forEach(price => {
            const _log = `Mid price for ${price.pair} is ${mid(price.buy,price.sell)} ${quote(price.pair)}`
            _logs.push(_log)
            console.log(_log)

        });
        const app = document.getElementById('root')
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        const h1 = document.createElement('h1')
        h1.textContent = "Result of the XMLHttpRequest Call below.\n and in Console as well"
        container.appendChild(h1)
        app.appendChild(container)
        _logs.forEach(_log => {
          const card = document.createElement('div')
          card.setAttribute('class', 'card')
    
          const p = document.createElement('p')
          p.textContent = _log
    
          container.appendChild(card)
          card.appendChild(p)
        })

    }).catch(error => {
        console.log(error);
    });
}

function quote(_tradePair){
  return _tradePair.substring(3,6)
}

function mid(_buy,_sell){
  return ((_buy + _sell)/200)
}

