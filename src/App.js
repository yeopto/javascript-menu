const MenuController = require('./Controller/MenuController');

class App {
  play() {
		const menuController = new MenuController();
		menuController.startRecommendMenu();
	}
}

const app = new App();
app.play();

module.exports = App;
