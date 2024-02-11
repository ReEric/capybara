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
            name: 'NT100元折價券',
            value: 'NT$100',
            probability: 0.01
        }, {
            name: 'NT5元折價券',
            value: 'NT$5',
            probability: 0.05
        }, {
            name: 'NT1元折價券',
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
        resultDiv.innerHTML = '恭喜' + winner.name + ' 抽中' + winner.prize.name + '價值 ' + winner.prize.value;
    }
});