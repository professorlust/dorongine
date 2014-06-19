Synned.addItem({
	name: 'People',
	maximum: 1000000000
});

Synned.addItem({
	name: 'Cash',
	maximum: 1000000000,
	components: {'raw': {rate: 1}}
});

Synned.addItem({
	name: 'Brainpower',
	maximum: 1000000000,
	components: {'raw': {rate: 1}}
});

Synned.addItem({
	name: 'Energy',
	maximum: 1000000000,
	components: {'raw': {rate: 1}}
});

Synned.addItem({
	name: 'Ore',
	maximum: 1000000000,
	components: {'raw': {rate: 1}}
});

Synned.addItem({
	name: 'Water',
	maximum: 1000000000,
	components: {raw: {rate: 1}, 'weather': true }
});


Synned.addItem({
	name: 'Oil',
	maximum: 1000000000,
	components: {'mined': { rate: 0 } }
});

Synned.addItem({
	name: 'Cement',
	maximum: 1000000000,
	components: {'mined': { rate: 80 }}
});

Synned.addItem({
	name: 'Copper',
	maximum: 1000000000,
	components: {'mined': { rate: 20 }}
});

Synned.addItem({
	name: 'Silicon',
	maximum: 1000000000,
	components: {'mined': { rate: 10 }}
});

Synned.addItem({
	name: 'Gold',
	maximum: 1000000000,
	components: {'mined': { rate: 10 }}
});


Synned.addItem({
	name: 'Iron',
	maximum: 1000000000,
	components: {'mined': { rate: 50 }}
});

Synned.addItem({
	name: 'Steel',
	maximum: 1000000000,
	components: {
		created: {
			consumes: {
				'Iron': 10
			}
		}
	},
	requires: {
		topics: {
			'Manufacturing': 1
		}
	}
});

Synned.addItem({
	name: 'Chip',
	maximum: 1000000000,
	components: {
		created: {
			consumes: {
				'Gold': 1,
				'Silicon': 2,
				'Copper': 5
			}
		}
	},
	requires: {
		topics: {
			'Manufacturing': 3
		}
	}
	
});


Synned.addTopic({
	increaseBy: 10,
	name: 'Mining',
	levelUp: function (newLevel) {
		if (Synned.game().globalRates.mined < 100) {
			Synned.game().globalRates.mined += this.increaseBy;
		}
		if (Synned.game().globalRates.mined > 100) {
			Synned.game().globalRates.mined = 100;
		}
		
	}
});

Synned.addTopic({
	name: 'Politics',
	levelUp: function () {
		
	}
});

Synned.addTopic({
	name: 'Computers',
	levelUp: function () {
		
	}
});

Synned.addTopic({
	name: 'Manufacturing',
	levelUp: function () {
		
	}
});
