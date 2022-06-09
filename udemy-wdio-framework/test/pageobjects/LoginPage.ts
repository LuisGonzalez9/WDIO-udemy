import AbstractPage from './AbstractPage'

class LoginPage extends AbstractPage{
    // Selectors
    public get loginForm(){
        return $('#login_form')
    }

    public get usernameInput() {
        return $('#user_login')
    }

    public get password() {
        return $('#user_password')
    }

    public get submitButton() {
        return $('input[type="submit"]')
    }
    public get errorMessage(){
        return $('.alert-error')
    }
    // Functions
    public async assertLoginPageVisible(){
        await (await this.loginForm).waitForDisplayed()
    }

    public async login(username: string, password: string){
        await (await this.usernameInput).setValue(username)
        await (await this.password).setValue(password)
        await (await this.submitButton).click()
    }

    public async assertLoginErrorMessaGE(){
        await expect(this.errorMessage).toHaveTextContaining('Login and/or password are wrong')
    }
}

export default new LoginPage()