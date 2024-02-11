document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('entryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var nameInput = document.getElementById('name');
        var name = nameInput.value.trim();

        if (name !== '') {
            var winner = pickWinner(name);
            displayWinner(winner);
            nameInput.value = '';
        } else {
            alert('???');
        }
    });

    var prizes = [{
            name: 'NT100じч基ㄩ',
            value: 'NT$100',
            probability: 0.01
        }, {
            name: 'NT5じч基ㄩ',
            value: 'NT$5',
            probability: 0.05
        }, {
            name: 'NT1じч基ㄩ',
            value: 'NT$1',
            probability: 0.90
        }

    ];

    function pickWinner(name) {
        var totalProbability = prizes.reduce(function(sum, prize) {
            return sum + prize.probability;
        }, 0);

        var randomNumber = Math.random() * totalProbability;
        var accumulatedProbability = 0;

        for (var i = 0; i < prizes.length; i++) {
            accumulatedProbability += prizes[i].probability;
            if (randomNumber < accumulatedProbability) {
                return {
                    name: name,
                    prize: prizes[i]
                };
            }
        }
    }

    function displayWinner(winner) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '尺' + winner.name + ' ┾い' + winner.prize.name + '基 ' + winner.prize.value;
    }
});