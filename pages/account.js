import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			email: 'input[id="emailinput"]',
			password: 'input[id="passwordinput"]',
			submitButton: 'input[class="button login-block__button login-block__button_margin"]',
		}
	}

	fillEmailForm (username) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new AccountPage();
